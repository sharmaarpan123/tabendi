"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import LocationIcon from "@/assets/Icon/LocationIcon";

const AboutUsHeroSection = () => {
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
    <section className="relative py-8 sm:py-12 lg:py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOptions}
          className="relative rounded-3xl overflow-hidden h-[300px] sm:h-[400px] lg:h-[500px]"
        >
          {/* Background Image with Overlay */}
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
              About Us
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
              <span className="text-text-dark">About Us</span>
            </motion.div>
          </div>
        </motion.div>

        {/* Doctor Section */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOptions}
          className="mt-12 sm:mt-16 lg:mt-20"
        >
          <div className="grid  grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left Column - Doctor Image with Decorative Arc */}

            <motion.div
              variants={itemVariants}
              className="relative flex justify-end   "
            >
              <motion.div
                className="absolute left-[20px] -top-[50px]"
                animate={{ rotate: 360 }}
                transition={{
                  duration: 20,
                  repeat: Infinity,
                  ease: "linear",
                }}
              >
                <div className="relative w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] lg:w-[500px] lg:h-[500px]">
                  <Image
                    src="/images/Hero/rotatingSpiral.png"
                    alt="Spiral Pattern"
                    fill
                    className="object-cover"
                  />
                </div>
              </motion.div>

              <div className="relative  w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] lg:w-[500px] lg:h-[500px]">
                {/* Doctor Image */}
                <div className="relative z-10 w-full h-full flex items-center justify-center">
                  <div className="relative w-[280px] h-[280px] sm:w-[360px] sm:h-[360px] lg:w-[450px] lg:h-[450px] overflow-hidden ">
                    <Image
                      src="/images/AboutUsHero/HeroDoctor.png"
                      alt="Dr. Chool Liyanapatabendi"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right Column - Text Content */}
            <motion.div variants={itemVariants} className="space-y-6">
              {/* Section Label */}
              <motion.p
                variants={itemVariants}
                className=" font-semibold text-primary text-2xl tracking-wide"
              >
                About Us
              </motion.p>

              {/* Main Heading */}
              <motion.h2
                variants={itemVariants}
                className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1a1a2e] leading-tight"
              >
                Chool Liyanapatabendi, M.D., M.A.C.P.
              </motion.h2>

              {/* Practice Description */}
              <motion.p
                variants={itemVariants}
                className="text-base text-text-dark leading-relaxed"
              >
                Dr. Chool Liyanapatabendi, M.D., is a board-certified physician
                in Internal Medicine, specializing in the prevention, diagnosis,
                and management of complex adult medical conditions. His practice
                emphasizes comprehensive and patient-centered care, ranging from
                routine health maintenance and chronic disease management to the
                coordination of care for patients with multiple or complicated
                illnesses.
              </motion.p>

              {/* Sub-heading */}
              <motion.div variants={itemVariants} className="space-y-1">
                <h3 className="text-xl font-bold text-text-dark">
                  Dr. Chool Liyanapatabendi, M.D
                </h3>
                <p className="text-sm text-text-dark/70">Message from CEO</p>
              </motion.div>

              {/* Practice Location Box */}
              <motion.div
                variants={itemVariants}
                className="border border-border-light rounded-2xl p-6 bg-white"
              >
                <div className="flex items-start gap-4">
                  <div className="shrink-0 mt-1">
                    <LocationIcon
                      width={24}
                      height={24}
                      color="var(--primary)"
                    />
                  </div>
                  <div className="space-y-1">
                    <p className="font-bold text-text-dark">
                      Practice Location:
                    </p>
                    <p className="text-sm text-text-dark">
                      715 W. Lake Street, Suite 104, Addison, IL, 60101.
                    </p>
                    <p className="text-sm text-text-dark">
                      Tel: 630 366 6681; Fax: 630 366 6550.
                    </p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutUsHeroSection;
