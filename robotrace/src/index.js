import React from "react";
import reactDom from "react-dom/client";

import { BrowserRouter } from "react-router-dom";
import Store from "./Context/Store";
import { ToastContainer } from "react-toastify";

const root = reactDom.createRoot(document.getElementById("root"));

root.render(
  <BrowserRouter>
  <ToastContainer position="top-center"/>
    <Store />
  </BrowserRouter>
);
