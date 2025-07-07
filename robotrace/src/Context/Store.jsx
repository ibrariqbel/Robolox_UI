import { createContext, useCallback, useState } from "react";
import { App } from "../App";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import api from "../Utils/AxiosInstance";

export const context = createContext();

const Store = () => {
  const navigate = useNavigate();

  const baseUrl = "http://localhost:4000";
  const [store, setStore] = useState(
    {
      loading: false,
      username: "",
      email: "",

      user:{}
    },
    []
  );

 
  
  const fetchData = useCallback(async () => {
    try {
      const response = await api.get("/UserGet");

      setStore((prev) => ({
        ...prev,
        username: response.data.user.username,
        email: response.data.user.email,
      
        user : response.data.user,
      }));

      localStorage.setItem("UserId", response.data.user._id); 
    } catch (error) {
      console.log(error);
    }
  }, []);

  const handelRegister = async (e, FormData) => {
    e.preventDefault();

    try {
      const response = await api.post("/user/register", FormData);
      toast.success(response.data.message);
      if (response.data.message === "user craeted Successfully") {
        navigate("/user/login");
      }
    } catch (error) {
      console.error(error);
      toast.error(error?.response?.data?.message || "Server Error");
    }
  };
  const handlerLogin = async (e, FormData) => {
    e.preventDefault();
    try {
 
       setStore((pre) => ({ ...pre, loading: false }));
      const { data } = await api.post("/user/login", FormData);

    
      if (data.message === "Logged in Succesfully") {
        toast.success(data.message);

        setStore((prev) => ({
          ...prev,
          username: data.user.username,
          email: data.user.email,
          userId: data.user._id,
        }));

        localStorage.setItem("UserId", data.user._id); // ✅ Save to localStorage

        navigate("/");
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(error?.response?.data?.message || "Login failed");
    } finally {
      setStore((pre) => ({ ...pre, loading: false }));
    }
  };

  const handleChangePass = async (e, formData, userId) => {
    e.preventDefault();
    const url = `${baseUrl}/user/password/reset/${userId}`;

    try {
      const res = await api.put(url, formData);

      console.log(res);
      if (res.status === 200) {
        toast.success(res.data.message);
      } else {
        toast.error(res.data.message);
      }
    } catch (error) {
      toast.error(error?.response?.data?.message);
      if (error.response.status === 500) {
        toast.error("Server Error!");
      } else if (error.response.status === 500) {
        toast.error("Bad Request!");
      }
    }
  };

  const handleForgotPass = async (e, email) => {
    e.preventDefault();
    // const url = `${baseUrl}/user/forgotpass`;
    try {
      const res = await api.post("/user/forgotpass", { email });
      if (res.status === 200) {
        toast.success(res.data.message);
      } else {
        toast.error(res.data.message);
      }
    } catch (error) {
      toast.error(error?.response?.data?.message || "Something went wrong");
    }
  };

  const handleDelete = async (e, password, userId) => {
    e.preventDefault();
    // const url = `${baseUrl}/user/delete/${userId}`;
    try {
      const res = await api.post("user/delete", { password: password });

      if (res.status === 200) {
        toast.success(res.data.message);
        localStorage.clear();

        // Delay navigation to allow toast to display
        setTimeout(() => {
          navigate("/");
        }, 1500);
      }
    } catch (error) {
      console.error(error);
      if (
        error.response &&
        error.response.data &&
        error.response.data.message
      ) {
        toast.error(error.response.data.message);
      } else {
        toast.error("An error occurred while deleting your account.");
      }
    }
  };

  const uploadProfileImage = async(formData)=>{
    try {
      const  res =  await api.post("/user/upload/profile", formData)

      if(res.status ===200){
        toast.success(res.data.user.message)
      }
    } catch (error) {
      toast.error("Server Error");
      console.error(error);
    }

  };

  const createService = async (formData)=>{
    try {
       setStore((pre) => ({ ...pre, loading: true }));

      const  res =  await api.post("/seller/create/services", formData)
      if(res.status ===200){
        toast.success(res.data.message);
      
        sessionStorage.setItem("ServiceId", res.data.payload._id)
        // console.log(res.payload._id)
        return true;
      }
      
    } catch (error) {
      console.error(error)
      return false
    }finally{
       setStore((pre) => ({ ...pre, loading: false }));

    }
  };

  const uploadServicePic = async(formData,ServiceId)=>{
    try {
       setStore((pre) => ({ ...pre, loading: true }));

      const res = await api.post(`/seller/upload/serviceimage?serviceId=${ServiceId}`, formData);
     // navigate("/user/userprofile")
      if(res.status ===200){
        return true
      }
    } catch (error) {
      console.log(error);
      return false;
    }finally{
       setStore((pre) => ({ ...pre, loading: false }));

    }
  }
  return (
    <context.Provider
      value={{
        ...store,
        handlerLogin,
        fetchData,
        handelRegister,
        handleChangePass,
        handleForgotPass,
        handleDelete,
        uploadProfileImage,
       createService,
       uploadServicePic,
      }}
    >
      <App />
    </context.Provider>
  );
};

export default Store;
