import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/globals.css"; // Import library styles directly for dev

import App from "./App";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <div className="flex flex-col items-center min-h-screen py-2 container mx-auto gap-10">
      <App />
    </div>
  </React.StrictMode>
);
