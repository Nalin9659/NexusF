import React, {useEffect, useState} from "react";
import api from "../api/axios";
import VendorItemCard from "../components/VendorItemCard";
import { toast } from "react-toastify";

function VendorDashboard() {
    const [items, setItems] = useState([]);
    const [newItem, setNewItem]= useState({
        name: "",
        description: "",
        price: "",
        category: "",
        image: "",
    })
    
    const vendorName = localStorage.getItem("vendor_name")
    const fetchMenu = async () => {
        try {
            const res = await api.get("/vendor/menu")
            setItems(res.data)
        } catch (err) {
            toast.error("Failed to load vendor menu")
        }
    }
    useEffect(() => {
        fetchMenu();
    }, [])

    const handleAdd = async ()=> {
        try {
            await api.post("/vendor/menu", newItem)
            toast.success("Item added!")
            setNewItem({ name: "", description: "", price: "", category: "", image: ""})
            fetchMenu()
        } catch (err) {
            toast.error("Add failed");
        }
    }

    const handleDelete =async (id) => {
        try {
            await api.delete(`/vendor/menu/${id}`);
            toast.success("Item Delete")
            fetchMenu()
        } catch (err) {
            toast.error("Delete failed")
        }
    }
    return (
        <div className="p-6 max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold mb-4">Welcome, {vendorName}</h2>
            <h2 className="text-2xl font-bold mb-4"> Vendor Menu Management</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-6">
                <input className="border p-2 rounded" 
                placeholder="Item Name" 
                value={newItem.name}
                onChange={(e)=> setNewItem({...newItem, name: e.target.value})}/>

                <input
                  className="border p-2 rounded" 
                  placeholder="Description" 
                  value={newItem.description} 
                  onChange={(e)=> setNewItem({...newItem, description: e.target.value})} />

                <input
                  className="border p-2 rounded" 
                  placeholder="Price" 
                  value={newItem.price} 
                  onChange={(e)=> setNewItem({...newItem, price: e.target.value})} /> 


                <input
                  className="border p-2 rounded" 
                  placeholder="Category" 
                  value={newItem.category} 
                  onChange={(e)=> setNewItem({...newItem, category: e.target.value})} />

                
                <input
                  className="border p-2 rounded" 
                  placeholder="Image" 
                  value={newItem.image} 
                  onChange={(e)=> setNewItem({...newItem, image: e.target.value})} />
                
                </div>
                <button onClick={handleAdd}
                  className="mb-6 bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700">Add Menu Item</button>

                <div className="space-y-4">
                    {items.length === 0 ? (
                        <p>No items yet.</p>
                    ): (
                        items.map((item) => (
                            <VendorItemCard key ={item.id} item={item} onDelete={handleDelete} />

                        ))
                    )}
                </div>
        </div>
    )
}
export default VendorDashboard;    