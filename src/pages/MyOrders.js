import React, {useState, useEffect} from "react";
import api from "../api/axios";


function MyOrders(){
    const [orders, setOrders]= useState([])

    useEffect(()=> {
        const fetchOrders = async ()=>{
            try{
                const res= await api.get("/my-orders")
                setOrders(res.data)
            } catch (err){
                console.error("Enter loading orders", err)
            }
        }
        fetchOrders();
    }, [])

    return (
        <div>
          <h2>My Orders</h2>
          {orders.length === 0 && <p>No orders yet.</p>}
          {orders.map((order) => (
            <div key={order.order_id} style={{ marginBottom: 20 }}>
              <h4>Order #{order.order_id}</h4>
              <p>Date: {new Date(order.created_at).toLocaleString()}</p>
              <ul>
                {order.items.map((item, i) => (
                  <li key={i}>
                    {item.name} × {item.quantity} = ₹{item.price * item.quantity}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      )
}

export default MyOrders;