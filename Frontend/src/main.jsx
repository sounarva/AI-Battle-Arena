import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './app/app.css'
import App from './app/App.jsx'
import { AIProvider } from './features/ai/context/ai.context.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AIProvider>
      <App />
    </AIProvider>
  </StrictMode>,
)
