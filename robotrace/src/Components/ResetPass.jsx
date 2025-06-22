import axios from "axios";
import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import { FaLock } from "react-icons/fa";
import "react-toastify/dist/ReactToastify.css";


const ResetPass = () => {

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
  const url = `http://localhost:4000/user/password/reset/${userId}`;

  const handleChangePass = async (e) => {
    e.preventDefault();
   
    try {
      const res = await axios.put(url, formData);
     
       console.log(res);
    if (res.status === 200) {
     toast.success(res.data.message);
    }else{
      toast.error(res.data.message)
    }

      
    } catch (error) {
      toast.error(error?.response?.data?.message);
      if(error.response.status === 500){
        toast.error("Server Error!")
      }else if(error.response.status === 500){
        toast.error("Bad Request!")
      }
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
            Kindly enter a new password which you haven’t used in the last 6 months.
          </p>
          <form onSubmit={handleChangePass}>
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
            <button type="submit">Change Password</button>
            <br /><br />

             <button type="submit"><Link to="/user/login" element={<ResetPass/>}>Login</Link></button>
          </form>
        </div>
      </div>
    </>
  );
};

export default ResetPass;
