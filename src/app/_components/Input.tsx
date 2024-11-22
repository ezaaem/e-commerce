import React from "react";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

export const Input: React.FC<InputProps> = ({ label, ...props }) => {
  return (
    <div className="space-y-1.5">
      <input
        {...props}
        placeholder={label}
        className="w-full px-4 py-3 border border-gray-200 rounded-lg text-gray-900 placeholder-gray-500 focus:border-red-500 focus:ring-1 focus:ring-red-500 transition-colors"
      />
    </div>
  );
};
