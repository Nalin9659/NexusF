import React from "react";
import FoodCard from "./FoodCard";

function FoodSection({ title, items, onAddToCart}) {
    return (
        <div className="overflow-x-auto">
            <h2 className="text-2xl font-bold mb-4">{title}</h2>
            <div className="flex gap-4 w-max">
                {items.map(item => (
                   <FoodCard key={item.id} item={item} onAddToCart={onAddToCart}/>
                ))}
            </div>
        </div>
    )
}
export default FoodSection;