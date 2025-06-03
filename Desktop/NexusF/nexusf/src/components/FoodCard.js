import React from "react";

function FoodCard ({title, item, onAddToCart }){
    return(
        <div className="w-64 bg-white shadow-md rounded-xl overflow-hidden flex-shrink-0">
            <img src={item.image} alt={item.name} className="w-full h-48 object-cover"/>
          <div className="p-3">
            <h3 className="text-lg font-semibold">{item.name}</h3>
            <p className="text-sm text-gray-500">{item.description}</p>
            <p className="text-green-600 font-bold">{item.price}</p>
            
            <button onClick={()=> onAddToCart(item)}
                className="mt-2 bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700">Add to Cart</button>
          </div>
        </div>
    
    )
}

export default FoodCard;        