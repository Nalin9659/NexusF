import React, {useState} from "react";
import api from "../api/axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

function VendorLogin() {
    const [email, setEmail]= useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();

        try {
            const res = await api.post("/vendor/login", {email, password});
            localStorage.setItem("vendor_token", res.data.token)
            localStorage.setItem("vendor_name", res.data.name)
            toast.success("Welcome, vendor!")
            navigate("/vendor/dashboard")
        } catch (err) {
            toast.error("Invalid login");
        }
    }

    return (
        <div className="min-h-screen flex justify-center items-center bg-gray-100 px-4">
            <div className="bg-white p-6 rounded shadow-md w-full max-w-md">
                <h2 className="text-xl font-bold mb-4">Vendor Login</h2>
                <form onSubmit={handleLogin} className="space-y-3">

                    <input 
                    className="w-full border p-2 rounded"
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e)=> setEmail(e.target.value)}
                    />

                    <input 
                    className="w-full border p-2 rounded"
                    type="password"
                    placeholder="password"
                    value={password}
                    onChange={(e)=> setPassword(e.target.value)}
                    />
                    <button className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700">Login</button>
                </form>
            </div>
        </div>
    )
}
export default VendorLogin;