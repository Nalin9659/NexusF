import axios from "axios";

const token= localStorage.getItem("token");
const api= axios.create({
    baseURL:"https://nexusf.onrender.com/",
    headers: {
        "Content-type": "application/json",
        Authorization: token ? `Bearer ${token}`: "",
    },
})

export default api;