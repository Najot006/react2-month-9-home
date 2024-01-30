import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "bootstrap/dist/css/bootstrap.min.css"
import api from "./components/Features/Products/productSlice.js";
import { ApiProvider } from "@reduxjs/toolkit/query/react";
import { BrowserRouter } from "react-router-dom";
ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <ApiProvider api={api}>
      <App />
    </ApiProvider>
  </BrowserRouter>
);
