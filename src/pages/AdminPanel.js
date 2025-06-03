import React, {useEffect, useState} from "react";
import api from "../api/axios"

 function AdminPanel() {
    const [menuItems, setMenuItems]= useState([]);
    const [newItem, setNewItem]= useState({name: "", description: "", price: "", category: ""})
    

    useEffect(()=>{
        fetchMenu();
    },[])

    const fetchMenu = async ()=> {
        const res = await api.get("/menu");
        setMenuItems(res.data)
       

    }
    const handleAdd = async ()=> {
        try {
            await api.delete("/admin/menu", newItem);
            fetchMenu();
            setNewItem({name: "", description: "", price: "", category: ""})
        } catch (err) {
            alert("Add failed - are you logged in as admin?.");
        }
    }
    const handleDelete = async (id) =>{
        try {
            await api.delete(`/admin/menu/${id}`)
            fetchMenu()
        } catch (err) {
            alert("Delete failed.")
        }
    }

    return(
        <div className="p-4">
            <h2 className="text-xl font-bold mb-2">Admin Menu Manager</h2>

            <div className="mb-4 space-y-2">
                <input placeholder="Name" className="border p-1 w-full" value={newItem.name} onChange={(e)=> setNewItem({ ...newItem, name: e.target.value})} />
                <input placeholder="Descripton" className="border p-1 w-full" value={newItem.description} onChange={(e)=> setNewItem({ ...newItem, description: e.target.value})} />
                <input placeholder="Price" className="border p-1 w-full" value={newItem.price} onChange={(e)=> setNewItem ({...newItem, price: e.target.value})} />

                <select
                  className="border p-1 w-full"
                  value={newItem.category}
                  onChange={(e)=> setNewItem({...newItem, category: e.target.value})}>

                    <option value="">-- Select Category --</option>
                    <option value="Breakfast">Breakfast</option>
                    <option value="Lunch">Lunch</option>
                    <option value="Dinner">Dinner</option>
                    <option value="Juice">Juice</option>
                    <option value="Milkshake">Milkshake</option>
                    <option value="Coffee">Coffee</option>
                    <option value="Fizzy Drink">Fizzy Drink</option>
                </select>
                <button onClick={handleAdd} className="bg-green-600 text-white px-3 py-1 rounded">Add Item</button>

            </div>
               <div>
                {menuItems.map ((item)=> (
                    <div key={item.id} className="border-b py-2 flex justify-between">
                       <span>{item.name} - £{item.price}</span>
                       <button onClick={()=> handleDelete(item.id)} className="text-red-500">Delete</button>
                    </div>    
                ))}
               </div>
        </div>  
    )
 }

export default AdminPanel;