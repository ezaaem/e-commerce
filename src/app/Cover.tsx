import React from "react";
import Image from "next/image";

export default function Cover() {
  return (
    <div className="flex   ">
      <div className="w-56 max-lg:hidden   border-r-2 h-max">
        <nav className="flex flex-col p-2 space-y-2">
          <a
            href="#"
            className="flex relative items-center pt-5   py-1 text-gray-700 hover:text-indigo-600 hover:underline"
          >
            Woman’s Fashion
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              className="absolute right-0"
            >
              <path
                d="M12.95 11.636L8 6.68597L9.414 5.27197L15.778 11.636L9.414 18L8 16.586L12.95 11.636Z"
                fill="black"
              />
            </svg>
          </a>
          <a
            href="#"
            className="flex relative items-center  py-1 text-gray-700 hover:text-indigo-600 hover:underline"
          >
            men’s Fashion
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              className="absolute right-0"
            >
              <path
                d="M12.95 11.636L8 6.68597L9.414 5.27197L15.778 11.636L9.414 18L8 16.586L12.95 11.636Z"
                fill="black"
              />
            </svg>
          </a>
          <a
            href="#"
            className="flex items-center  py-1 text-gray-700 hover:text-indigo-600 hover:underline"
          >
            Electronics
          </a>
          <a
            href="#"
            className="flex items-center  py-1 text-gray-700 hover:text-indigo-600 hover:underline"
          >
            Home & Lifestyle
          </a>
          <a
            href="#"
            className="flex items-center  py-1 text-gray-700 hover:text-indigo-600 hover:underline"
          >
            Sports & Outdoor
          </a>
          <a
            href="#"
            className="flex items-center  py-1 text-gray-700 hover:text-indigo-600 hover:underline"
          >
            Baby’s & Toys
          </a>
          <a
            href="#"
            className="flex items-center  py-1 text-gray-700 hover:text-indigo-600 hover:underline"
          >
            Groceries & Pets
          </a>
          <a
            href="#"
            className="flex items-center  py-1 text-gray-700 hover:text-indigo-600 hover:underline"
          >
            Health & Beauty
          </a>
        </nav>
      </div>
      <div className="">
        <Image
          src="/Frame560.png"
          width={842}
          height={344}
          className="pl-20  pt-10 "
          alt="blur"
        />
      </div>
    </div>
  );
}
