"use client";
import { signIn } from "next-auth/react";
import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "outline";
  fullWidth?: boolean;
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  variant = "primary",
  fullWidth = false,
  children,
  className = "",
  ...props
}) => {
  const baseStyles =
    "px-4 py-3 rounded-lg font-medium text-sm transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2";
  const variants = {
    primary: "bg-red-500 text-white hover:bg-red-600 focus:ring-red-500",
    outline:
      "border border-gray-300 text-gray-700 hover:bg-gray-50 focus:ring-red-500",
  };

  return (
    <button
      onClick={() => signIn("google", { redirect: true, callbackUrl: "/" })}
      className={`${baseStyles} ${variants[variant]} ${
        fullWidth ? "w-full" : ""
      } ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};
