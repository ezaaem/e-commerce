"use client";
import React, {
  createContext,
  useState,
  useEffect,
  useCallback,
  ReactNode,
  useMemo,
  useContext,
} from "react";

// Define WishlistItem type
export interface WishlistItem {
  id: string;
  name: string;
  price: number;
  image: string;
  originalPrice?: number;
  discount?: number;
  rating?: number;
  reviews?: number;
  isNew?: boolean;
}

// Define WishlistContext Type
interface WishlistContextType {
  wishlistItems: WishlistItem[];
  addToWishlist: (item: WishlistItem) => void;
  removeFromWishlist: (itemId: string) => void;
  clearWishlist: () => void;
  isInWishlist: (itemId: string) => boolean;
  moveAllToBag: () => void;
  getWishlistCount: () => number; // Change back to a method
}

export const WishlistContext = createContext<WishlistContextType | undefined>(
  undefined
);

// WishlistProvider Component
interface WishlistProviderProps {
  children: ReactNode;
}

export const WishlistProvider: React.FC<WishlistProviderProps> = ({
  children,
}) => {
  const [wishlistItems, setWishlistItems] = useState<WishlistItem[]>(() => {
    if (typeof window !== "undefined") {
      try {
        const storedItems = localStorage.getItem("wishlistItems");
        return storedItems ? JSON.parse(storedItems) : [];
      } catch (error) {
        console.error("Error parsing wishlist items from localStorage", error);
        return [];
      }
    }
    return [];
  });

  const addToWishlist = useCallback((item: WishlistItem) => {
    // Comprehensive validation
    if (!item) {
      console.error("Attempted to add undefined or null item to wishlist");
      return;
    }

    // Strict validation of required fields
    if (!item.id || !item.name || !item.price || !item.image) {
      console.error("Invalid wishlist item: missing required fields", item);
      return;
    }

    setWishlistItems((prevItems) => {
      // Ensure prevItems is an array and filter out invalid items
      const validPrevItems = (prevItems || []).filter(
        (prevItem) => prevItem && typeof prevItem === "object" && prevItem.id
      );

      // Check if item already exists
      const isItemExists = validPrevItems.some(
        (existingItem) => existingItem.id === item.id
      );

      // Add item only if it doesn't already exist
      if (!isItemExists) {
        return [...validPrevItems, item];
      }

      return validPrevItems;
    });
  }, []);

  const removeFromWishlist = useCallback((itemId: string) => {
    if (!itemId) {
      console.error("Invalid item id for removal");
      return;
    }
    setWishlistItems((prevItems) =>
      prevItems.filter((item) => item.id !== itemId)
    );
  }, []);

  const clearWishlist = useCallback(() => {
    setWishlistItems([]);
  }, []);

  const isInWishlist = useCallback(
    (itemId: string) => wishlistItems.some((item) => item.id === itemId),
    [wishlistItems]
  );

  const moveAllToBag = useCallback(() => {
    // Placeholder logic for integrating with cart
    clearWishlist();
  }, [clearWishlist]);

  // Change back to a method that returns the count
  const getWishlistCount = useCallback(() => {
    return wishlistItems.length;
  }, [wishlistItems]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      try {
        localStorage.setItem("wishlistItems", JSON.stringify(wishlistItems));
      } catch (error) {
        console.error("Error updating wishlist items in localStorage", error);
      }
    }
  }, [wishlistItems]);

  const value = useMemo(
    () => ({
      wishlistItems,
      addToWishlist,
      removeFromWishlist,
      clearWishlist,
      isInWishlist,
      moveAllToBag,
      getWishlistCount,
    }),
    [
      wishlistItems,
      addToWishlist,
      removeFromWishlist,
      clearWishlist,
      isInWishlist,
      moveAllToBag,
      getWishlistCount,
    ]
  );

  return (
    <WishlistContext.Provider value={value}>
      {children}
    </WishlistContext.Provider>
  );
};

// Hook to use WishlistContext more easily
export const useWishlist = () => {
  const context = useContext(WishlistContext);
  if (!context) {
    throw new Error("useWishlist must be used within a WishlistProvider");
  }
  return context;
};
