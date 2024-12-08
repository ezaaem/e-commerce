"use client";
import Link from "next/link";
import React, { useState, useEffect, useRef } from "react";

interface Product {
  id: number;
  title: string;
  price: number;
  image: string;
}

export const SearchComponent: React.FC = () => {
  const [query, setQuery] = useState<string>("");
  const [results, setResults] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false);
  const searchContainerRef = useRef<HTMLDivElement>(null);

  const handleSearch = async () => {
    if (!query) {
      setResults([]);
      return;
    }

    setLoading(true);
    setError(null);

    try {
      const response = await fetch("https://fakestoreapi.com/products");
      if (!response.ok) throw new Error("Failed to fetch products");

      const data: Product[] = await response.json();

      // Filter results based on the search query
      const filteredResults = data.filter((product) =>
        product.title.toLowerCase().includes(query.toLowerCase())
      );

      setResults(filteredResults);
      setIsDropdownOpen(true); // Show the dropdown when results are updated
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    handleSearch();
  }, [query]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        searchContainerRef.current &&
        !searchContainerRef.current.contains(event.target as Node)
      ) {
        setIsDropdownOpen(false);
        setQuery("");
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div
      className="bg-white z-50 h-9 relative"
      ref={searchContainerRef} // Attach ref to the container
    >
      <div className="w-50 max-w-lg lg:max-w-xs mx-auto">
        <label htmlFor="search" className="sr-only">
          Search
        </label>
        <div className="relative">
          <div className="absolute inset-y-0 right-2 flex items-center">
            <svg
              className="h-5 w-5 text-gray-400"
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
            className="block w-full rounded-sm bg-gray-100 py-1.5 pl-4 pr-10 text-gray-900 ring-gray-300 placeholder:text-xs placeholder:text-gray-400 sm:text-sm sm:leading-6"
            placeholder="What are you looking for?"
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
        </div>
      </div>

      {loading && (
        <p className="mt-2 text-center fixed text-sm text-gray-500">
          Loading...
        </p>
      )}
      {error && (
        <p className="mt-2 text-center text-sm text-red-500">Error: {error}</p>
      )}

      {isDropdownOpen && results.length > 0 && (
        <ul className="mt-1 w-96 absolute bg-white shadow-lg rounded-md z-50">
          {results.map((product) => (
            <Link href={`/${product.id}`} key={product.id}>
              <li className="border flex p-4 rounded-md cursor-pointer hover:bg-gray-100">
                <img
                  src={product.image}
                  alt={product.title}
                  className="h-10 w-10 object-cover rounded-md mr-4"
                />
                <div>
                  <h3 className="text-sm font-medium">{product.title}</h3>
                  <p className="text-sm text-gray-600">
                    ${product.price.toFixed(2)}
                  </p>
                </div>
              </li>
            </Link>
          ))}
        </ul>
      )}
    </div>
  );
};
