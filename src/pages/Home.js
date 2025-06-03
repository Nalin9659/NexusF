import React, { useContext, useEffect, useState } from "react";
import { CartContext } from "../context/CartContext";
import SidebarSignup from "../components/SidebarSignup";
import api from "../api/axios";
import VendorSection from "../components/VendorSection";

function Home() {
  const { addToCart } = useContext(CartContext);
  const [vendors, setVendors] = useState([]);

  useEffect(() => {
    api
      .get("/vendors-with-menu")
      .then((res) => {
        console.log("vendor data:", res.data);
        setVendors(res.data);
      })
      .catch((err) => console.error("Vendor fetch error", err));
  }, []);

  return (
    <div className="p-4 space-y-6">
      <div
        className="relative bg-cover bg-center h-64 rounded-xl text-white p-6 shadow-md"
        style={{
          backgroundImage: `url('https://source.unsplash.com/1600x400/?food-delivery')`,
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50 rounded-xl"></div>
        <div className="relative z-10">
          <h1 className="text-4xl font-bold">Delicious Meals Delivered Fast</h1>
          <p className="mt-2 text-lg">
            From breakfast to dessert, we’ve got you covered.
          </p>
        </div>
      </div>

      <div className="flex flex-col md:flex-row gap-6">
        <div className="md:w-3/4 space-y-6">
          {vendors.map((vendor) => {
            return (
            <VendorSection
            key={vendor.vendor_id}
            vendor= {vendor}
            onAddToCart={addToCart}   
            />
            )
            })}
        </div>
        <div className="md:w-1/4">
          <SidebarSignup />
        </div>
      </div>
    </div>
  );
}

export default Home;
