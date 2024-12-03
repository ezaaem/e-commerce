"use client";
import React, { useContext } from "react";
import { WishlistContext } from "../_components/context/wishlist";
import { WishlistGrid } from "../_components/wishlistGrid";
import { Heart, ShoppingBag } from "lucide-react";

function App() {
  const wishlist = useContext(WishlistContext);

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center space-x-2">
            <Heart className="text-red-500" />
            <h1 className="text-2xl font-bold text-gray-900">
              Wishlist ({wishlist?.getWishlistCount()})
            </h1>
          </div>
          <button
            onClick={wishlist?.moveAllToBag}
            className="flex items-center space-x-2 px-6 py-2 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors"
          >
            <ShoppingBag size={18} />
            <span>Move All To Bag</span>
          </button>
        </div>

        {wishlist?.wishlistItems.length === 0 ? (
          <div className="text-center py-16 bg-white rounded-lg shadow-sm">
            <Heart className="mx-auto text-gray-300 mb-4" size={48} />
            <h2 className="text-xl font-medium text-gray-900 mb-2">
              Your wishlist is empty
            </h2>
            <p className="text-gray-500">
              Add items you love to your wishlist. Review them anytime and
              easily move them to the bag.
            </p>
          </div>
        ) : (
          <WishlistGrid />
        )}
      </div>
    </div>
  );
}

export default App;
