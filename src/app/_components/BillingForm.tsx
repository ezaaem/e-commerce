import React from "react";

interface BillingFormProps {
  onSubmit: (data: any) => void;
}

export const BillingForm: React.FC<BillingFormProps> = ({ onSubmit }) => {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-gray-900">Billing Details</h2>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          onSubmit(new FormData(e.currentTarget));
        }}
      >
        <div className="space-y-4">
          <div>
            <label htmlFor="firstName" className="block text-sm text-gray-600">
              First Name<span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="firstName"
              required
              className="mt-1 w-full rounded-md border border-gray-200 px-4 py-3 text-sm focus:border-blue-500 focus:ring-blue-500"
            />
          </div>

          <div>
            <label
              htmlFor="companyName"
              className="block text-sm text-gray-600"
            >
              Company Name
            </label>
            <input
              type="text"
              id="companyName"
              className="mt-1 w-full rounded-md border border-gray-200 px-4 py-3 text-sm focus:border-blue-500 focus:ring-blue-500"
            />
          </div>

          <div>
            <label
              htmlFor="streetAddress"
              className="block text-sm text-gray-600"
            >
              Street Address<span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="streetAddress"
              required
              className="mt-1 w-full rounded-md border border-gray-200 px-4 py-3 text-sm focus:border-blue-500 focus:ring-blue-500"
            />
          </div>

          <div>
            <label htmlFor="apartment" className="block text-sm text-gray-600">
              Apartment, floor, etc. (optional)
            </label>
            <input
              type="text"
              id="apartment"
              className="mt-1 w-full rounded-md border border-gray-200 px-4 py-3 text-sm focus:border-blue-500 focus:ring-blue-500"
            />
          </div>

          <div>
            <label htmlFor="townCity" className="block text-sm text-gray-600">
              Town/City<span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="townCity"
              required
              className="mt-1 w-full rounded-md border border-gray-200 px-4 py-3 text-sm focus:border-blue-500 focus:ring-blue-500"
            />
          </div>

          <div>
            <label
              htmlFor="phoneNumber"
              className="block text-sm text-gray-600"
            >
              Phone Number<span className="text-red-500">*</span>
            </label>
            <input
              type="tel"
              id="phoneNumber"
              required
              className="mt-1 w-full rounded-md border border-gray-200 px-4 py-3 text-sm focus:border-blue-500 focus:ring-blue-500"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm text-gray-600">
              Email Address<span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              id="email"
              required
              className="mt-1 w-full rounded-md border border-gray-200 px-4 py-3 text-sm focus:border-blue-500 focus:ring-blue-500"
            />
          </div>

          <div className="flex items-center">
            <input
              type="checkbox"
              id="saveInfo"
              className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
            />
            <label htmlFor="saveInfo" className="ml-2 text-sm text-gray-600">
              Save this information for faster check-out next time
            </label>
          </div>
        </div>
      </form>
    </div>
  );
};
