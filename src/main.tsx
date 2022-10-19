import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { ReactQueryClientProvider } from "./lib/react-query";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ReactQueryClientProvider>
      <App />
    </ReactQueryClientProvider>
  </React.StrictMode>,
);
