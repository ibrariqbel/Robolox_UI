import axios  from "axios";
 const baseUrl = "http://localhost:4000"


 const api = axios.create({
    baseURL:baseUrl,
    withCredentials:true,  // cookie
    // withXSRFToken:true
 })
 
 export default api;