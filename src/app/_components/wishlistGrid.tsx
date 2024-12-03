import React, { useContext } from "react";
import { WishlistContext } from "./context/wishlist";
import { WishlistItem } from "./wishlistItem";
import { CartContext } from "./context/cart";

export const WishlistGrid: React.FC = () => {
  const wishlist = useContext(WishlistContext);
  const cart = useContext(CartContext);

  if (!wishlist || !cart) {
    return null;
  }

  const handleAddToBag = (item: any) => {
    cart.addToCart({
      id: item.id,
      name: item.name,
      price: item.price,
      quantity: 1,
      image: item.image,
    });
    wishlist.removeFromWishlist(item.id);
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {wishlist.wishlistItems.map((item) => (
        <WishlistItem
          key={item.id}
          item={item}
          onRemove={wishlist.removeFromWishlist}
          onAddToBag={handleAddToBag}
        />
      ))}
    </div>
  );
};
