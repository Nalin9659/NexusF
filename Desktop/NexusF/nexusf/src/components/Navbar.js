import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const role = localStorage.getItem("role")
  return (
    <nav>
      <Link to="/">Home</Link>{" "}
      <Link to="/cart">Cart</Link>{" "}
      <Link to="/login">Login</Link>{" "}
      <Link to="/register">Register</Link>{" "}
      <Link to ="/my-Orders">My orders</Link>{" "}

      {role=== "admin" && <Link to="/admin">Admin Panel</Link>}
      
      <button
      onClick={()=>{
        localStorage.clear();
        window.location.href = "/login";
      }} className="text-red-600 hover:text-red-800 font-medium ml-4">Logout</button>
    </nav>


  );
}

export default Navbar;
