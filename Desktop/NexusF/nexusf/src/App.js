import React from "react";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from "./pages/Home"
import Login from "./pages/Login"
import Cart from "./pages/Cart"
import Register from "./pages/Register";
import Navbar from "./components/Navbar";
import MyOrders from "./pages/MyOrders";
import AdminPanel from "./pages/AdminPanel";
import Footer from "./pages/Footer";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ProtectedRoute from "./components/ProtectedRouted";

function App() {
  return(
   <div>
    <h1><span>Nexus Food</span></h1>

    <Router>
      <Navbar/>
        <Routes>
          <Route path= "/" element= {<Home/>} />
          <Route path= "/login" element={<Login/>} />
          <Route path = "/cart" element={<Cart/>} />
          <Route path = "/register" element= {<Register/>} />
          <Route path="/my-orders" element= {<MyOrders/>} />  
          <Route path= "/admin" element ={<AdminPanel/>} />
          <Route path= "/footer" element={<Footer/>} />
          <Route path= "/my-order" element={<ProtectedRoute><MyOrders /></ProtectedRoute>} />
        </Routes>
    </Router>

    <ToastContainer position ="top-right" autoClose={3000} />
   </div>
  )
}

export default App;