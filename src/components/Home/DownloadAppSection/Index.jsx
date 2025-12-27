"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

const DownloadAppSection = () => {
  const viewportOptions = {
    once: true,
    amount: 0.2,
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  return (
    <section className="relative py-16 sm:py-20 lg:py-24 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOptions}
          className="relative rounded-3xl overflow-hidden"
        >
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-0">
            {/* Left Section - Content (2/3) */}
            <motion.div
              variants={itemVariants}
              className="lg:col-span-2 bg-primary p-8 sm:p-12 lg:p-16 flex flex-col justify-center"
            >
              {/* Top Label */}
              <motion.p
                variants={itemVariants}
                className="text-white text-sm font-semibold uppercase tracking-wide mb-4"
              >
                For Better Features & Experience
              </motion.p>

              {/* Main Heading */}
              <motion.h2
                variants={itemVariants}
                className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight"
              >
                Download the App
              </motion.h2>

              {/* Descriptive Text */}
              <motion.p
                variants={itemVariants}
                className="text-white text-base sm:text-lg mb-8 max-w-xl leading-relaxed"
              >
                Give your family the care they deserve. Unlimited consultations
                with Top doctors for your entire family.
              </motion.p>

              {/* Download Buttons */}
              <motion.div
                variants={itemVariants}
                className="flex flex-col sm:flex-row gap-4"
              >
                {/* Google Play Button */}
                <Link
                  href="#"
                  className="inline-flex items-center justify-center bg-black text-white px-6 py-4 rounded-lg hover:bg-gray-900 transition-colors duration-300"
                >
                  <svg
                    className="w-6 h-6 mr-3"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" />
                  </svg>
                  <div className="text-left">
                    <div className="text-xs text-gray-400">GET IT ON</div>
                    <div className="text-sm font-semibold">Google Play</div>
                  </div>
                </Link>

                {/* App Store Button */}
                <Link
                  href="#"
                  className="inline-flex items-center justify-center bg-black text-white px-6 py-4 rounded-lg hover:bg-gray-900 transition-colors duration-300"
                >
                  <svg
                    className="w-6 h-6 mr-3"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M18.71,19.12C17.46,20.87 14.93,21.24 13.71,21.24C13.25,21.24 12.79,21.18 12.33,21.12C11.5,21 10.59,20.95 9.78,20.5C6.61,18.94 4.59,15.79 4.59,12.46C4.59,9.13 6.61,6 9.78,4.43C10.59,4 11.5,3.91 12.33,3.79C12.79,3.73 13.25,3.67 13.71,3.67C14.93,3.67 17.46,4.04 18.71,5.79C19.04,6.25 19.12,6.83 18.96,7.33C18.8,7.83 18.42,8.21 17.96,8.46C17.5,8.71 16.96,8.79 16.46,8.67C15.96,8.54 15.5,8.21 15.21,7.79C14.5,6.83 13.5,6.5 12.5,6.5C11.5,6.5 10.5,6.83 9.79,7.79C9.08,8.75 8.79,9.96 8.96,11.17C9.13,12.38 9.75,13.5 10.71,14.21C11.67,14.92 12.88,15.21 14.09,15.04C15.3,14.87 16.42,14.25 17.13,13.29C17.42,12.87 17.88,12.54 18.38,12.67C18.88,12.79 19.42,12.71 19.88,12.46C20.34,12.21 20.72,11.83 20.88,11.33C21.04,10.83 20.96,10.25 20.63,9.79L18.71,19.12Z" />
                  </svg>
                  <div className="text-left">
                    <div className="text-xs text-gray-400">Download on the</div>
                    <div className="text-sm font-semibold">App Store</div>
                  </div>
                </Link>
              </motion.div>
            </motion.div>

            {/* Right Section - Doctor Image (1/3) */}
            <motion.div
              variants={imageVariants}
              initial="hidden"
              whileInView="visible"
              viewport={viewportOptions}
              className="relative h-[400px] lg:h-auto lg:col-span-1"
            >
              <Image
                src="/images/downLoadSection/downLoadBgImg.png"
                alt="Healthcare Professional"
                fill
                className="object-cover"
              />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default DownloadAppSection;
