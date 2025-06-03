import React, {useState} from "react";
import api from "../api/axios";
import { useNavigate } from "react-router-dom";
import {toast} from "react-toastify";

function VendorRegister() {
    const [vendor, setVendor] = useState({name: "", email: "", password: ""})
    const navigate = useNavigate();

    const handleSubmit = async(e) => {
        e.preventDefault();

        try {
            await api.get("/vendor/register", vendor)
            toast.success("Vendor registered. Please Login.")
            navigate("/vendor/login")
        } catch (err) {
            toast.error("Registration failed!")
        }
    }

    return (
        <div className="min-h-screen flex justify-center items-center bg-gray-100 px-4">
            <div className="bg-white p-6 rounded shadow-md w-full max-w-md">
                <h2 className="text-xl font-bold mb-4">Register As A Vendor</h2>
                <form onSubmit={handleSubmit} className="space-y-3">

                    <input 
                    className="w-full border p-2 rounded"
                    placeholder="Business Name"
                    value={vendor.name}
                    onChange={(e) => setVendor ({...vendor, name: e.target.value})}
                    />

                    <input 
                    className="w-full border p-2 rounded"
                    placeholder="Email"
                    value={vendor.name}
                    onChange={(e) => setVendor ({...vendor,  email: e.target.value})}
                    />

                    <input 
                    className="w-full border p-2 rounded"
                    placeholder="password"
                    value={vendor.name}
                    onChange={(e) => setVendor ({...vendor, password: e.target.value})}
                    />
                    <button className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700">
                        Register
                    </button>
                </form>
            </div>
        </div>
    )
}
export default VendorRegister;