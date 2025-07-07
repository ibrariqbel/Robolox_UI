import { useContext, useEffect } from "react";
import "./global.scss";
//import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import Footer from "./Components/Footer";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Register from "./Components/Register";
import Login from "./Components/Login";

import ForgotPass from "./Components/ForgotPass";
import Nopagefound from "./Components/Nopagefound";
import ResetPass from "./Components/ResetPass";

import DeleteAccount from "./Components/DeleteAccount";
import SecureProfile from "./Components/SecureProfile";
import { context } from "./Context/Store";
import UserProfile from "./Components/UserProfile";

export const App = () => {
  const { fetchData, loading } = useContext(context);

  useEffect(() => {
    fetchData();
  }, [loading, fetchData]);

  return (
    <>
      <Navbar />
      <div className="main">
        <Routes>
          <Route path="*" element={<Nopagefound />} />
          <Route path="/" element={<Home />} />
          {/* Guest Routes */}
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/user/register" element={<Register />} />
          <Route path="/user/login" element={<Login />} />
          <Route path="/user/forgotpass" element={<ForgotPass />} />
          <Route path="/user/resetPass/:userId" element={<ResetPass />} />
          {/* secure Routes */}
          <Route
            path="/user/deleteAccount/:userId"
            element={<DeleteAccount />}
          />
          <Route path="/user/secureprofile" element={<SecureProfile />} />
          <Route path="/user/userprofile" element={<UserProfile />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
};
