"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);

  const [formData, setFormData] = useState({
    email: "",
    password: "",
    rememberMe: false,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    router.push("/doctor-home");
    // Handle login logic here
  };

  return (
    <>
      <div className="flex min-h-screen">
        {/* Left Section */}
        <div className="hidden lg:flex flex-col lg:w-1/2 bg-[#F8FAFC] items-center justify-center p-12">
          <div className="relative w-full max-w-[480px] aspect-square">
            <Image
              src="/images/docLoginScreen.png"
              alt="Doctors Collage"
              fill
              className="object-contain"
            />
          </div>
          <div className="text-center mt-8">
            <h2 className="text-xl font-semibold">Reach More Patients</h2>
            <p className="text-gray-600 mt-2">
              Create your professional profile with your specialty, insurance
              options, availability, and more. Increase your visibility and
              receive new appointments easily.
            </p>
          </div>
        </div>

        {/* Right Section */}
        <div className="w-full lg:w-1/2 flex flex-col items-center justify-center p-8">
          <div className="w-full max-w-[440px]">
            <div className="flex justify-center mb-8">
              <Image
                src="/images/logo.png"
                alt="tabendi Logo"
                width={200}
                height={40}
              />
            </div>

            <h1 className="text-2xl font-semibold mb-6">
              Login into your account
            </h1>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  placeholder="Ex: hello@tabendi.com"
                  className="w-full px-4 py-3 border rounded-lg"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">
                  Password
                </label>
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    className="w-full px-4 py-3 border rounded-lg"
                    value={formData.password}
                    onChange={(e) =>
                      setFormData({ ...formData, password: e.target.value })
                    }
                  />
                  <button
                    type="button"
                    className="absolute right-3 top-1/2 -translate-y-1/2  "
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? "Hide" : "Show"}
                  </button>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    className="mr-2"
                    checked={formData.rememberMe}
                    onChange={(e) =>
                      setFormData({ ...formData, rememberMe: e.target.checked })
                    }
                  />
                  <span className="text-sm">Remember Me</span>
                </label>
                <Link
                  href="/doctor-auth/forgot-password"
                  className="text-sm text-primary hover:text-primary-hover cursor-pointer"
                >
                  Forgot Password?
                </Link>
              </div>

              <button
                type="submit"
                className="w-full bg-primary text-white py-3 rounded-lg hover:bg-primary-hover transition-colors cursor-pointer"
              >
                Sign In
              </button>

              <div className="text-center">
                <div className="relative py-4">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-gray-300"></div>
                  </div>
                  <div className="relative flex justify-center">
                    <span className="bg-white px-4 text-sm text-gray-500">
                      OR
                    </span>
                  </div>
                </div>
              </div>

              {/* <div className="space-y-4">
              <button
                type="button"
                className="w-full border py-3 rounded-lg flex items-center justify-center gap-2"
              >
                <Image
                  src="/images/google.png"
                  alt="Google"
                  width={20}
                  height={20}
                />
                Login with Google
              </button>
              <button
                type="button"
                className="w-full border py-3 rounded-lg flex items-center justify-center gap-2"
              >
                <Image
                  src="/images/facebook.png"
                  alt="Facebook"
                  width={20}
                  height={20}
                />
                Login with Facebook
              </button>
            </div> */}
            </form>

            <p className="text-center mt-8">
              Don&apos;t have an account?{" "}
              <Link
                href="/doctor-auth/signup"
                className="text-primary hover:text-primary-hover"
              >
                Sign Up
              </Link>
            </p>
            <p className="text-center mt-8">
              Sign in as patient?{" "}
              <Link
                href="/auth/login"
                className="text-primary hover:text-primary-hover"
              >
                Sign in
              </Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
