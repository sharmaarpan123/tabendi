"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import { downloadAppStoreLinks } from "@/config/config";

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
    <section className="relative py-16    overflow-hidden">
      <div className="container mx-auto download-app-bg  px-4 sm:px-6 lg:px-8">
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
              className="lg:col-span-2  p-8 sm:p-12 lg:p-16 lg:pr-60 lg:pl-0  flex flex-col items-center justify-center "
            >
              {/* Top Label */}
              <motion.p
                variants={itemVariants}
                className="text-white text-2xl font-semibold text-center tracking-wide mb-4"
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
                className="text-white lg:px-20 text-center text-base sm:text-lg mb-8 max-w-xl leading-relaxed"
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
                  href={downloadAppStoreLinks.playStoreUrl}
                  className=" relative w-44 h-14 inline-flex items-center justify-center bg-black text-white  rounded-lg hover:bg-gray-900 transition-colors duration-300"
                >
                  <Image
                    src="/images/Google_play_store.png"
                    alt="App Store"
                    fill
                  />
                </Link>
                {/* App Store Button */}
                <Link
                  href={downloadAppStoreLinks.appStoreUrl}
                  className=" relative w-44 h-14 inline-flex items-center justify-center bg-black text-white  rounded-lg hover:bg-gray-900 transition-colors duration-300"
                >
                  <Image
                    src="/images/app_store_icon.png"
                    alt="App Store"
                    fill
                  />
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default DownloadAppSection;
