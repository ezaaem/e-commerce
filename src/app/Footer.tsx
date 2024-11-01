import React from "react";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className=" bg-black px-40 ">
      <div className="mt-8 flex flex-1 justify-center pt-20 h-[26rem] gap-8 ">
        <div className=" sm:col-span-1 flex-initial w-1/5">
          <p className=" text-gray-900 dark:text-white   font-bold text-2xl ">
            Exclusive
          </p>

          <ul className="mt-6 space-y-4 text-sm">
            <li>
              <a
                href="#"
                className="text-gray-700 font-bold text-xl py-6 transition hover:opacity-75 dark:text-gray-200"
              >
                Subscribe
              </a>
            </li>
            <li>
              <form className="w-52">
                <p className="text-white">Get 10% off your first order</p>
                <label htmlFor="UserEmail" className="">
                  {" "}
                  Email{" "}
                </label>

                <div className="border border-gray-100 p-2 focus-within:ring sm:flex sm:items-center sm:gap-4 dark:border-gray-800">
                  <input
                    type="email"
                    id="UserEmail"
                    placeholder="john@rhcp.com"
                    className="w-full border-none focus:border-transparent focus:ring-transparent sm:text-sm dark:bg-black dark:text-white"
                  />

                  <button className="   text-sm font-bold uppercase tracking-wide text-white ">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <path
                        d="M9.91199 11.9998H3.99999L2.02299 4.1348C2.01033 4.0891 2.00262 4.04216 1.99999 3.9948C1.97799 3.2738 2.77199 2.7738 3.45999 3.1038L22 11.9998L3.45999 20.8958C2.77999 21.2228 1.99599 20.7368 1.99999 20.0288C2.00201 19.9655 2.01313 19.9029 2.03299 19.8428L3.49999 14.9998"
                        stroke="#FAFAFA"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </button>
                </div>
              </form>
            </li>
          </ul>
        </div>

        <div className=" sm:col-span-1 w-1/5">
          <p className=" text-gray-900 dark:text-white text-xl">Support</p>

          <ul className="mt-6 space-y-4 text-sm">
            <li>
              <a
                href="#"
                className="text-gray-700 transition hover:opacity-75 dark:text-gray-200"
              >
                111 Bijoy sarani, Dhaka, DH 1515, Bangladesh.
              </a>
            </li>

            <li>
              <a
                href="#"
                className="text-gray-700 transition hover:opacity-75 dark:text-gray-200"
              >
                exclusive@gmail.com{" "}
              </a>
            </li>

            <li>
              <a
                href="#"
                className="text-gray-700 transition hover:opacity-75 dark:text-gray-200"
              >
                +88015-88888-9999{" "}
              </a>
            </li>
          </ul>
        </div>

        <div className=" sm:col-span-1 w-1/5">
          <p className="font-medium text-gray-900 dark:text-white">Account </p>

          <ul className="mt-6 space-y-4 text-sm">
            <li>
              <a
                href="#"
                className="text-gray-700 transition hover:opacity-75 dark:text-gray-200"
              >
                My Account
              </a>
            </li>

            <li>
              <a
                href="#"
                className="text-gray-700 transition hover:opacity-75 dark:text-gray-200"
              >
                Login / Register{" "}
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-gray-700 transition hover:opacity-75 dark:text-gray-200"
              >
                Cart{" "}
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-gray-700 transition hover:opacity-75 dark:text-gray-200"
              >
                Wishlist{" "}
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-gray-700 transition hover:opacity-75 dark:text-gray-200"
              >
                Shop
              </a>
            </li>
          </ul>
        </div>

        <div className="sm:col-span-1 w-1/5">
          <p className="font-medium text-gray-900 dark:text-white">
            Quick Link
          </p>

          <ul className="mt-6 space-y-4 text-sm">
            <li>
              <a
                href="#"
                className="text-gray-700 transition hover:opacity-75 dark:text-gray-200"
              >
                Privacy Policy
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-gray-700 transition hover:opacity-75 dark:text-gray-200"
              >
                Terms Of Use{" "}
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-gray-700 transition hover:opacity-75 dark:text-gray-200"
              >
                FAQ{" "}
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-gray-700 transition hover:opacity-75 dark:text-gray-200"
              >
                Contact{" "}
              </a>
            </li>
          </ul>
        </div>
        <div className="sm:col-span-1 w-1/5">
          <p className="font-medium text-gray-900 pb-5 dark:text-white">
            Download App{" "}
          </p>
          <Image
            src="/Frame720.png"
            width={198}
            height={110}
            className=" "
            alt="blur"
          />
          <Image
            src="/Frame741.png"
            width={168}
            height={24}
            className=" pt-7 "
            alt="blur"
          />
        </div>
      </div>
      <p className="text-slate-600 text-center ">
        @ Copyright Rimel 2022. All right reserved
      </p>
    </footer>
  );
}
