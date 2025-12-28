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

  return (
    <section className="relative py-8 sm:py-12 lg:py-16 ">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOptions}
          className="relative rounded-3xl overflow-hidden h-[300px] sm:h-[400px] lg:h-[500px]"
        >
          {/* Background Image with Blur */}
          <div className="absolute inset-0">
            <Image
              src="/images/AboutUsHero/AboutUsHeroBackGround.png"
              alt="Healthcare Professionals"
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* Content Overlay */}
          <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4 sm:px-6 lg:px-8">
            {/* Main Title */}
            <motion.h1
              variants={itemVariants}
              className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-[#1a1a2e] mb-4"
            >
              Contact Us
            </motion.h1>

            {/* Breadcrumb Navigation */}
            <motion.div
              variants={itemVariants}
              className="flex items-center gap-2 text-sm sm:text-base text-text-dark"
            >
              <Link
                href="/"
                className="hover:text-primary transition-colors duration-200"
              >
                Home
              </Link>
              <span className="text-text-dark">/</span>
              <span className="text-text-dark">Contact Us</span>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactHeroSection;
