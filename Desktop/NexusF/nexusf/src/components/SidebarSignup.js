import React, { useState } from "react";
import api from "../api/axios";

function SidebarSignup() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [msg, setMsg]= useState("")

    const handlSignup = async (e) =>{
        e.preventDefault()
        try {
            await api.post("/register", {email, password})
            setMsg ("Signup successful! Please login")
        }catch (err) {
            setMsg("Signup failed")
        }
    }
    return (
        <div className="bg-white p-4 rounded shadow-md">
            <h3 className="text-lg font-bold mb-2">Join FoodieExpress</h3>
            <form onSubmit={handlSignup} className="space-y-2">
                <input className="border p-2 w-full" type="email" placeholder="Enter Email" value={email} onChange={e => setEmail(e.target.value)}/>
                <input className="border p-2 w-full" type="password" placeholder="Enter Password" value={password} onChange={e => setPassword(e.target.value)}/>
                <button type="submit" className="bg-blue-600 text-white w-full py-1 rounded hover:bg-blue-700">Sign Up</button>
                {msg && <p className="text-sm text-green-600 mt-2">{msg}</p>}
            </form>
        </div>
    )
}
export default SidebarSignup;