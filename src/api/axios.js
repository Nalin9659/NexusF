import axios from "axios";

const vendorToken= localStorage.getItem("vendorToken");
const api= axios.create({
    baseURL:"http://127.0.0.1:5000",
    headers: {
        "Content-type": "application/json",
        Authorization: vendorToken ? `Bearer ${vendorToken}`: "",
    },
})

export default api;