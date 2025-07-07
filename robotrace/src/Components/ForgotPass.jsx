import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { FaLock } from "react-icons/fa";
import "react-toastify/dist/ReactToastify.css";

import { context } from "../Context/Store";

const ForgotPass = () => {
  const { handleForgotPass } = useContext(context);
  const [email, setEmail] = useState("");

  return (
    <>
      <ToastContainer 
      position="top-center"
      />
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
          <form>
            <input
              type="email"
              placeholder="Enter Your Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <button
              onClick={(e) => {
                handleForgotPass(e, email);
              }}
            >
              Send Reset Link
            </button>
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
