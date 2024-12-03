import React from "react";
import { Trash2, Eye, ShoppingCart } from "lucide-react";
import { WishlistItem as WishlistItemType } from "./context/wishlist";
import Image from "next/image";

interface WishlistItemProps {
  item: WishlistItemType;
  onRemove: (itemId: string) => void;
  onAddToBag: (item: WishlistItemType) => void;
}

export const WishlistItem: React.FC<WishlistItemProps> = ({
  item,
  onRemove,
  onAddToBag,
}) => {
  return (
    <div className="group relative bg-white rounded-lg shadow-sm overflow-hidden">
      <div className="relative aspect-square">
        <Image
          width={150}
          height={150}
          src={item.image}
          alt={item.name}
          className="w-full h-full object-cover"
        />
        {item.discount && (
          <span className="absolute top-2 left-2 bg-red-500 text-white px-2 py-1 text-sm rounded">
            -{item.discount}%
          </span>
        )}
        {item.isNew && (
          <span className="absolute top-2 right-2 bg-green-500 text-white px-2 py-1 text-sm rounded">
            NEW
          </span>
        )}
      </div>

      <div className="p-4">
        <h3 className="text-lg font-medium text-gray-900">{item.name}</h3>
        <div className="flex items-center justify-between mt-2">
          <div className="flex items-center space-x-2">
            <span className="text-xl font-bold text-gray-900">
              ${item.price}
            </span>
            {item.originalPrice && (
              <span className="text-sm text-gray-500 line-through">
                ${item.originalPrice}
              </span>
            )}
          </div>
          {item.rating && (
            <div className="flex items-center">
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <span
                    key={i}
                    className={`text-sm ${
                      i < item.rating! ? "text-yellow-400" : "text-gray-300"
                    }`}
                  >
                    ★
                  </span>
                ))}
              </div>
              {item.reviews && (
                <span className="ml-1 text-sm text-gray-500">
                  ({item.reviews})
                </span>
              )}
            </div>
          )}
        </div>

        <div className="flex items-center justify-between mt-4">
          <button
            onClick={() => onAddToBag(item)}
            className="flex items-center space-x-2 px-4 py-2 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors"
          >
            <ShoppingCart size={16} />
            <span>Add to Bag</span>
          </button>
          <div className="flex items-center space-x-2">
            <button
              onClick={() => onRemove(item.id)}
              className="p-2 text-gray-500 hover:text-red-500 transition-colors"
            >
              <Trash2 size={18} />
            </button>
            <button className="p-2 text-gray-500 hover:text-blue-500 transition-colors">
              <Eye size={18} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
