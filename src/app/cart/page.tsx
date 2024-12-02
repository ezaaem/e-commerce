"use client";
import React, { useContext } from "react";
import { CartItem } from "../_components/CartItem";
import { CartSummary } from "../_components/CartSummary";
import { ShoppingBag } from "lucide-react";
import { CartContext } from "../_components/context/cart";

function App() {
  const cart = useContext(CartContext);

  if (!cart) {
    return null;
  }

  const handleCheckout = () => {
    // Implement checkout logic here
    console.log("Proceeding to checkout...");
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-2xl font-bold text-gray-900">Shopping Cart</h1>
          <div className="flex items-center space-x-2">
            <ShoppingBag className="text-gray-600" />
            <span className="text-gray-600">({cart.getCartLength} items)</span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-sm p-6">
              {cart.cartItems.length === 0 ? (
                <div className="text-center py-8">
                  <p className="text-gray-500">Your cart is empty</p>
                </div>
              ) : (
                <div className="space-y-4">
                  {cart.cartItems.map((item) => (
                    <CartItem
                      key={item.id}
                      item={item}
                      onAdd={cart.addToCart}
                      onRemove={cart.removeFromCart}
                    />
                  ))}
                </div>
              )}
            </div>
          </div>

          <div className="lg:col-span-1">
            <CartSummary
              subtotal={cart.getCartTotal()}
              total={cart.getCartTotal()}
              onCheckout={handleCheckout}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
