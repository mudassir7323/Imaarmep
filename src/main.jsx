import "./index.css";
import App from "./App";
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { ContactProvider } from "./context/contact/ContactContext";
import { ServicesProvider } from "./context/ServicesContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <HelmetProvider>
    <BrowserRouter>
      <ContactProvider>
        <ServicesProvider>
          <App />
        </ServicesProvider>
      </ContactProvider>
    </BrowserRouter>
  </HelmetProvider>
);
