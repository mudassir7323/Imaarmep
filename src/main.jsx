import "./index.css";
import App from "./App";
import React from "react";
import ReactDOM from "react-dom/client";
import { ServicesProvider } from "./context/ServicesContext";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <ServicesProvider>
      <App />
    </ServicesProvider>
  </BrowserRouter>,
);
