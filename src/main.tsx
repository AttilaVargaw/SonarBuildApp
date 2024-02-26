import "./index.css";

import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App.tsx";

const root = document.getElementById("intro3");

if (root) {
  ReactDOM.createRoot(root).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );

  console.log("Sonar Build An Interaction is running");
} else {
  console.log("Root not found!");
}
