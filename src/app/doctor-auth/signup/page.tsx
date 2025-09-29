"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

// Add these imports
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

// Define Yup schema
const schema = yup.object().shape({
  firstName: yup.string().required("First name is required"),
  lastName: yup.string().required("Last name is required"),
  email: yup.string().email("Invalid email").required("Email is required"),
  phoneNumber: yup.string().required("Phone number is required"),
  dateOfBirth: yup.string().required("Date of birth is required"),
  password: yup
    .string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password")], "Passwords must match")
    .required("Confirm password is required"),
});

export default function SignUpPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  // Use react-hook-form with Yup
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phoneNumber: "",
      dateOfBirth: "",
      password: "",
      confirmPassword: "",
    },
  });

  const onSubmit = () => {
    // Handle signup logic here
  };

  return (
    <div className="flex min-h-screen">
      {/* Left Section */}
      <div className="hidden lg:flex flex-col lg:w-1/2 bg-[#F8FAFC] items-center justify-center p-12 max-h-[100vh]">
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

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-2">
                  First Name*
                </label>
                <input
                  type="text"
                  placeholder="Jenny"
                  className="w-full px-4 py-3 border rounded-lg"
                  {...register("firstName")}
                />
                {errors.firstName && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.firstName.message}
                  </p>
                )}
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">
                  Last Name*
                </label>
                <input
                  type="text"
                  placeholder="Wilson"
                  className="w-full px-4 py-3 border rounded-lg"
                  {...register("lastName")}
                />
                {errors.lastName && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.lastName.message}
                  </p>
                )}
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
                {...register("email")}
              />
              {errors.email && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.email.message}
                </p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">
                Phone Number*
              </label>
              <input
                type="tel"
                placeholder="+1 (239) 555-0108"
                className="w-full px-4 py-3 border rounded-lg"
                {...register("phoneNumber")}
              />
              {errors.phoneNumber && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.phoneNumber.message}
                </p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">
                Date of Birth*
              </label>
              <input
                type="date"
                className="w-full px-4 py-3 border rounded-lg"
                {...register("dateOfBirth")}
              />
              {errors.dateOfBirth && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.dateOfBirth.message}
                </p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">
                Password*
              </label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  className="w-full px-4 py-3 border rounded-lg"
                  {...register("password")}
                />
                <button
                  type="button"
                  className="absolute right-3 top-1/2 -translate-y-1/2"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? "Hide" : "Show"}
                </button>
              </div>
              {errors.password && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.password.message}
                </p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">
                Confirm Password*
              </label>
              <div className="relative">
                <input
                  type={showConfirmPassword ? "text" : "password"}
                  className="w-full px-4 py-3 border rounded-lg"
                  {...register("confirmPassword")}
                />
                <button
                  type="button"
                  className="absolute right-3 top-1/2 -translate-y-1/2"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                >
                  {showConfirmPassword ? "Hide" : "Show"}
                </button>
              </div>
              {errors.confirmPassword && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.confirmPassword.message}
                </p>
              )}
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
              href="/doctor-auth/login"
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
