"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";

export default function BurgerMenu() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [hydrated, setHydrated] = useState(false); // To prevent SSR/CSR mismatch
  const menuRef = useRef<HTMLDivElement>(null);

  // Ensure hydration has completed
  useEffect(() => {
    setHydrated(true);
  }, []);

  // Disable body scrolling when the menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  if (!hydrated) {
    // Render nothing until hydration is complete
    return null;
  }

  return (
    <div className="burger-menu relative" ref={menuRef}>
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
              onClick={() => setMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/contact"
              className="text-sm font-semibold text-gray-900 hover:text-gray-700"
              onClick={() => setMenuOpen(false)}
            >
              Contact
            </Link>
            <Link
              href="/about"
              className="text-sm font-semibold text-gray-900 hover:text-gray-700"
              onClick={() => setMenuOpen(false)}
            >
              About
            </Link>
            <Link
              href="/signup"
              className="text-sm font-semibold text-gray-900 hover:text-gray-700"
              onClick={() => setMenuOpen(false)}
            >
              Sign Up
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
