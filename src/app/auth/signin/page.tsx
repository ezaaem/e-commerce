import Image from "next/image";
import { getServerSession } from "next-auth";
import { Input } from "./../../_components/Input";
import { Button } from "./../../_components/Button";
import { authOptions } from "@/app/lib/nextAuth";

export const metadata = {
  title: "Create an Account",
};

export default async function App() {
  const session = await getServerSession(authOptions);
  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Left Side - Image */}
      <div className="hidden lg:block lg:w-1/2 relative bg-[#e8f4f6]">
        <Image
          width={500}
          height={500}
          src="/Side.png"
          alt="Shopping"
          className="absolute inset-0 w-full h-full object-cover mix-blend-multiply"
        />
      </div>

      {/* Right Side - Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-8">
        <div className="w-full max-w-md space-y-8">
          <div className="text-center">
            <h1 className="text-3xl font-bold text-gray-900">
              Log in to Exclusive
            </h1>
            <p className="mt-2 text-gray-600">Enter your details below</p>
          </div>

          {/* Server-Side Form Submission */}
          <form method="POST" action="/api/register" className="mt-8 space-y-6">
            <div className="space-y-4">
              <Input
                label="Email or Phone Number"
                type="text"
                name="emailOrPhone"
                required
              />
              <Input
                label="Password"
                type="password"
                name="password"
                required
              />
            </div>

            <Button type="submit" fullWidth>
              login
            </Button>

            {session ? (
              <h1>Welcome {session?.user?.name}</h1>
            ) : (
              <Button
                type="button"
                variant="outline"
                fullWidth
                className="mt-3"
              >
                <Image
                  width={20}
                  height={20}
                  src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg"
                  alt="Google"
                  className="w-5 h-5 inline mr-2"
                />
                Sign in with Google
              </Button>
            )}
          </form>
        </div>
      </div>
    </div>
  );
}
