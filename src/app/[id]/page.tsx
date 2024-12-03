"use client";

import { useState, useEffect, useContext } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { CartContext } from "../_components/context/cart";
import { WishlistContext } from "../_components/context/wishlist";

interface ProductDetail {
  id: string;
  title: string;
  image: string;
  price: number;
  description: string;
}

export default function ProductDetailPage({
  params,
}: {
  params: { id: string };
}) {
  const [product, setProduct] = useState<ProductDetail | null>(null);
  const [loading, setLoading] = useState(true);

  const cartContext = useContext(CartContext);
  const wishlistContext = useContext(WishlistContext);

  useEffect(() => {
    async function fetchProduct() {
      try {
        const res = await fetch(
          `https://fakestoreapi.com/products/${params.id}`
        );
        const data = await res.json();
        setProduct(data);
        setLoading(false);
      } catch (error) {
        console.error("Failed to fetch product", error);
        setLoading(false);
      }
    }

    fetchProduct();
  }, [params.id]);

  if (!cartContext || !wishlistContext || loading) {
    return <div>Loading...</div>;
  }

  const { addToCart } = cartContext;
  const { addToWishlist } = wishlistContext;

  const randomRating = Math.floor(Math.random() * 5) + 1;
  const randomReviews = Math.floor(Math.random() * 100) + 1;

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <Image
          src={product.image}
          alt={product.title}
          width={400}
          height={400}
          className="object-cover rounded-lg"
        />
        <div>
          <h1 className="text-2xl font-bold">{product.title}</h1>
          <p className="text-xl text-red-600 mt-2">${product.price}</p>
          <p className="mt-4 text-gray-700">{product.description}</p>
          <div className="flex items-center mt-4">
            {[...Array(5)].map((_, i) => (
              <span
                key={i}
                className={`text-sm ${
                  i < randomRating ? "text-yellow-400" : "text-gray-300"
                }`}
              >
                ★
              </span>
            ))}
            <span className="ml-2 text-gray-500">{randomReviews} reviews</span>
          </div>
          <div className="flex gap-4 mt-6">
            <button
              onClick={() =>
                addToCart({
                  id: product.id,
                  name: product.title,
                  price: product.price,
                  quantity: 1,
                  image: product.image,
                })
              }
              className="bg-black text-white px-6 py-2 rounded-md"
            >
              Add to Cart
            </button>
            <button
              onClick={() =>
                addToWishlist({
                  id: product.id,
                  name: product.title,
                  price: product.price,
                  image: product.image,
                })
              }
              className="bg-red-500 text-white px-6 py-2 rounded-md"
            >
              Add to Wishlist
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
