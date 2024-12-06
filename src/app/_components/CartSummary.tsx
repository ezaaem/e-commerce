import React from "react";
import Link from "next/link";

interface CartSummaryProps {
  subtotal: number;
  shipping?: number;
  total: number;
  onCheckout: () => void;
}

export const CartSummary: React.FC<CartSummaryProps> = ({
  subtotal,
  shipping = 0,
  total,
  onCheckout,
}) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm">
      <h2 className="text-xl font-semibold mb-4">Cart Total</h2>
      <div className="space-y-3">
        <div className="flex justify-between">
          <span className="text-gray-600">Subtotal:</span>
          <span className="font-medium">${subtotal.toFixed(2)}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-600">Shipping:</span>
          <span className="font-medium">
            {shipping === 0 ? "Free" : `$${shipping.toFixed(2)}`}
          </span>
        </div>
        <div className="border-t pt-3">
          <div className="flex justify-between">
            <span className="text-gray-800 font-semibold">Total:</span>
            <span className="font-semibold">${total.toFixed(2)}</span>
          </div>
        </div>
        <Link href="./Checkout">
          <button
            onClick={onCheckout}
            className="w-full bg-red-500 text-white py-3 rounded-lg hover:bg-red-600 transition-colors mt-4"
          >
            Proceed to checkout
          </button>
        </Link>
      </div>
    </div>
  );
};
