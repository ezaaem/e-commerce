import React from "react";

export default function Header() {
  return (
    <header className="bg-white border-b -2">
      <div className="bg-black flex items-center justify-between py-3 lg:px-8">
        {/* Centered Text Section */}
        <div className="flex-1 pl-40 flex justify-center">
          <p className="font-medium text-sm text-white text-center">
            Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
            <span className="font-bold underline pl-2">Shop Now</span>
          </p>
        </div>

        {/* Right Section */}
        <div className="">
          <button
            type="button"
            className="flex items-center pr-32 text-sm text-white"
            aria-expanded="false"
          >
            English
            <svg
              className="h-5 w-5  text-gray-400"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>
      </div>

      <nav
        className="mx-auto flex max-w-7xl items-center justify-between p-4 lg:px-8"
        aria-label="Global"
      >
        {/* Logo area */}
        <div className="flex flex-1">
          <a href="#" className="-m-1.5 p-1.5">
            <span className="sr-only">Your Company</span>
            <h1 className="font-extrabold">Exclusive</h1>
          </a>
        </div>

        {/* Desktop navigation */}
        <div className="flex gap-x-12">
          {/* Product dropdown */}
          <div className="relative">
            <button
              type="button"
              className="flex items-center gap-x-1 text-sm font-semibold leading-6 text-gray-900"
              aria-expanded="false"
            >
              Home
            </button>
          </div>

          {/* Other navigation items */}
          <a href="#" className="text-sm font-semibold leading-6 text-gray-900">
            Contact
          </a>
          <a href="#" className="text-sm font-semibold leading-6 text-gray-900">
            About
          </a>
          <a href="#" className="text-sm font-semibold leading-6 text-gray-900">
            sign up
          </a>
        </div>

        <div className="flex flex-1 justify-end ">
          <div className=" w-50 max-w-lg lg:max-w-xs ">
            <label htmlFor="search" className="sr-only">
              Search
            </label>
            <div className="relative ">
              <div className="absolute inset-y-0 right-2 flex items-center pl-3 ">
                <svg
                  className="h-5 w-5  "
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <input
                id="search"
                name="search"
                className="block w-full rounded-sm  bg-gray-100 py-1.5 pl-4 pr-3 text-gray-900  ring-gray-300 placeholder:text-xs placeholder:text-gray-400   sm:text-sm sm:leading-6"
                placeholder="What are you looking for?"
                type="search"
              />
            </div>
          </div>
          <div className="flex items-center pl-3">
            <svg
              className="h-5 w-5"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              <path d="M225.8 468.2l-2.5-2.3L48.1 303.2C17.4 274.7 0 234.7 0 192.8l0-3.3c0-70.4 50-130.8 119.2-144C158.6 37.9 198.9 47 231 69.6c9 6.4 17.4 13.8 25 22.3c4.2-4.8 8.7-9.2 13.5-13.3c3.7-3.2 7.5-6.2 11.5-9c0 0 0 0 0 0C313.1 47 353.4 37.9 392.8 45.4C462 58.6 512 119.1 512 189.5l0 3.3c0 41.9-17.4 81.9-48.1 110.4L288.7 465.9l-2.5 2.3c-8.2 7.6-19 11.9-30.2 11.9s-22-4.2-30.2-11.9zM239.1 145c-.4-.3-.7-.7-1-1.1l-17.8-20-.1-.1s0 0 0 0c-23.1-25.9-58-37.7-92-31.2C81.6 101.5 48 142.1 48 189.5l0 3.3c0 28.5 11.9 55.8 32.8 75.2L256 430.7 431.2 268c20.9-19.4 32.8-46.7 32.8-75.2l0-3.3c0-47.3-33.6-88-80.1-96.9c-34-6.5-69 5.4-92 31.2c0 0 0 0-.1 .1s0 0-.1 .1l-17.8 20c-.3 .4-.7 .7-1 1.1c-4.5 4.5-10.6 7-16.9 7s-12.4-2.5-16.9-7z" />
            </svg>
          </div>
          <div className="flex items-center pl-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 576 512"
              fill=""
              className="h-5 w-5"
            >
              <path d="M0 24C0 10.7 10.7 0 24 0H69.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z" />
            </svg>
          </div>
          <div className="flex items-center pl-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
              className="h-5 w-5"
            >
              <path d="M304 128a80 80 0 1 0 -160 0 80 80 0 1 0 160 0zM96 128a128 128 0 1 1 256 0A128 128 0 1 1 96 128zM49.3 464l349.5 0c-8.9-63.3-63.3-112-129-112l-91.4 0c-65.7 0-120.1 48.7-129 112zM0 482.3C0 383.8 79.8 304 178.3 304l91.4 0C368.2 304 448 383.8 448 482.3c0 16.4-13.3 29.7-29.7 29.7L29.7 512C13.3 512 0 498.7 0 482.3z" />
            </svg>
          </div>
        </div>
      </nav>
    </header>
  );
}
