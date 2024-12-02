"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";

export default function BurgerMenu() {
  const [menuOpen, setMenuOpen] = useState(false);

  // Ensure the component is only rendered on the client

  return (
    <div className="burger-menu relative">
      <button
        onClick={() => setMenuOpen(!menuOpen)}
        className="text-gray-900 focus:outline-none"
        aria-label="Toggle navigation"
        aria-expanded={menuOpen}
      >
        {menuOpen ? (
          <svg
            className="h-6 w-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        ) : (
          <svg
            className="h-6 w-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        )}
      </button>

      {menuOpen && (
        <div className="absolute top-full left-0 w-full bg-white shadow-lg z-50 md:hidden">
          <div className="flex flex-col gap-y-4 px-4 py-4">
            <Link
              href="/"
              className="text-sm font-semibold text-gray-900 hover:text-gray-700"
            >
              Home
            </Link>
            <Link
              href="/contact"
              className="text-sm font-semibold text-gray-900 hover:text-gray-700"
            >
              Contact
            </Link>
            <Link
              href="/about"
              className="text-sm font-semibold text-gray-900 hover:text-gray-700"
            >
              About
            </Link>
            <Link
              href="/signup"
              className="text-sm font-semibold text-gray-900 hover:text-gray-700"
            >
              Sign Up
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
