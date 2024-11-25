"use client";
import React from "react";
import {
  Building2,
  Users,
  DollarSign,
  Package,
  Truck,
  HeadphonesIcon,
  ShieldCheck,
  Twitter,
  Instagram,
  Linkedin,
} from "lucide-react";
import Image from "next/image";

function StatCard({
  icon: Icon,
  value,
  label,
}: {
  icon: React.ElementType;
  value: string;
  label: string;
}) {
  return (
    <div className=" group  bg-white p-6 rounded-lg flex gap-2 items-center justify-center flex-col  shadow-lg transform hover:scale-105 hover:bg-red-600 transition-transform">
      <div className=" border-8 border-gray-400 justify-center group-hover:bg-white  group-hover:border-red-400  rounded-full flex items-center  bg-black w-14 h-14">
        <Icon className="w-8 h-8  flex group-hover:text-black  text-white " />
      </div>
      <h3 className="text-3xl group-hover:text-white font-bold mb-2">
        {value}
      </h3>
      <p className="text-gray-600 group-hover:text-white text-sm">{label}</p>
    </div>
  );
}

function TeamMember({
  name,
  role,
  imageUrl,
}: {
  name: string;
  role: string;
  imageUrl: string;
}) {
  return (
    <div className="text-center ">
      <Image
        width={192}
        height={192}
        src={imageUrl}
        alt={name}
        className="w-48 h-48 rounded-full mx-auto mb-4 object-cover"
      />
      <h3 className="text-xl font-semibold mb-1">{name}</h3>
      <p className="text-gray-600 mb-3">{role}</p>
      <div className="flex justify-center gap-3">
        <Twitter className="w-5 h-5 text-gray-600 hover:text-blue-400 cursor-pointer" />
        <Instagram className="w-5 h-5 text-gray-600 hover:text-pink-600 cursor-pointer" />
        <Linkedin className="w-5 h-5 text-gray-600 hover:text-blue-600 cursor-pointer" />
      </div>
    </div>
  );
}

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

function About() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-red-600 to-red-200 text-white py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center">
            Our Story
          </h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto text-center leading-relaxed">
            Launched in 2015, Exclusive is South premier online shopping
            marketplace with an active presence in Bangladesh. Supported by wide
            range of tailored marketing, data and service solutions, Exclusive
            has 10,500 sellers and 300 brands and serves 3 millions customers
            across the region.
          </p>
        </div>
      </div>

      {/* Stats Section */}
      <div className="container w-4/5 mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <StatCard
            icon={Building2}
            value="10.5k"
            label="Sellers active on site"
          />
          <StatCard
            icon={DollarSign}
            value="33k"
            label="Monthly Product Sale"
          />
          <StatCard
            icon={Users}
            value="45.5k"
            label="Customer active in our site"
          />
          <StatCard
            icon={Package}
            value="25k"
            label="Annual gross sale in our site"
          />
        </div>
      </div>

      {/* Team Section */}
      <div className="bg-white  py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Meet Our Team
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-4xl mx-auto">
            <TeamMember
              name="Tom Cruise"
              role="Founder & Chairman"
              imageUrl="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80"
            />
            <TeamMember
              name="Emma Watson"
              role="Managing Director"
              imageUrl="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80"
            />
            <TeamMember
              name="Will Smith"
              role="Product Designer"
              imageUrl="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80"
            />
          </div>
        </div>
      </div>

      {/* Features Section */}
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
    </div>
  );
}

export default About;
