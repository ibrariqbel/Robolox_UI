import { useContext, useState } from "react";
import { Link } from "react-router-dom";

import { FaLock } from "react-icons/fa";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./Login.css";
import { context } from "../Context/Store";


const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const FormData = {
    email,
    password,
  };
const {handlerLogin} = useContext(context);

  return (
    <>
      <ToastContainer />
      <div className="auth-container">
        <div className="auth-box">
          <div className="icon-circle">
            <FaLock className="lock-icon" />
          </div>
          <h3>Login to Your Account</h3>
          <form>
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
            <button onClick={(e)=>{handlerLogin(e, FormData)}}>Login</button>
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
