"use client";

import CommonModal, { ModalType } from "@/Components/Common/Modals";
import { useModal } from "@/Providers/ModalContext";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

// Add these imports
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

// Define Yup schema
const schema = yup.object().shape({
  email: yup.string().email("Invalid email").required("Email is required"),
});

export default function ForgetPasswordPage() {
  const { openModal, closeModal } = useModal();

  // Use react-hook-form with Yup
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      email: "",
    },
  });

  const onSubmit = (data: any) => {
    openModal(
      <CommonModal
        type={ModalType.FORGET_EMAIL_SEND_SUCCESS}
        action={{ actionText: "Close", action: closeModal }}
        variables={{ email: data.email }}
      />
    );
  };

  return (
    <div className="flex min-h-screen">
      {/* Left Section */}
      <div className="hidden lg:flex flex-col lg:w-1/2 bg-[#F8FAFC] items-center justify-center p-12">
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

          <h1 className="text-2xl font-semibold mb-6 text-center">
            Forget Password
          </h1>

          <p className="text-center my-6 text-gray-600">
            No worries , we&apos;ll send you reset instructions
          </p>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div>
              <label className="block text-sm font-medium mb-2">
                Email Address
              </label>
              <input
                type="email"
                placeholder="Ex: hello@tabendi.com"
                className="w-full px-4 py-3 border rounded-lg"
                {...register("email")}
              />
              {errors.email && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.email.message}
                </p>
              )}
            </div>

            <button
              type="submit"
              className="w-full bg-primary text-white py-3 rounded-lg hover:bg-primary-hover transition-colors cursor-pointer"
            >
              Forget Password
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
          </form>

          <p className="text-center mt-8">
            Already have account?{" "}
            <Link
              href="/auth/login"
              className="text-primary hover:text-primary-hover"
            >
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
