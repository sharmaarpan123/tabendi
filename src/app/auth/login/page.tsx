"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

// Add these imports
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { catchAsync, checkResponse } from "@/utils/commonFunc";
import { loginApi } from "@/api/ApiCalls";
import pageRoutes from "@/utils/pagesRoutes";
import { useMutation } from "@tanstack/react-query";
import ThemeButton from "@/Components/ui/Button/ThemeButton";

// Define Yup schema
const schema = yup.object().shape({
  email: yup.string().email("Invalid email").required("Email is required"),
  password: yup
    .string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
  rememberMe: yup.boolean().required(),
});

export default function LoginPage() {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);

  // Use react-hook-form with Yup
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      email: "",
      password: "",
      rememberMe: false,
    },
  });

  const { isPending, mutate } = useMutation({
    mutationFn: catchAsync(async (body) => {
      const res = await loginApi(body);
      if (checkResponse({ res, showSuccess: true })) {
        router.push(pageRoutes.userDashboard);
      }
    }),
  });

  const onSubmit = (data: {
    email: string;
    password: string;
    rememberMe: boolean;
  }) => {
    const body = {
      email_or_mobile: data.email,
      password: data.password,
      plateform: "web",
      // device_token :''
    };
    mutate(body);
  };

  return (
    <>
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
            <h1 className="text-2xl font-semibold mb-6">
              Login into your account
            </h1>
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

              <div>
                <label className="block text-sm font-medium mb-2">
                  Password
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

              <div className="flex items-center justify-between">
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    className="mr-2"
                    {...register("rememberMe")}
                  />
                  <span className="text-sm">Remember Me</span>
                </label>
                <Link
                  href="/auth/forgot-password"
                  className="text-sm text-primary hover:text-primary-hover cursor-pointer"
                >
                  Forgot Password?
                </Link>
              </div>

              <ThemeButton loader={isPending} type="submit" variant="primary">
                Sign in
              </ThemeButton>

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
                href="/auth/signup"
                className="text-primary hover:text-primary-hover"
              >
                Sign Up
              </Link>
            </p>
            <p className="text-center mt-8">
              Sign in as doctor?{" "}
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
    </>
  );
}
