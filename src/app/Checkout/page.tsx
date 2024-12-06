"use client";
import React from "react";
import { BillingForm } from "./../_components/BillingForm";
import { OrderSummary } from "./../_components/OrderSummary";

const Checkout: React.FC = () => {
  const handleSubmit = (data: FormData) => {
    // Handle form submission
    console.log("Form submitted:", data);
  };

  const handleApplyCoupon = (code: string) => {
    // Handle coupon application
    console.log("Applying coupon:", code);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-x-12 xl:gap-x-16">
          <div>
            <BillingForm onSubmit={handleSubmit} />
          </div>

          <OrderSummary onApplyCoupon={handleApplyCoupon} />
        </div>
      </div>
    </div>
  );
};

export default Checkout;
