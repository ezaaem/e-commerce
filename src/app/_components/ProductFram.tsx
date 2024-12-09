import React, { useContext, useMemo, useState } from "react";
import Image from "next/image";
import { CartContext } from "./context/cart";
import { WishlistContext } from "./context/wishlist";
import Link from "next/link";
import Skeleton from "@mui/material/Skeleton";
import Rating from "@mui/material/Rating";

interface ProductProps {
  id: string;
  title: string;
  image: string;
  price: number;
}

interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
  image: string;
}

interface WishlistItem {
  id: string;
  name: string;
  price: number;
  image: string;
}

interface ProductWithRandomData extends ProductProps {
  rating: number;
  reviews: number;
}

interface ProductFrameProps {
  products: ProductProps[];
}

export default function ProductFrame({ products }: ProductFrameProps) {
  const context = useContext(CartContext);
  const wishlist = useContext(WishlistContext);

  if (!context || !wishlist) {
    return <div>Loading...</div>;
  }

  const { addToCart } = context;
  const { addToWishlist } = wishlist;

  // Initialize state for products with random data
  const [productsWithRandomData, setProductsWithRandomData] = useState<
    ProductWithRandomData[]
  >(() =>
    products.map((product) => ({
      ...product,
      rating: Math.floor(Math.random() * 5) + 1, // Random rating between 1 and 5
      reviews: Math.floor(Math.random() * 100) + 1, // Random reviews between 1 and 100
    }))
  );

  const mapProductToCartItem = (product: ProductProps): CartItem => ({
    id: product.id,
    name: product.title,
    price: product.price,
    quantity: 1,
    image: product.image,
  });

  const mapProductToWishList = (product: ProductProps): WishlistItem => ({
    id: product.id,
    name: product.title,
    price: product.price,
    image: product.image,
  });

  // Update product rating and reviews
  const handleRatingChange = (productId: string, newRating: number) => {
    setProductsWithRandomData((prevProducts) =>
      prevProducts.map((product) =>
        product.id === productId
          ? {
              ...product,
              rating: newRating,
              reviews: product.reviews + 1, // Increment reviews by 1
            }
          : product
      )
    );
  };

  return (
    <div className="mx-auto max-sm:w-4/5 max-w-screen-xl lg:px-4 py-8 sm:px-6 sm:py-12">
      <ul className="mt-8 grid gap-4 w-full max-sm:grid-cols-2 max-sm:gap-2 justify-center md:grid-cols-2 lg:grid-cols-4">
        {productsWithRandomData.map((product) => (
          <li key={product.id} className="group">
            <div className="relative w-72 h-64 max-sm:w-48 max-sm:h-48 flex justify-center items-center rounded-md border-2 border-slate-200">
              <Link href={`/${product.id}`}>
                {product ? (
                  <Image
                    src={product.image}
                    alt={`Image of ${product.title}`}
                    width={140}
                    height={140}
                    className="object-cover transition duration-500 bg-slate-200 group-hover:scale-105"
                  />
                ) : (
                  <Skeleton variant="rectangular" width={210} height={118} />
                )}
              </Link>
              <span className="absolute top-3 left-2 text-white w-14 h-7 bg-red-500 rounded-md text-xs flex justify-center items-center">
                -70%
              </span>
              <div className="absolute top-3 right-2 flex flex-col gap-2">
                <button
                  onClick={() => addToWishlist(mapProductToWishList(product))}
                  className="w-8 h-8 rounded-full border-2 border-slate-200 flex justify-center items-center"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M8 5C5.7912 5 4 6.73964 4 8.88594C4 10.6185 4.7 14.7305 11.5904 18.8873C11.7138 18.961 11.8555 19 12 19C12.1445 19 12.2862 18.961 12.4096 18.8873C19.3 14.7305 20 10.6185 20 8.88594C20 6.73964 18.2088 5 16 5C13.7912 5 12 7.35511 12 7.35511C12 7.35511 10.2088 5 8 5Z"
                      stroke="black"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
              </div>
              <button
                onClick={() => addToCart(mapProductToCartItem(product))}
                className="bg-black w-full text-white h-10 hidden group-hover:block absolute bottom-0"
              >
                Add to Cart
              </button>
            </div>

            <div className="pt-6">
              <h3 className="text-xs text-gray-700 group-hover:underline group-hover:underline-offset-4">
                {product.title}
              </h3>
              <p className="mt-2 text-red-600 text-xs">
                {product.price}$
                <span className="line-through pl-2 text-gray-400">
                  {(product.price * 1.7).toFixed(2)}$
                </span>
              </p>
              <div className="flex items-center">
                <Rating
                  name="simple-controlled"
                  value={product.rating}
                  onChange={(event, newValue) =>
                    handleRatingChange(product.id, newValue || product.rating)
                  }
                />
                <span className="ml-1 text-lg text-gray-500">
                  ({product.reviews})
                </span>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
