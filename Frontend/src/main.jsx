import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './app/app.css'
import App from './app/App.jsx'
import { AIProvider } from './features/ai/context/ai.context.jsx'
import { AuthProvider } from './features/auth/contexts/auth.context.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <AIProvider>
        <App />
      </AIProvider>
    </AuthProvider>
  </StrictMode>,
)
