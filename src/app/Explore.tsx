"use client";
import { useEffect, useState } from "react";
import ProductFrame from "./_components/ProductFram";
import Link from "next/link";

const Explore: React.FC = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch("https://fakestoreapi.com/products?limit=8");
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
    <div className="pt-20 pb-12  ">
      <button className="group relative inline-block overflow-hidden px-8 py-2">
        <span className="absolute inset-y-0 left-0 w-[20px] bg-red-600 rounded-sm transition-all group-hover:w-full"></span>
        <span className="relative text-sm font-medium text-red-600 transition-colors group-hover:text-white">
          Our Products
        </span>
      </button>
      <div className="flex relative pt-8">
        <div className="flex">
          <div className="flex">
            <h2 className="text-4xl font-bold pr-16 pt-2">
              Explore Our Products
            </h2>
          </div>
        </div>
        <div className="flex absolute gap-1 right-1">
          <a className="inline-block rounded-full bg-gray-200 p-3 text-black hover:bg-red-600 hover:text-white focus:outline-none focus:ring active:text-red-600">
            <svg
              className="size-5 rotate-180"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              />
            </svg>
          </a>
          <a className="inline-block rounded-full bg-gray-200 p-3 text-black hover:bg-red-600 hover:text-white focus:outline-none focus:ring active:bg-red-600">
            <svg
              className="size-5 rtl:rotate-180"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              />
            </svg>
          </a>
        </div>
      </div>
      <ProductFrame products={products} />
      <div className="w-full flex justify-center items-center">
        {" "}
        <Link href="/allProducts">
          {" "}
          <button className=" flex justify-center items-center rounded-sm text-white bg-red-500 w-64 h-14">
            {" "}
            View All Products{" "}
          </button>{" "}
        </Link>
      </div>
    </div>
  );
};

export default Explore;
