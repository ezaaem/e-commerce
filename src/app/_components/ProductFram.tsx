import React, { useContext } from "react";
import Image from "next/image";
import { CartContext } from "./context/cart";

// Define the structure of a product item
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

interface ProductFrameProps {
  products: ProductProps[];
}

export default function ProductFrame({ products }: ProductFrameProps) {
  const context = useContext(CartContext);

  // Check if the context is available
  if (!context) {
    return <div>Loading...</div>; // Handle if context is not available
  }

  const { addToCart } = context;

  // Function to map product to cart item
  const mapProductToCartItem = (product: ProductProps): CartItem => {
    return {
      id: product.id,
      name: product.title, // Assuming 'title' is used as the product name
      price: product.price,
      quantity: 1,
      image: product.image, // Default quantity when adding to the cart
    };
  };

  return (
    <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
      <ul className="mt-8 grid gap-4 w-full sm:grid-cols-2 lg:grid-cols-4">
        {products.map((product) => (
          <li key={product.id} className="group">
            {/* Product Image */}
            <div className="relative w-72 h-64 flex justify-center items-center rounded-md border-2 border-slate-200">
              <Image
                src={product.image}
                alt={`Image of ${product.title}`}
                width={150}
                height={150}
                className="object-cover transition duration-500 bg-slate-200 group-hover:scale-105"
              />
              <span className="absolute top-3 left-2 text-white w-14 h-7 bg-red-500 rounded-md text-xs flex justify-center items-center">
                -70%
              </span>
              <div className="absolute top-3 right-2 flex flex-col gap-2">
                <span className="w-8 h-8 rounded-full border-2 border-slate-200 flex justify-center items-center">
                  {/* Favorite Icon */}
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
                </span>
                <span className="w-8 h-8 rounded-full border-2 border-slate-200 flex justify-center items-center">
                  {/* View Icon */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M21.257 10.962C21.731 11.582 21.731 12.419 21.257 13.038C19.764 14.987 16.182 19 12 19C7.81801 19 4.23601 14.987 2.74301 13.038C2.51239 12.7411 2.38721 12.3759 2.38721 12C2.38721 11.6241 2.51239 11.2589 2.74301 10.962C4.23601 9.013 7.81801 5 12 5C16.182 5 19.764 9.013 21.257 10.962V10.962Z"
                      stroke="black"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z"
                      stroke="black"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
              </div>
              <button
                onClick={() => addToCart(mapProductToCartItem(product))}
                className="bg-black w-full text-white h-10 hidden group-hover:block absolute bottom-0"
              >
                Add to Cart
              </button>
            </div>

            {/* Product Info */}
            <div className="relative pt-6">
              <h3 className="text-xs text-gray-700 group-hover:underline group-hover:underline-offset-4">
                {product.title}
              </h3>
              <p className="mt-2 text-red-600 text-xs">
                {product.price}$
                <span className="line-through pl-2 text-gray-400">
                  {(product.price * 1.7).toFixed(2)}$
                </span>
              </p>
              <Image
                src="/Frame566.jpg"
                width={140}
                height={20}
                className="pt-2"
                alt="Rating frame"
              />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
