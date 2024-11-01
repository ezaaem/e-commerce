/* eslint-disable */

"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import ProductFrame from "./ProductFram";

const Flashsection: React.FC = () => {
  const [products, setProducts] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch("https://fakestoreapi.com/products?limit=4");
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

  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 60,
  });

  useEffect(() => {
    const targetDate = new Date().getTime() + 60 * 60 * 1000 * 24 * 4;

    // Function to update the countdown
    const updateCountdown = () => {
      const now = new Date().getTime();
      const distance = targetDate - now;
      if (distance > 0) {
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor(
          (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        setTimeLeft({ days, hours, minutes, seconds });
      } else {
        // If the countdown is finished, reset or stop the countdown
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    // Update the countdown every second
    const timer = setInterval(updateCountdown, 1000);

    // Cleanup interval when component unmounts
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="pt-20 pb-12 border-b-2">
      <button className="group relative inline-block overflow-hidden px-8 py-2">
        <span className="absolute inset-y-0 left-0 w-[20px] bg-red-600 rounded-sm transition-all group-hover:w-full"></span>
        <span className="relative text-sm font-bold text-red-600 transition-colors group-hover:text-white">
          Today’s
        </span>
      </button>
      <div className="flex relative pt-8">
        <div className="flex">
          <div className="flex">
            <h2 className="text-4xl font-bold pr-16 pt-2">Flash Sales</h2>
          </div>
          <div className="flex">
            <p className="text-xs">
              Days
              <br /> <span className="text-2xl font-bold">{timeLeft.days}</span>
            </p>
            <span className="text-4xl text-red-600 pl-2 pr-2">:</span>
            <p className="text-xs">
              Hours
              <br />{" "}
              <span className="text-2xl font-bold">{timeLeft.hours}</span>
            </p>
            <span className="text-4xl text-red-600 pl-2 pr-2">:</span>
            <p className="text-xs">
              Minutes
              <br />{" "}
              <span className="text-2xl font-bold">{timeLeft.minutes}</span>
            </p>
            <span className="text-4xl text-red-600 pl-2 pr-2">:</span>
            <p className="text-xs">
              Seconds
              <br />{" "}
              <span className="text-2xl font-bold">{timeLeft.seconds}</span>
            </p>
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
        <button className=" flex justify-center items-center rounded-sm text-white bg-red-500 w-64 h-14">
          {" "}
          View All Products{" "}
        </button>{" "}
      </div>
    </div>
  );
};

export default Flashsection;
