import axios from 'axios';
import { useEffect } from 'react'
import { FaYoast } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom'

const IsAuthorized = () => {
  const navigate = useNavigate();


 

// const verifyToken = async(token)=>{
//    const url = "http://localhost:4000/user/isAuth";
//   const res = await axios.post(url, token);

//   if(res.status === 200 && res.data.message === "Token Verify"){
//     navigate("/")
//   }else{
//     navigate("/user/login");
//   }
// }

const verifyToken = async(token)=>{
   const url = `http://localhost:4000/user/isAuth/${token}`;
   console.log("token is:" +token);
  const res = await axios.get(url);

  if(res.status === 200 && res.data.message === "Token Verify"){
     navigate("/user/secureprofile")
  }else{
    navigate("/user/login");
  }
} 

  useEffect(()=>{
      const token = localStorage.getItem("token")
    if(!token){
    return navigate("/user/login")
  }else{
    verifyToken(token);
  }
  },[navigate])
}

export default IsAuthorized