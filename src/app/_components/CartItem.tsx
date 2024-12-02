import React from "react";
import { Minus, Plus, X } from "lucide-react";
import { CartItem as CartItemType } from "./context/cart";
import Image from "next/image";

interface CartItemProps {
  item: CartItemType;
  onAdd: (item: CartItemType) => void;
  onRemove: (item: CartItemType) => void;
}

export const CartItem: React.FC<CartItemProps> = ({
  item,
  onAdd,
  onRemove,
}) => {
  return (
    <div className="flex items-center justify-between py-4 border-b border-gray-200">
      <div className="flex items-center space-x-4">
        <button
          onClick={() => onRemove(item)}
          className="text-gray-400 hover:text-red-500"
        >
          <X size={20} />
        </button>
        <Image
          width={20}
          height={20}
          src={item.image}
          alt={item.name}
          className="w-20 h-20 object-cover rounded"
        />
        <div>
          <h3 className="font-medium text-gray-800">{item.name}</h3>
          <p className="text-gray-600">${item.price.toFixed(2)}</p>
        </div>
      </div>

      <div className="flex items-center space-x-3">
        <button
          onClick={() => onRemove(item)}
          className="p-1 rounded-full hover:bg-gray-100"
        >
          <Minus size={16} />
        </button>
        <span className="w-8 text-center">{item.quantity}</span>
        <button
          onClick={() => onAdd(item)}
          className="p-1 rounded-full hover:bg-gray-100"
        >
          <Plus size={16} />
        </button>
        <span className="w-24 text-right font-medium">
          ${(item.price * item.quantity).toFixed(2)}
        </span>
      </div>
    </div>
  );
};
