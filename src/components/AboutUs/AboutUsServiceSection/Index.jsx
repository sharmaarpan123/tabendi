"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import ThemeButton from "@/components/ui/ThemeButton";

const AboutUsServiceSection = ({ categories = [] }) => {
  const [showAll, setShowAll] = useState(false);

  const services = categories.map((category) => ({
    id: category.id,
    title: category.title,
    description: category.description,
    icon: category.icon,
  }));

  const viewportOptions = {
    once: true,
    amount: 0.2,
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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

  const displayedServices = showAll ? services : services.slice(0, 6);

  return (
    <section className="relative py-16 sm:py-20 lg:py-24 bg-bg-light-cream overflow-hidden">
      {/* Gradient overlay fading from top */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-transparent to-transparent pointer-events-none z-0" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOptions}
          className="space-y-8"
        >
          {/* Header Section */}
          <motion.div
            variants={itemVariants}
            className="text-center space-y-4 max-w-3xl mx-auto"
          >
            {/* Section Label */}
            <p className=" font-semibold text-primary text-3xl tracking-wide">
              Our Service
            </p>

            {/* Main Heading */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1a1a2e] leading-tight">
              Dedicated to Your Wellness
            </h2>

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-text-dark">
              Your health is our top priority. Schedule an appointment with us
              today
            </p>
          </motion.div>

          {/* Service Cards Grid */}
          <motion.div
            variants={itemVariants}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
          >
            {[...(showAll ? services : services.slice(0, 6))].map((service) => (
              <motion.div
                key={service.id}
                whileHover={{ y: -5 }}
                transition={{ duration: 0.3 }}
                className="bg-white rounded-2xl p-6 sm:p-8 shadow-md hover:shadow-lg transition-shadow duration-300"
              >
                {/* Icon */}
                <div className="flex justify-center mb-6">
                  <div className="relative w-16 h-16 sm:w-20 sm:h-20">
                    <Image
                      src={service.icon}
                      alt={service.title}
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-[#1a1a2e] mb-4 text-center">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-text-dark leading-relaxed text-center">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </motion.div>

          {/* View All More Button */}
          {services.length > 6 && (
            <motion.div
              variants={itemVariants}
              className="text-center relative block margin-bottom-10"
            >
              <hr height="1px" className="border-border-light mt-18 mb-8" />
              <ThemeButton
                variant="outline"
                size="lg"
                isArrowIcon={false}
                onClick={() => setShowAll(!showAll)}
                className="border-2  absolute left-1/2 bottom-1/2 -translate-x-1/2 translate-y-[50%] bg-bg-cream"
              >
                {showAll ? "Show Less" : "View All More"}
              </ThemeButton>
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default AboutUsServiceSection;
