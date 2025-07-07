import React, { useContext, useState } from "react";

import { Link, useParams } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { FaLock } from "react-icons/fa";
import "react-toastify/dist/ReactToastify.css";
import { context } from "../Context/Store";

const DeleteAccount = () => {
  const { handleDelete } = useContext(context);
  const [password, setPassword] = useState("");
  const { userId } = useParams();


  return (
    <>
      <ToastContainer />
      <div className="auth-container">
        <div className="auth-box">
          <div className="icon-circle">
            <FaLock className="lock-icon" />
          </div>
          <h3>Delete Your Account</h3>
          <p className="note">
            Are you sure you want to delete your account? If yes, kindly proceed
            with your password.
          </p>
          <form>
            <input
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <button
              onClick={(e) => {
                handleDelete(e, password, userId);
              }}
            >
              Delete Account
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

export default DeleteAccount;
