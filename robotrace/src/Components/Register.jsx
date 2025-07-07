import React, { useContext, useState } from "react";
import {  ToastContainer } from "react-toastify";
import { Link} from "react-router-dom";
import { FaLock } from "react-icons/fa";
import "react-toastify/dist/ReactToastify.css";
import "./Register.css"; // Use the same CSS file as login
import { context } from "../Context/Store";

const Register = () => {
 const {handelRegister} = useContext(context);
 
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const formData = {
    username,
    email,
    password 
  }

  return (
    <>
      <ToastContainer position="top-center" />
      <div className="auth-container">
        <div className="auth-box">
          <div className="icon-circle">
            <FaLock className="lock-icon" />
          </div>
          <h3>Create a New Account</h3>
          <form>
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
            <button onClick={(e)=>{handelRegister(e, formData)}}>Register</button>
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
