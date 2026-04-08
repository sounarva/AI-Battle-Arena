import { StateSchema, MessagesValue, ReducedValue, type GraphNode, StateGraph, START, END } from "@langchain/langgraph";
import { createAgent, HumanMessage, providerStrategy } from "langchain";
import { gemini_model, mistral_model, cohere_model } from "./models.service.js";
import { z } from "zod"

const State = new StateSchema({
    messages: MessagesValue,
    solution_1: new ReducedValue(z.string().default(""), {
        reducer: (_, next) => {
            return next
        }
    }),
    solution_2: new ReducedValue(z.string().default(""), {
        reducer: (_, next) => {
            return next
        }
    }),
    judge_recommendation: new ReducedValue(z.object({
        solution_1_score: z.number(),
        solution_2_score: z.number(),
        solution_1_reasoning: z.string(),
        solution_2_reasoning: z.string(),
    }).default({
        solution_1_score: 0,
        solution_2_score: 0,
        solution_1_reasoning: "",
        solution_2_reasoning: "",
    }), {
        reducer: (_, next) => {
            return next
        }
    })
})

const SolutionNode: GraphNode<typeof State> = async (state) => {
    const [mistral_response, cohere_response] = await Promise.all([
        mistral_model.invoke(state.messages[0].content as string),
        cohere_model.invoke(state.messages[0].content as string)
    ])

    return {
        solution_1: (mistral_response as any).content as string,
        solution_2: (cohere_response as any).content as string
    }
}

const JudgeNode: GraphNode<typeof State> = async (state) => {
    const { messages, solution_1, solution_2 } = state
    const problem = messages[0].content as string
    const judge = createAgent({
        model: mistral_model,
        tools: [],
        responseFormat: providerStrategy(z.object({
            solution_1_score: z.number().min(0).max(10),
            solution_2_score: z.number().min(0).max(10),
            solution_1_reasoning: z.string(),
            solution_2_reasoning: z.string(),
        }))
    })

    const judgeResponse = await judge.invoke({
        messages: [
            new HumanMessage(
                `You are a judge in a coding competition. You will be given two solutions to a problem. Your task is to evaluate the solutions and provide a score for each solution on a scale of 0 to 10. The solution with the higher score is the better solution and also provide the reasoning for the score of both solutions.

                Problem: ${problem}
                Solution 1: ${solution_1}
                Solution 2: ${solution_2}

                Provide your response in the following format:
                {
                    "solution_1_score": <score>,
                    "solution_2_score": <score>,
                    "solution_1_reasoning": "<reasoning>",
                    "solution_2_reasoning": "<reasoning>"
                }`
            )
        ]
    })

    return {
        judge_recommendation: judgeResponse.structuredResponse
    }
}

const graph = new StateGraph(State)
    .addNode("solution", SolutionNode)
    .addNode("judge", JudgeNode)
    .addEdge(START, "solution")
    .addEdge("solution", "judge")
    .addEdge("judge", END)
    .compile()

const invokeGraph = async (userInput: string) => {
    const result = await (graph as any).invoke({
        messages: [
            new HumanMessage(userInput)
        ]
    })
    return result
}

export { invokeGraph }
