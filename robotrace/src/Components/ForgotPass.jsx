import axios from "axios";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import { FaLock } from "react-icons/fa";
import "react-toastify/dist/ReactToastify.css";
import ResetPass from "./ResetPass";


const ForgotPass = () => {
  const [email, setEmail] = useState("");
  const url = "http://localhost:4000/user/forgotpass";

  const handleForgotPass = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(url, { email });
      if (res.status === 200) {
        toast.success(res.data.message);
      } else {
        toast.error(res.data.message);
      }
    } catch (error) {
      toast.error(error?.response?.data?.message || "Something went wrong");
    }
  };

  return (
    <>
      <ToastContainer />
      <div className="auth-container">
        <div className="auth-box">
          <div className="icon-circle">
            <FaLock className="lock-icon" />
          </div>
          <h3>Reset Your Password</h3>
          <p className="note">
            Enter your registered email address. We'll send you a link to reset
            your password.
          </p>
          <form onSubmit={handleForgotPass}>
            <input
              type="email"
              placeholder="Enter Your Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <button type="submit">Send Reset Link</button>
            <p className="note">
              Remembered your password? <Link to="/user/login">Login</Link>
             
            </p>
          </form>
        </div>
      </div>
    </>
  );
};

export default ForgotPass;
