import React from "react";
import FoodSection from "./FoodSection";

function VendorSection ({ vendor, onAddToCart}) {
    const grouped = vendor.menu_items.reduce ((acc, item) => {
        acc[item.category] = acc[item.category] || [];
        acc[item.category].push(item);
        return acc;
    }, {})

    return (
        <div className="mb-10">
            <h2 className="text-2xl font-bold mb-4 text-blue-700">
                {vendor.vendor_name}
            </h2>
            {Object.entries(grouped).map (([category, items])=> (
                <FoodSection
                key= {category}
                title= {category}
                items= {items}
                onAddToCart= {onAddToCart}
                />
            ))}
        </div>
    )
}

export default VendorSection;