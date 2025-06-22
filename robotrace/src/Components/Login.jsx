import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
import { FaLock } from "react-icons/fa";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./Login.css";

const Login = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const url = "http://localhost:4000/user/login"
   const handlerLogin = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(url, {
        email,
        password,
      });

      if (data.message === "Logged in Succesfully") {
        localStorage.setItem("token", data.token);
        localStorage.setItem("UserId", data.userId);
        props.setLoggIn(true);
        toast.success(data.message);
        navigate("/");
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(error?.response?.data?.message || "Login failed");
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
          <h3>Login to Your Account</h3>
          <form onSubmit={handlerLogin}>
            <input
              type="text"
              placeholder="Enter Your Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <input
              type="password"
              placeholder="Enter Your Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <p className="note">
              <Link to="/user/forgotpass">Forgot your password?</Link>
            </p>
            <button type="submit">Login</button>
            <p className="note">
              Don't have an account? <Link to="/user/register">Register</Link>
            </p>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
