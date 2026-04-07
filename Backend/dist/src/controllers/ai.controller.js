import { invokeGraph } from "../services/graph.service.js";
const battleController = async (req, res) => {
    try {
        const { query } = req.body;
        if (!query) {
            return res.status(400).json({
                message: "Query is required"
            });
        }
        const result = await invokeGraph(query);
        return res.status(200).json({
            success: true,
            message: "Graph invoked successfully",
            result
        });
    }
    catch (error) {
        console.log(error);
        return res.status(500).json({
            message: "Internal server error"
        });
    }
};
export { battleController };
//# sourceMappingURL=ai.controller.js.map