"use client";
import React from "react";
import { Truck, HeadphonesIcon, ShieldCheck } from "lucide-react";

function FeatureCard({
  icon: Icon,
  title,
  description,
}: {
  icon: React.ElementType;
  title: string;
  description: string;
}) {
  return (
    <div className="bg-white p-6 flex flex-col justify-center items-center gap-2 rounded-lg shadow-lg text-center">
      <div className=" border-8 border-gray-400 justify-center group-hover:bg-white  group-hover:border-red-400  rounded-full flex items-center  bg-black w-14 h-14">
        <Icon className="w-8 h-8  flex group-hover:text-black  text-white " />
      </div>
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-gray-600 text-sm">{description}</p>
    </div>
  );
}

function FeaturesSection() {
  return (
    <div className="container w-4/5 mx-auto px-4 py-16">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <FeatureCard
          icon={Truck}
          title="FREE AND FAST DELIVERY"
          description="Free delivery for all orders over $140"
        />
        <FeatureCard
          icon={HeadphonesIcon}
          title="24/7 CUSTOMER SERVICE"
          description="Friendly 24/7 customer support"
        />
        <FeatureCard
          icon={ShieldCheck}
          title="MONEY BACK GUARANTEE"
          description="We return money within 30 days"
        />
      </div>
    </div>
  );
}

export default FeaturesSection;
