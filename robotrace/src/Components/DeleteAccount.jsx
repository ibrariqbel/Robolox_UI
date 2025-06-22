import React, { useState } from 'react'
import axios from 'axios';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import { FaLock } from 'react-icons/fa';
import "react-toastify/dist/ReactToastify.css";

const DeleteAccount = () => {
    const[password , SetPassword] = useState("");
    const {userId} = useParams();
    console.log(userId);
    const navigate = useNavigate();
    const url = `http://localhost:4000/user/delete/${userId}`;
  
    const handleDelete = async(e)=>{
           e.preventDefault();
        try {
           
           const res = await axios.post(url, {password:password});
           console.log(url)
           if(res.status === 200){
            toast.success(res.data.message);
            localStorage.clear()
            navigate("/")
           }
        } catch (error) {
            console.error(error)
        }
    }
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
             Are you sure you want to delete Your account?
             if yes kindly Proceed with Your Passworrd
           </p>
           <form>
             <input
               type="password"
               placeholder="Enter Your password"
               value={password}
               onChange={(e) => SetPassword(e.target.value)}
               required
             />
             <button onClick={handleDelete}>Delete Account</button>
             <p className="note">
               Remembered your password? <Link to="/user/login">Login</Link>
              
             </p>
           </form>
         </div>
       </div>
     </>
   );
}

export default DeleteAccount