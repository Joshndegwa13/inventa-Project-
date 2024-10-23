import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { AuthProvider } from "./context/authcontext.jsx";
import { BrowserRouter as Router } from "react-router-dom";
import { AlertProvider } from "./context/AlertContext.jsx";

// Service Worker registration
if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker
      .register("/service-worker.js")
      .then((registration) => {
        console.log(
          "Service Worker registered with scope:",
          registration.scope
        );
      })
      .catch((error) => {
        console.error("Service Worker registration failed:", error);
      });
  });
}

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <AlertProvider>
        <Router>
          <App />
        </Router>
      </AlertProvider>
    </AuthProvider>
  </StrictMode>
);
