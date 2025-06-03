import React, { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";
import api from "../api/axios";

function Cart() {
  const { cart, removeFromCart } = useContext(CartContext);
  const [message, setMessage]= useState("");

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  
  const handlePlaceOrder = async () =>{
    try{
        const res = await api.post("/order", {items: cart})
        setMessage(`Order #${res.data.order_id} placed successful!`)
    } catch (err) {
        setMessage(err.response?.data?.message || "Failed to place order")
    }
  }
  return (
    <div>
      <h1>Your Cart</h1>
      {cart.length === 0 && <p>Cart is empty</p>}
      {cart.map((item) => (
        <div key={item.id} style={{ borderBottom: "1px solid #ccc", padding: 8 }}>
          <p>{item.name} x {item.quantity}</p>
          <p>₹{item.price * item.quantity}</p>
          <button onClick={() => removeFromCart(item.id)}>Remove</button>
        </div>
      ))}
      <h3>Total: ₹{total}</h3>
      <button onClick={handlePlaceOrder}>Place Order</button>
      {message && <p>{message}</p>}
    </div>
  );
}

export default Cart;
