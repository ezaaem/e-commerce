"use client";
import Image from "next/image";
import FeaturesSection from "./_components/featuresSection";

const Feature: React.FC = () => {
  return (
    <div className="relative pt-10 pb-8">
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
      <div className="flex flex-col lg:flex-row h-auto lg:h-[37rem] w-full gap-8">
        {/* Left Section */}
        <div className="relative w-full lg:w-[36rem] h-[22rem] lg:h-[37rem] bg-black">
          <Image
            src="/ps5.png"
            width={511}
            height={511}
            className="absolute bottom-0 left-3"
            alt="blur"
          />
          <p className="text-white w-full md:w-52 text-xs absolute bottom-10 left-10">
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
        <div className="flex flex-col gap-8 w-full lg:w-auto">
          {/* Top Right */}
          <div className="relative w-full h-[22rem] md:h-72 bg-black">
            <p className="text-white w-full md:w-52 text-xs absolute bottom-10 left-10">
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
          <div className="flex flex-col md:flex-row gap-8 w-full">
            <div className="relative h-[22rem] md:h-72 w-full md:w-72 bg-black">
              <Image
                src="/echo.png"
                width={190}
                height={221}
                className="absolute top-9 left-9"
                alt="blur"
              />
              <p className="text-white w-full md:w-52 text-xs absolute bottom-5 left-5">
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
            <div className="relative h-[22rem] md:h-72 w-full md:w-72 bg-black">
              <Image
                src="/65.png"
                width={201}
                height={203}
                className="absolute top-9 left-9"
                alt="blur"
              />
              <p className="text-white w-full md:w-52 text-xs absolute bottom-5 left-5">
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
            className="size-5 -rotate-90"
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
