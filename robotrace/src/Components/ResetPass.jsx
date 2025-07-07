
import React, { useContext, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { FaLock } from "react-icons/fa";
import "react-toastify/dist/ReactToastify.css";
import { context } from "../Context/Store";


const ResetPass = () => {
  
  const {handleChangePass} = useContext(context);
  const [formData, setFormData] = useState({
    newPass: "",
    confirmPass: ""
  });
    const { userId } = useParams();
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
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
            Kindly enter a new password which you haven’t used in the last 6 months.
          </p>
          <form >
            <input
              type="password"
              name="newPass"
              placeholder="Enter New Password"
              value={formData.newPass}
              onChange={handleChange}
            
            />
            <input
              type="password"
              name="confirmPass"
              placeholder="Confirm New Password"
              value={formData.confirmPass}
              onChange={handleChange}
             
            />
            <p className="note">
              Use at least 8 characters, one uppercase, and one special character.
            </p>
            <button onClick={(e)=>{handleChangePass(e, formData, userId)}}>Change Password</button>
            <br /><br />

             <button type="submit"><Link to="/user/login" element={<ResetPass/>}>Login</Link></button>
          </form>
        </div>
      </div>
    </>
  );
};

export default ResetPass;
