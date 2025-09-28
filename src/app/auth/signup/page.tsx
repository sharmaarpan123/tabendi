"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function SignUpPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    dateOfBirth: "",
    password: "",
    confirmPassword: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle signup logic here
  };

  return (
    <div className="flex min-h-screen">
      {/* Left Section */}
      <div className="hidden lg:flex flex-col lg:w-1/2 bg-[#F8FAFC] items-center justify-center p-12 max-h-[100vh]">
        <div className="relative w-full max-w-[480px] aspect-square">
          <Image
            src="/images/logInScreen.png"
            alt="Doctors Collage"
            fill
            className="object-contain"
          />
        </div>
        <div className="text-center mt-8">
          <h2 className="text-xl font-semibold">
            Explore and Choose your Doctors
          </h2>
          <p className="text-gray-600 mt-2">
            Browse profiles by specialty, schedule, insurance, and more.
          </p>
          <p className="text-gray-600">All in one place.</p>
        </div>
      </div>

      {/* Right Section */}
      <div className="w-full lg:w-1/2 flex flex-col items-center justify-center   h-[100vh]  overflow-scroll ">
        <div className="w-full max-w-[440px]  h-[100vh] py-8">
          <div className="flex justify-center mb-8">
            <Image
              src="/images/logo.png"
              alt="tabendi Logo"
              width={200}
              height={40}
            />
          </div>

          <h1 className="text-2xl font-semibold mb-6">Create an account</h1>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-2">
                  First Name*
                </label>
                <input
                  type="text"
                  placeholder="Jenny"
                  className="w-full px-4 py-3 border rounded-lg"
                  value={formData.firstName}
                  onChange={(e) =>
                    setFormData({ ...formData, firstName: e.target.value })
                  }
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">
                  Last Name*
                </label>
                <input
                  type="text"
                  placeholder="Wilson"
                  className="w-full px-4 py-3 border rounded-lg"
                  value={formData.lastName}
                  onChange={(e) =>
                    setFormData({ ...formData, lastName: e.target.value })
                  }
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">
                Email Address*
              </label>
              <input
                type="email"
                placeholder="Ex: Hello@tabendi.com"
                className="w-full px-4 py-3 border rounded-lg"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">
                Phone Number*
              </label>
              <input
                type="tel"
                placeholder="+1 (239) 555-0108"
                className="w-full px-4 py-3 border rounded-lg"
                value={formData.phoneNumber}
                onChange={(e) =>
                  setFormData({ ...formData, phoneNumber: e.target.value })
                }
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">
                Date of Birth*
              </label>
              <input
                type="date"
                className="w-full px-4 py-3 border rounded-lg"
                value={formData.dateOfBirth}
                onChange={(e) =>
                  setFormData({ ...formData, dateOfBirth: e.target.value })
                }
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">
                Password*
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
                  className="absolute right-3 top-1/2 -translate-y-1/2"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? "Hide" : "Show"}
                </button>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">
                Confirm Password*
              </label>
              <div className="relative">
                <input
                  type={showConfirmPassword ? "text" : "password"}
                  className="w-full px-4 py-3 border rounded-lg"
                  value={formData.confirmPassword}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      confirmPassword: e.target.value,
                    })
                  }
                />
                <button
                  type="button"
                  className="absolute right-3 top-1/2 -translate-y-1/2"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                >
                  {showConfirmPassword ? "Hide" : "Show"}
                </button>
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-primary text-white py-3 rounded-lg hover:bg-primary-hover transition-colors cursor-pointer"
            >
              Sign Up
            </button>
          </form>

          <p className="text-center mt-8">
            Already have an account?{" "}
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
  );
}
