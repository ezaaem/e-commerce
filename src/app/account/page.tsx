"use client";

import React, { useState, useEffect } from "react";
import { User, Lock, Mail, MapPin } from "lucide-react";
import { useSession } from "next-auth/react";
import { Button } from "../_components/Button";
import Image from "next/image";

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  address: string;
  currentPassword: string;
  newPassword: string;
  confirmPassword: string;
}

const App: React.FC = () => {
  const { data, status } = useSession();

  const [formData, setFormData] = useState<FormData>({
    firstName: "Md",
    lastName: "Rimel",
    email: "rimel1111@gmail.com",
    address: "Kingston, 5236, United State",
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  });

  // Update form state with session data once authenticated
  useEffect(() => {
    if (status === "authenticated" && data) {
      setFormData((prev) => ({
        ...prev,
        firstName: data.user?.name?.split(" ")[0] ?? prev.firstName,
        lastName: data.user?.name?.split(" ")[1] ?? prev.lastName,
        email: data?.user?.email ?? prev.email,
      }));
    }
  }, [status, data]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const isFormChanged = (): boolean => {
    return (
      formData.firstName !== "Md" ||
      formData.lastName !== "Rimel" ||
      formData.email !== "rimel1111@gmail.com" ||
      formData.address !== "Kingston, 5236, United State" ||
      formData.currentPassword !== "" ||
      formData.newPassword !== "" ||
      formData.confirmPassword !== ""
    );
  };

  const handleSubmit = (e: React.FormEvent): void => {
    e.preventDefault();
    if (formData.newPassword !== formData.confirmPassword) {
      alert("Passwords do not match.");
      return;
    }
    // Handle form submission logic
    console.log("Form submitted:", formData);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-6">
      {status === "loading" && <h1 className="text-gray-700">Loading...</h1>}
      {status === "unauthenticated" && (
        <Button type="button" variant="outline" className="mt-3">
          <Image
            width={20}
            height={20}
            src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg"
            alt="Google"
            className="w-5 h-5 inline mr-2"
          />
          Sign up with Google
        </Button>
      )}
      {status === "authenticated" && (
        <div className="w-full max-w-3xl">
          <div className="mb-8 flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">
                Edit Your Profile
              </h1>
              <p className="text-sm text-gray-500 mt-1">
                Update your personal information and password
              </p>
            </div>
            <div className="text-right">
              <span className="text-sm text-gray-500">Welcome!</span>
              <span className="text-sm font-medium text-red-500 ml-1">
                {data?.user?.name}
              </span>
            </div>
          </div>

          <form
            onSubmit={handleSubmit}
            className="bg-white rounded-xl shadow-sm border border-gray-200"
          >
            <div className="p-8 space-y-8">
              {/* Name Fields */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label
                    className="text-sm font-medium text-gray-700"
                    htmlFor="firstName"
                  >
                    First Name
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <User className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      className="block w-full pl-10 pr-3 py-2.5 border border-gray-300 rounded-lg text-gray-900 placeholder-gray-400 focus:ring-2 focus:ring-red-500 focus:border-red-500"
                      aria-label="First Name"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label
                    className="text-sm font-medium text-gray-700"
                    htmlFor="lastName"
                  >
                    Last Name
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <User className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      className="block w-full pl-10 pr-3 py-2.5 border border-gray-300 rounded-lg text-gray-900 placeholder-gray-400 focus:ring-2 focus:ring-red-500 focus:border-red-500"
                      aria-label="Last Name"
                    />
                  </div>
                </div>
              </div>

              {/* Email & Address */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label
                    className="text-sm font-medium text-gray-700"
                    htmlFor="email"
                  >
                    Email
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Mail className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="block w-full pl-10 pr-3 py-2.5 border border-gray-300 rounded-lg text-gray-900 placeholder-gray-400 focus:ring-2 focus:ring-red-500 focus:border-red-500"
                      aria-label="Email"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label
                    className="text-sm font-medium text-gray-700"
                    htmlFor="address"
                  >
                    Address
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <MapPin className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                      type="text"
                      id="address"
                      name="address"
                      value={formData.address}
                      onChange={handleChange}
                      className="block w-full pl-10 pr-3 py-2.5 border border-gray-300 rounded-lg text-gray-900 placeholder-gray-400 focus:ring-2 focus:ring-red-500 focus:border-red-500"
                      aria-label="Address"
                    />
                  </div>
                </div>
              </div>

              {/* Password Section */}
              <div className="space-y-2">
                <h3 className="text-lg font-medium text-gray-900">
                  Password Changes
                </h3>
                <div className="grid grid-cols-1 gap-4">
                  {[
                    { name: "currentPassword", label: "Current Password" },
                    { name: "newPassword", label: "New Password" },
                    { name: "confirmPassword", label: "Confirm New Password" },
                  ].map((field) => (
                    <div key={field.name} className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <Lock className="h-5 w-5 text-gray-400" />
                      </div>
                      <input
                        type="password"
                        name={field.name}
                        placeholder={field.label}
                        value={[field.name]}
                        onChange={handleChange}
                        className="block w-full pl-10 pr-3 py-2.5 border border-gray-300 rounded-lg text-gray-900 placeholder-gray-400 focus:ring-2 focus:ring-red-500 focus:border-red-500"
                        aria-label={field.label}
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Form Actions */}
            <div className="px-8 py-4 bg-gray-50 border-t border-gray-200 rounded-b-xl flex justify-end space-x-4">
              <button
                type="button"
                className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
              >
                Cancel
              </button>
              <button
                type="submit"
                disabled={!isFormChanged()}
                className={`px-6 py-2 text-sm font-medium rounded-lg transition-colors ${
                  isFormChanged()
                    ? "bg-red-500 text-white hover:bg-red-600 focus:ring-red-500"
                    : "bg-gray-300 text-gray-500 cursor-not-allowed"
                }`}
              >
                Save Changes
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

export default App;
