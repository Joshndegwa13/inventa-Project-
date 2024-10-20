import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Authprovider } from './context/authcontext.jsx'
import { BrowserRouter } from 'react-router-dom';


createRoot(document.getElementById('root')).render(
  <StrictMode>
  <Authprovider>
  <BrowserRouter>
    <App />
  </BrowserRouter>
  </Authprovider>
  </StrictMode>,
)
