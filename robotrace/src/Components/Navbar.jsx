import React, { useState } from "react";
import "./Navbar.css";
import { Link, useNavigate } from "react-router-dom";
import { HiOutlineBars3 } from "react-icons/hi2";
import { FaHome, FaInfo } from "react-icons/fa";
import { FcContacts } from "react-icons/fc";
import { HiDotsVertical } from "react-icons/hi";

const Navbar = (props) => {
  const username = props.user;
  const navigate = useNavigate()
  const userId = localStorage.getItem("UserId")
  const [ShowSidebar, SetShowSideBar] = useState(false);
  function handleNav() {
    SetShowSideBar(!ShowSidebar);
  }
  return (
   <> 
   
   <div className="navbar">
      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/contact">Contact</Link></li>
        
      </ul>

      <div className="menubar" onClick={handleNav}>
        <HiOutlineBars3 />
        {ShowSidebar && (
          <ul className="sidebar animate__animated animate__backInUp">
            <li><span><FaHome /> <Link to="/">Home</Link></span></li>
            <li><span><FaInfo /> <Link to="/about">About</Link></span></li>
            <li><span><FcContacts /> <Link to="/contact">Contact</Link></span></li>
            {props.user && <li><span><FcContacts /> <Link to="/profile">User Profile</Link></span></li>}
            {props.user && <li><span><FcContacts /> <Link to="/settings">Settings</Link></span></li>}
            {props.user && <li><span><FcContacts /> <Link to="/logout">Logout</Link></span></li>}
          </ul>
        )}
      </div>

      <div className="userProfile">
        <p>
          {props.user ? `Welcome ${username}` : <Link to="/user/login"><button>Login</button></Link>}
        </p>

        <div onClick={handleNav} className="dropDown">
          <HiDotsVertical />
          {ShowSidebar && (
            <ul className="dropdown-menu">
              <li><Link to="/profile">User Profile</Link></li>
              <li><Link to="/logout">Logout</Link></li>
              <li><Link to="/settings">Settings</Link></li>
              <li onClick={()=>{navigate(`/user/deleteAccount/${userId}`)}}><Link to="/settings">Delete my Account</Link></li>

            </ul>
          )}
        </div>
      </div>
    </div>
    </>
  );
};

export default Navbar;
