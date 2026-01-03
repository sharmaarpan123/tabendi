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

  const viewportOptions = {
    once: true, // Only animate once when it first comes into view
    amount: 0.2, // Trigger when 20% of the element is visible
  };

  return (
    <section className="mx-auto  container  relative   rounded-3xl ">
      {/* Background Pattern */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none ">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.8 }}
          transition={{
            ease: "linear",
          }}
          className="h-full lg:h-auto bg-bg-cream"
        >
          <video
            src="/TBHN.mp4"
            alt="Background pattern"
            className="object-cover  h-full w-full"
            autoPlay
            muted
            loop
            playsInline
            controls={false}
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
              className="text-lg  max-w-xl leading-relaxed"
            >
              Our promise is built on integrity, compassion, and reliability.
              Ensuring every patient feels valued, understood, and confident in
              our hands.
            </motion.p>

            {/* Find a Doctor Section */}
            <motion.div
              variants={itemVariants}
              className="flex items-center gap-4 flex-wrap md:mt-4"
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
              whileHover={{ scale: 1.02 }}
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
              transition={{ type: "spring", stiffness: 300 }}
              className=" bg-white  rounded-xl grid grid-cols-1 sm:grid-cols-2 gap-4 mt-12 shadow-md hover:shadow-lg transition-shadow"
            >
              {/* Emergency Cases Card */}
              <div className=" p-6  ">
                <h3 className="text-xl font-bold text-[#1a1a2e] mb-2">
                  Emergency Cases
                </h3>
                <p className="text-sm text-text-dark mb-4">
                  Personalized attention, and continuous support for every
                  patient.
                </p>
                <div className="flex items-center gap-2">
                  <div className="bg-[#8B4513] p-2 rounded-full">
                    <PhoneIcon color="white" width={24} height={24} />
                  </div>
                  <div>
                    <div className="flex items-center">
                      <span className="text-sm  font-medium">24/7 Online</span>
                    </div>
                    <a
                      href="tel:+917700043200"
                      className="text-2xl font-bold text-primary hover:underline"
                    >
                      630 884 5115
                    </a>
                  </div>
                </div>
              </div>

              {/* Doctor Timetable Card */}
              <div className=" p-6 ">
                <h3 className="text-xl font-bold text-[#1a1a2e] mb-2">
                  Doctor Timetable
                </h3>
                <p className="text-sm text-text-dark mb-4">
                  Personalized attention, and continuous support for every
                  patient.
                </p>
                <ThemeButton
                  variant="primary"
                  size="sm"
                  isArrowIcon={false}
                  className="w-full sm:w-auto"
                  onClick={() =>
                    window.open(
                      process.env.NEXT_PUBLIC_PATIENT_WEB_URL,
                      "_blank"
                    )
                  }
                >
                  Timetable <span className="ml-1 text-lg font-bold">+</span>
                </ThemeButton>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
