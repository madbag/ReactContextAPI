// src/main.jsx
// ... previous imports stay unchanged
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import { ThemeProviderWrapper } from "./context/theme.context"; // <== IMPORT

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <Router>
      <ThemeProviderWrapper>   {/*  <== ADD  */}
        <App />
      </ThemeProviderWrapper>  {/*  <== ADD  */}
    </Router>
  </React.StrictMode>
);

