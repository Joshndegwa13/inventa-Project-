import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { AuthProvider } from './context/authcontext.jsx'
import { BrowserRouter as Router } from 'react-router-dom';

import './App.css'; // Ensure the correct path is being used.


createRoot(document.getElementById('root')).render(
  <StrictMode>
  <AuthProvider>
  <Router>
    <App />
  </Router>
  </AuthProvider>
  </StrictMode>,
)
