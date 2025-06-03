import React from "react";

function VendorItemCard ({ item, onDelete }) {
    return (
        <div className= "border p-3 rounded shadow-sm flex justify-between item-center"> 
           <div>
            <h4 className="font-bold">{item.name} </h4>
            <p className="text-sm text-gray-500">{item.description}</p>
            <p className="text-green-600 font-semibold">{item.price}</p>
            <p className="text-xs text-blue-500 italic">{item.category}</p>

           </div>
           <button
            onClick= {()=> onDelete(item.id)} className= "text-red-600 hover:inderline">Delete
           </button>
        </div>

    )
}
export default VendorItemCard;