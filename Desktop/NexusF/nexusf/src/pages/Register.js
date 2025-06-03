import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../api/axios";
import { toast } from "react-toastify";

function Register() {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      await api.post("/register", { email, password });
      toast.success("Register sueccessfully! Please login. ");
      navigate("/login");
    } catch (err) {
       toast.error("Registeration failed.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center">
          Create your Account
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="firstName"
            placeholder="Enter firstName..."
            value={firstname}
            onChange={(e) => setFirstname(e.target.value)}
            className="w-full p-2 border rounded focus:outline-none focus:ring focus:ring-blue-200"
          />

          <input
            type="lastname"
            placeholder="Enter LastName..."
            value={lastname}
            onChange={(e) => setLastname(e.target.value)}
            className="w-full p-2 border rounded focus:outline-none focus:ring focus:ring-blue-200"
          ></input>
          <input
            type="email"
            placeholder="Enter Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-2 border rounded focus:outline-none focus:ring focus:ring-blue-200"
          />

          <input
            type="password"
            placeholder="Enter Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-2 border rounded focus:outline-none focus:ring focus: ring-blue-200"
          />

          <button
            type="submit"
            className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700"
          >
            Register
          </button>
        </form>
        {error && (
          <p className="text-green-500 text-sm mt-4 text-center">{error}</p>
        )}
      </div>
    </div>
  );
}

export default Register;
