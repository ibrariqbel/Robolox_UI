import React, { useState } from "react";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import { Link, useNavigate } from "react-router-dom";
import { FaLock } from "react-icons/fa";
import "react-toastify/dist/ReactToastify.css";
import "./Register.css"; // Use the same CSS file as login

const Register = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const url = "http://localhost:4000/user/register";

  const handelRegister = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(url, { username, email, password });
      toast.success(response.data.message);
      if (response.data.message === "user craeted Successfully") {
        navigate("/user/login");
      }
    } catch (error) {
      console.error(error);
      toast.error(error?.response?.data?.message || "Server Error");
    }
  };

  return (
    <>
      <ToastContainer position="top-center" />
      <div className="auth-container">
        <div className="auth-box">
          <div className="icon-circle">
            <FaLock className="lock-icon" />
          </div>
          <h3>Create a New Account</h3>
          <form onSubmit={handelRegister}>
            <input
              type="text"
              placeholder="Enter Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
            <input
              type="email"
              placeholder="Enter Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <input
              type="password"
              placeholder="Enter Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <button type="submit">Register</button>
            <p className="note">
              Already have an account? <Link to="/user/login">Login</Link>
            </p>
          </form>
        </div>
      </div>
    </>
  );
};

export default Register;
