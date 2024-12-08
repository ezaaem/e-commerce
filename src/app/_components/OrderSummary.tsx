"use client";
import React, { useContext } from "react";
import { CartContext } from "./context/cart";
import Link from "next/link";

interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
  image: string;
}

interface OrderSummaryProps {
  onApplyCoupon: (code: string) => void;
}

export const OrderSummary: React.FC<OrderSummaryProps> = ({
  onApplyCoupon,
}) => {
  const cart = useContext(CartContext);

  // Handle undefined or null context gracefully
  if (!cart) {
    return (
      <div className="flex justify-center items-center min-h-[200px]">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900"></div>
      </div>
    );
  }

  const { cartItems, getCartTotal, clearCart, getCartLength } = cart;

  return (
    <div className="mt-8 lg:mt-0">
      {getCartLength > 0 ? (
        <div className="space-y-4">
          {cartItems.map((item: CartItem) => (
            <div key={item.id} className="flex items-center space-x-4">
              <img
                src={item.image}
                alt={item.name}
                className="h-16 w-16 rounded object-cover"
              />
              <div className="flex-1">
                <h3 className="text-sm font-medium text-gray-900">
                  {item.name}
                </h3>
                <p className="mt-1 text-sm text-gray-500">
                  Quantity: {item.quantity}
                </p>
              </div>
              <p className="text-sm font-medium text-gray-900">
                ${(item.price * item.quantity).toFixed(2)}
              </p>
            </div>
          ))}

          <div className="border-t border-gray-200 pt-4">
            <div className="flex justify-between">
              <span className="text-sm text-gray-600">Subtotal:</span>
              <span className="text-sm font-medium text-gray-900">
                ${getCartTotal().toFixed(2)}
              </span>
            </div>
            <div className="flex justify-between mt-2">
              <span className="text-sm text-gray-600">Shipping:</span>
              <span className="text-sm font-medium text-gray-900">Free</span>
            </div>
            <div className="flex justify-between mt-2">
              <span className="text-sm font-medium text-gray-900">Total:</span>
              <span className="text-sm font-medium text-gray-900">
                ${getCartTotal().toFixed(2)}
              </span>
            </div>
          </div>

          <div className="mt-4">
            <div className="flex space-x-2">
              <input
                type="text"
                placeholder="Coupon Code"
                className="flex-1 rounded-md border border-gray-200 px-4 py-2 text-sm focus:border-blue-500 focus:ring-blue-500"
              />
              <button
                onClick={() => onApplyCoupon("DISCOUNT")}
                className="rounded-md bg-red-500 px-4 py-2 text-sm font-medium text-white hover:bg-red-600"
              >
                Apply Coupon
              </button>
            </div>
          </div>

          <div className="mt-4 space-y-4">
            <div className="flex items-center space-x-4">
              <input
                type="radio"
                id="bank"
                name="payment"
                className="h-4 w-4 border-gray-300 text-blue-600 focus:ring-blue-500"
              />
              <label htmlFor="bank" className="text-sm text-gray-900">
                Bank
              </label>
              <div className="flex-1 flex justify-end space-x-2">
                <img
                  src="/visa.png"
                  alt="payment gate"
                  width={200}
                  height={50}
                  className=""
                />
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <input
                type="radio"
                id="cash"
                name="payment"
                className="h-4 w-4 border-gray-300 text-blue-600 focus:ring-blue-500"
              />
              <label htmlFor="cash" className="text-sm text-gray-900">
                Cash on delivery
              </label>
            </div>
          </div>

          <button
            onClick={clearCart}
            type="submit"
            className="w-full rounded-md bg-red-500 px-6 py-3 text-base font-medium text-white hover:bg-red-600"
          >
            Place Order
          </button>
        </div>
      ) : (
        <h3 className="text-center h-52 flex justify-center items-center text-lg font-semibold text-gray-800">
          Thanks for your shopping!{" "}
          <Link href="/">
            <span className="text-white bg-red-500 p-4 ml-2">
              Continue shopping
            </span>
          </Link>
        </h3>
      )}
    </div>
  );
};
