import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { AuthProvider } from './context/AuthContext'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider> {/*wraps the entire app*/}
      {/* Contains all our routes and pages, sits insidde AuthProvider so all pages have access to global auth state*/}
      <App />
    </AuthProvider>
  </StrictMode>,
)
