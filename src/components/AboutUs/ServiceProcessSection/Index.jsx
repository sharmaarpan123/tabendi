"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

// Document Icon Component
const DocumentIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M14 2H6C5.46957 2 4.96086 2.21071 4.58579 2.58579C4.21071 2.96086 4 3.46957 4 4V20C4 20.5304 4.21071 21.0391 4.58579 21.4142C4.96086 21.7893 5.46957 22 6 22H18C18.5304 22 19.0391 21.7893 19.4142 21.4142C19.7893 21.0391 20 20.5304 20 20V8L14 2Z"
      stroke="white"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M14 2V8H20"
      stroke="white"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M8 13H16"
      stroke="white"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M8 17H16"
      stroke="white"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const ServiceProcessSection = () => {
  const steps = [
    {
      id: 1,
      title: "Submit Information",
      description:
        "Fill out our secure medical form with your symptoms and health history",
    },
    {
      id: 2,
      title: "Physician Reviews for Medical Records",
      description:
        "Our certified doctors review your information and medical background",
      isCenter: true,
    },
    {
      id: 3,
      title: "Get Peace of Mind",
      description:
        "Receive your diagnosis, treatment plan, and prescription if needed",
    },
  ];

  const viewportOptions = {
    once: true,
    amount: 0.2,
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
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
      },
    },
  };

  return (
    <section className="relative py-16 sm:py-20 lg:py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOptions}
          className="bg-bg-cream rounded-3xl p-8 sm:p-12 lg:p-16"
        >
          {/* Header Section */}
          <motion.div
            variants={itemVariants}
            className="text-center space-y-4 max-w-3xl mx-auto mb-12 lg:mb-16"
          >
            {/* Section Label */}
            <p className="text-sm font-semibold text-primary uppercase tracking-wide">
              Our Service
            </p>

            {/* Main Heading */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1a1a2e] leading-tight">
              How Our Process Works
            </h2>

            {/* Descriptive Paragraph */}
            <p className="text-base sm:text-lg text-text-dark">
              Get professional medical care in three simple steps. Our
              streamlined process ensures you receive quality healthcare from
              the comfort of your home.
            </p>
          </motion.div>

          {/* Process Steps */}
          <div className="relative">
            {/* Steps with Arrows - Horizontal Flow */}
            <div className="relative flex flex-col md:flex-row items-center justify-center gap-4 lg:gap-8">
              {/* Step 1 */}
              <motion.div
                variants={itemVariants}
                className="relative flex flex-col items-center"
              >
                {/* Icon Circle */}
                <div className="relative z-10 mb-6">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-primary border-2 border-primary flex items-center justify-center shadow-lg">
                    <DocumentIcon />
                  </div>
                </div>

                {/* Step Content */}
                <div className="text-center space-y-3 max-w-xs">
                  {/* Title */}
                  <h3 className="text-xl font-bold text-[#1a1a2e]">
                    {steps[0].title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-text-dark leading-relaxed">
                    {steps[0].description}
                  </p>
                </div>
              </motion.div>

              {/* Arrow 1 - Pointing Up-Right */}
              <motion.div
                variants={itemVariants}
                className="hidden md:block relative z-10"
              >
                <div className="relative w-16 h-16 lg:w-20 lg:h-20">
                  <Image
                    src="/images/ArrowImg.png"
                    alt="Arrow"
                    fill
                    className="object-contain"
                  />
                </div>
              </motion.div>

              {/* Step 2 - Elevated */}
              <motion.div
                variants={itemVariants}
                className="relative flex flex-col items-center md:-mt-12 lg:-mt-16"
              >
                {/* Step Content - Above Icon */}
                <div className="text-center space-y-3 max-w-xs mb-6 order-2 md:order-1">
                  {/* Title */}
                  <h3 className="text-xl font-bold text-[#1a1a2e]">
                    {steps[1].title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-text-dark leading-relaxed">
                    {steps[1].description}
                  </p>
                </div>

                {/* Icon Circle - Below Text */}
                <div className="relative z-10 order-1 md:order-2">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-primary border-2 border-primary flex items-center justify-center shadow-lg">
                    <DocumentIcon />
                  </div>
                </div>
              </motion.div>

              {/* Arrow 2 - Pointing Down-Right */}
              <motion.div
                variants={itemVariants}
                className="hidden md:block relative z-10"
              >
                <div className="relative w-16 h-16 lg:w-20 lg:h-20 rotate-180">
                  <Image
                    src="/images/ArrowImg.png"
                    alt="Arrow"
                    fill
                    className="object-contain"
                  />
                </div>
              </motion.div>

              {/* Step 3 */}
              <motion.div
                variants={itemVariants}
                className="relative flex flex-col items-center"
              >
                {/* Icon Circle */}
                <div className="relative z-10 mb-6">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-primary border-2 border-primary flex items-center justify-center shadow-lg">
                    <DocumentIcon />
                  </div>
                </div>

                {/* Step Content */}
                <div className="text-center space-y-3 max-w-xs">
                  {/* Title */}
                  <h3 className="text-xl font-bold text-[#1a1a2e]">
                    {steps[2].title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-text-dark leading-relaxed">
                    {steps[2].description}
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ServiceProcessSection;

