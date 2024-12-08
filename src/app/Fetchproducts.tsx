/* eslint-disable */
"use client";
import { useEffect, useState } from "react";
import ProductFrame from "./_components/ProductFram";
import { Skeleton } from "@mui/material";

interface FetchProductProps {
  apilink: string;
}

const FetchProduct: React.FC<FetchProductProps> = ({ apilink }) => {
  const [products, setProducts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true); // Set to true to show skeletons initially

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch(apilink);
        const data = await res.json();
        setProducts(data);
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [apilink]); // Dependency array includes apilink

  if (loading) {
    return (
      <div className="grid pt-24 justify-center items-center mx-auto grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {Array.from({ length: 4 }).map((_, index) => (
          <div key={index}>
            <Skeleton
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

  return <ProductFrame products={products} />;
};

export default FetchProduct;
