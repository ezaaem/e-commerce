"use client";
import Image from "next/image";
import FeaturesSection from "./_components/featuresSection";

const Feature: React.FC = () => {
  return (
    <div className="relative w-full pt-10 pb-8">
      {/* Button */}
      <button className="group relative inline-block overflow-hidden px-8 py-2">
        <span className="absolute inset-y-0 left-0 w-[20px] bg-red-600 rounded-sm transition-all group-hover:w-full"></span>
        <span className="relative text-sm font-bold text-red-600 transition-colors group-hover:text-white">
          Featured
        </span>
      </button>

      {/* Header */}
      <div className="flex flex-col md:flex-row relative pt-8 pb-8">
        <h2 className="text-2xl md:text-4xl font-bold md:pr-16 pt-2">
          New Arrival
        </h2>
      </div>

      {/* Main Content */}
      <div className="flex flex-col lg:flex-row gap-6 w-full">
        {/* Left Section */}
        <div className="relative w-full lg:w-1/2 bg-black aspect-square lg:aspect-auto">
          <Image
            src="/ps5.png"
            fill
            className="object-contain absolute bottom-0 left-3"
            alt="PlayStation 5"
          />
          <p className="text-white w-full px-4 md:px-10 text-xs absolute bottom-4">
            <span className="font-bold block text-lg md:text-xl pb-2">
              PlayStation 5
            </span>
            Black and White version of the PS5 coming out on sale.
            <a
              rel=""
              href="#"
              className="block underline pt-2 font-bold text-base md:text-lg"
            >
              shop now
            </a>
          </p>
        </div>

        {/* Right Section */}
        <div className="flex flex-col gap-6 w-full lg:w-1/2">
          {/* Top Right */}
          <div className="relative bg-black aspect-[16/9]">
            <p className="text-white px-4 md:px-10 text-xs absolute bottom-4">
              <span className="font-bold block text-lg md:text-xl pb-2">
                Women’s Collections
              </span>
              Featured women collections that give you another vibe.
              <a
                rel=""
                href="#"
                className="block underline pt-2 font-bold text-base md:text-lg"
              >
                shop now
              </a>
            </p>
          </div>

          {/* Bottom Right */}
          <div className="flex flex-col md:flex-row gap-6 w-full">
            <div className="relative bg-black aspect-square md:w-1/2">
              <Image
                src="/echo.png"
                fill
                className="object-contain absolute"
                alt="Amazon Echo"
              />
              <p className="text-white px-4 text-xs absolute bottom-4">
                <span className="font-bold block text-lg md:text-xl pb-2">
                  Speakers
                </span>
                Amazon wireless speakers
                <a
                  rel=""
                  href="#"
                  className="block underline pt-2 font-bold text-base md:text-lg"
                >
                  shop now
                </a>
              </p>
            </div>
            <div className="relative bg-black aspect-square md:w-1/2">
              <Image
                src="/65.png"
                fill
                className="object-contain absolute"
                alt="Perfume"
              />
              <p className="text-white px-4 text-xs absolute bottom-4">
                <span className="font-bold block text-lg md:text-xl pb-2">
                  Perfume
                </span>
                GUCCI INTENSE OUD EDP
                <a
                  rel=""
                  href="#"
                  className="block underline pt-2 font-bold text-base md:text-lg"
                >
                  shop now
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="relative pt-16 pb-16 flex justify-center">
        <FeaturesSection />
        <a
          href="#"
          className="inline-block rounded-full absolute bg-gray-200 bottom-1 right-2 p-3 text-black hover:bg-red-600 hover:text-white focus:outline-none focus:ring active:text-red-600"
        >
          <svg
            className="w-5 h-5 -rotate-90"
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
  );
};

export default Feature;
