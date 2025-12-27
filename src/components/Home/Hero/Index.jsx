"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import ThemeButton from "@/components/ui/ThemeButton";
import PhoneIcon from "@/assets/Icon/PhoneIcon";

const Hero = () => {
  const profileImages = [
    "/images/Hero/randomUser1.png",
    "/images/Hero/randomUser2.png",
    "/images/Hero/randomUser3.png",
    "/images/Hero/randomUser4.png",
  ];

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
    hidden: { opacity: 0, y: 20 },
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
    hidden: { opacity: 0, scale: 0.8, x: 50 },
    visible: {
      opacity: 1,
      scale: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const viewportOptions = {
    once: true, // Only animate once when it first comes into view
    amount: 0.2, // Trigger when 20% of the element is visible
  };

  return (
    <section className="mx-auto  container bg-bg-cream relative   rounded-3xl ">
      {/* Background Pattern */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none ">
        <motion.div
          initial={{ opacity: 0, rotate: 0 }}
          animate={{ opacity: 0.1, rotate: 360 }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute -right-40 -top-40 w-96 h-96"
        >
          <Image
            src="/images/Hero/rotatingSpiral.png"
            alt="Background pattern"
            width={400}
            height={400}
            className="object-contain"
          />
        </motion.div>
      </div>

      <div className="   px-4  pb-0 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Section - Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOptions}
            className=" pt-16"
          >
            {/* Main Heading */}
            <motion.div variants={itemVariants}>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
                <span className="text-[#1a1a2e]">Medical & Health</span>
                <br />
                <span className="text-[#1a1a2e]">Care </span>
                <span className="text-primary">Service</span>
              </h1>
            </motion.div>

            {/* Description */}
            <motion.p
              variants={itemVariants}
              className="text-lg text-[#4A4A4A] max-w-xl leading-relaxed"
            >
              Our promise is built on integrity, compassion, and reliability.
              Ensuring every patient feels valued, understood, and confident in
              our hands.
            </motion.p>

            {/* Find a Doctor Section */}
            <motion.div
              variants={itemVariants}
              className="flex items-center gap-4 flex-wrap"
            >
              <ThemeButton variant="primary" size="lg" isArrowIcon={true}>
                Find a Doctor
              </ThemeButton>

              {/* Profile Images */}
              <div className="flex items-center -space-x-3">
                {profileImages.map((img, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={viewportOptions}
                    transition={{
                      delay: 0.5 + index * 0.1,
                      type: "spring",
                      stiffness: 200,
                    }}
                    whileHover={{ scale: 1.1, zIndex: 10 }}
                    className="relative w-12 h-12 rounded-full border-2 border-white overflow-hidden shadow-md"
                  >
                    <Image
                      src={img}
                      alt={`Doctor ${index + 1}`}
                      fill
                      className="object-cover"
                    />
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Information Cards */}
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 100 },
                visible: {
                  opacity: 1,
                  y: 70,
                  transition: {
                    duration: 0.6,
                    ease: "easeOut",
                  },
                },
              }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-12"
            >
              {/* Emergency Cases Card */}
              <motion.div
                whileHover={{ y: -5, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow"
              >
                <h3 className="text-xl font-bold text-[#1a1a2e] mb-2">
                  Emergency Cases
                </h3>
                <p className="text-sm text-[#4A4A4A] mb-4">
                  Personalized attention, and continuous support for every
                  patient.
                </p>
                <div className="flex items-center gap-2 mb-2">
                  <PhoneIcon color="#8B4513" />
                  <span className="text-sm text-[#8B4513] font-medium">
                    24/7 Online
                  </span>
                </div>
                <a
                  href="tel:+917700043200"
                  className="text-2xl font-bold text-primary hover:underline"
                >
                  +91-77000-43200
                </a>
              </motion.div>

              {/* Doctor Timetable Card */}
              <motion.div
                whileHover={{ y: -5, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow"
              >
                <h3 className="text-xl font-bold text-[#1a1a2e] mb-2">
                  Doctor Timetable
                </h3>
                <p className="text-sm text-[#4A4A4A] mb-4">
                  Personalized attention, and continuous support for every
                  patient.
                </p>
                <ThemeButton
                  variant="primary"
                  size="sm"
                  isArrowIcon={false}
                  className="w-full sm:w-auto"
                >
                  Timetable <span className="ml-1 text-lg font-bold">+</span>
                </ThemeButton>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Right Section - Doctor Image */}
          <motion.div
            variants={imageVariants}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOptions}
            className="relative h-full pt-16 overflow-hidden  flex items-center justify-center"
          >
            <div className="lg:absolute static lg:bottom-0">
              {/* Background Pattern Behind Doctor */}
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1.5 }}
                viewport={viewportOptions}
                transition={{ duration: 1, delay: 0.5 }}
                className="absolute -z-10 lg:w-full h-full flex items-center justify-center"
              >
                <motion.div
                  className="relative w-96 h-96"
                  animate={{ rotate: 360 }}
                  transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                >
                  <Image
                    src="/images/Hero/rotatingSpiral.png"
                    alt="Background pattern"
                    width={400}
                    height={400}
                    className="object-contain"
                  />
                </motion.div>
              </motion.div>

              {/* Doctor Image */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={viewportOptions}
                transition={{ duration: 0.8, delay: 0.3 }}
                whileHover={{ scale: 1.05 }}
                className="relative z-10"
              >
                <Image
                  src="/images/Hero/HeroGirl.png"
                  alt="Healthcare Professional"
                  width={600}
                  height={800}
                  className="object-contain max-h-[600px] w-auto"
                  priority
                />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
