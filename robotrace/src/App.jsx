import React, { useEffect, useState } from "react";
import "./global.css";
//import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import Footer from "./Components/Footer";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Register from "./Components/Register";
import Login from "./Components/Login";
import axios from "axios";
import ForgotPass from "./Components/ForgotPass";
import Nopagefound from "./Components/Nopagefound";
import ResetPass from "./Components/ResetPass";

import DeleteAccount from "./Components/DeleteAccount";
import SecureProfile from "./Components/SecureProfile";

export const App = () => {
  const [username, setUsername] = useState("");
  const userId = localStorage.getItem("UserId");
  const [loggedIn, SetLoggedIn] = useState(false);
  const fetchData = async (userId) => {
    try {
      const url = `http://localhost:4000/UserGet/${userId}`;

      const response = await axios.get(url);
      console.log(response);
      setUsername(response.data.username);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchData(userId);
  }, [userId, loggedIn]);

  return (
    <>
      <BrowserRouter>
        <Navbar user={username} />
        <div className="main">
          <Routes>
            <Route path="*" element={<Nopagefound />} />
            <Route path="/" element={<Home user={username} />} />
            {/* Guest Routes */}
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/user/register" element={<Register />} />
            <Route
              path="/user/login"
              element={<Login setLoggIn={SetLoggedIn} />}
            />
            <Route path="/user/forgotpass" element={<ForgotPass />} />
            <Route path="/user/resetPass/:userId" element={<ResetPass />} />
            {/* secure Routes */}
            <Route
              path="/user/deleteAccount/:userId"
              element={<DeleteAccount />}
            />
            <Route path="/user/secureprofile" element={<SecureProfile />} />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </>
  );
};
