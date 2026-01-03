"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const ContactHeroSection = () => {
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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
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

  return (
    <section
      className="bg-bg-cream  min-h-[350px] container mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center"
    >
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4 sm:px-6 lg:px-8">
        <motion.h1
          variants={itemVariants}
          className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-[#1a1a2e] mb-4"
        >
          Contact Us
        </motion.h1>
        <motion.div
          variants={itemVariants}
          className="flex items-center gap-2 text-sm sm:text-base text-text-dark"
        >
          {/* <span className="text-text-dark">Contact Us</span> */}
        </motion.div>
      </div>

      <motion.div
        variants={imageVariants}
        initial="hidden"
        whileInView={{ opacity: 0.7,  }}
        viewport={viewportOptions}
        className="relative h-full pt-16 overflow-hidden  flex items-center justify-center"
      >
        <div className="lg:absolute static lg:bottom-0">
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1.5 }}
            viewport={viewportOptions}
            transition={{ duration: 1, delay: 0.5 }}
            className="absolute  lg:w-full h-full flex items-center justify-center"
          >
            <motion.div
              className="relative w-[300px] h-[300px]"
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
                className="object-contain w-[300px] h-[300px]"
              />
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={viewportOptions}
            transition={{ duration: 0.8, delay: 0.3 }}
            whileHover={{ scale: 1.05 }}
            className="relative"
          >
            <Image
              src="/images/Hero/HeroGirl.png"
              alt="Healthcare Professional"
              width={400}
              height={400}
              className="object-contain max-h-[300px] w-auto"
              priority
            />
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default ContactHeroSection;
