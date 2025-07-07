import React from "react";
import reactDom from "react-dom/client";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'animate.css/animate.min.css'; // For animations
// No need for 'bootstrap-icons/font/bootstrap-icons.css' if using React Icons

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
