"use client";

import React, { useEffect, useState } from "react";
import ProductFrame from "../_components/ProductFram";
import { Skeleton } from "@mui/material";

interface Product {
  id: string;
  title: string;
  image: string;
  price: number;
}

export default function AllProducts() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      setError(null);
      try {
        const res = await fetch("https://fakestoreapi.com/products");
        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }
        const data = await res.json();
        setProducts(data);
      } catch (err: any) {
        console.error("Error fetching products:", err.message);
        setError("Failed to load products. Please try again later.");
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);

  if (loading) {
    return (
      <div className="grid w-5/6 pt-24 justify-center items-center mx-auto grid-cols-1 gap-1 sm:grid-cols-2 lg:grid-cols-4">
        {Array.from({ length: 12 }).map((_, index) => (
          <div>
            <Skeleton
              key={index}
              variant="rectangular"
              width={288}
              height={256}
              className="rounded-lg"
            />
            <Skeleton width="60%" />
            <Skeleton width="30%" />
            <Skeleton width="50%" />
          </div>
        ))}
      </div>
    );
  }

  if (error) {
    return <p>{error}</p>;
  }

  return <ProductFrame products={products} />;
}
