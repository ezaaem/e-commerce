"use client";

import { useEffect, useState } from "react";
import ProductFrame from "./ProductFram";

const Bestselling: React.FC = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch(
          "https://fakestoreapi.com/products/category/jewelery"
        );
        const data = await res.json();
        setProducts(data);
        setLoading(false);
      } catch {
        console.error("Error fetching products:", Error);
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);
  if (loading) {
    return <p>Loading products...</p>; // Display a loading message
  }

  return (
    <div className="pt-20 pb-6  ">
      <button className="group relative inline-block overflow-hidden px-8 py-2">
        <span className="absolute inset-y-0 left-0 w-[20px] bg-red-600 rounded-sm transition-all group-hover:w-full"></span>
        <span className="relative text-sm font-bold text-red-600 transition-colors group-hover:text-white">
          This Month
        </span>
      </button>
      <div className="flex relative pt-8">
        <div className="flex">
          <div className="flex">
            <h2 className="text-4xl font-bold pr-16 pt-2">
              Best Selling Products
            </h2>
          </div>
        </div>
        <div className="flex absolute gap-1 right-1">
          <div className="w-full flex justify-center items-center">
            <button className=" flex justify-center items-center rounded-sm text-white bg-red-500 w-36 h-14">
              View All
            </button>
          </div>
        </div>
      </div>
      <ProductFrame products={products} />
    </div>
  );
};

export default Bestselling;
