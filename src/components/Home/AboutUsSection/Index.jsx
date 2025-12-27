"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import ThemeButton from "@/components/ui/ThemeButton";
import CheckIcon from "@/assets/Icon/CheckIcon";

const AboutUsSection = () => {
  const features = [
    "Trusted doctors, all in one place",
    "Appointments without the wait",
    "Care on your terms",
    "Safe and reliable platform",
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
    hidden: { opacity: 0, scale: 0.8, x: -50 },
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
    <section className="relative py-16 sm:py-20 lg:py-24 bg-[#FFFBF6] overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Section - Images and Statistics */}
          <motion.div
            variants={imageVariants}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOptions}
            className="relative"
          >
            {/* Female Doctor */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewportOptions}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative mb-8"
            >
              <div className="relative bg-[#F46700] rounded-3xl p-4 sm:p-6 overflow-hidden">
                <div className="relative z-10">
                  <Image
                    src="/images/HomeAboutUs/LeftFemaleDoctor.png"
                    alt="Female Doctor"
                    width={400}
                    height={500}
                    className="object-contain w-full h-auto"
                  />
                </div>
              </div>

              {/* ISO Certification Badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={viewportOptions}
                transition={{ duration: 0.6, delay: 0.5, type: "spring" }}
                className="absolute top-4 right-4 sm:top-8 sm:right-8 z-20"
              >
                <Image
                  src="/images/HomeAboutUs/certificationImage.png"
                  alt="ISO 9001 Quality Management Certification"
                  width={150}
                  height={150}
                  className="object-contain"
                />
              </motion.div>
            </motion.div>

            {/* Patient Count Statistic */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={viewportOptions}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mb-6"
            >
              <div className="text-6xl sm:text-7xl font-bold text-[#1a1a2e] mb-2">
                25K
              </div>
              <p className="text-lg text-[#4A4A4A]">
                <span className="text-[#F46700] font-semibold">
                  Patients Cared
                </span>{" "}
                With Compassion
              </p>
            </motion.div>

            {/* Descriptive Text */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewportOptions}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="text-base text-[#4A4A4A] mb-8 max-w-md"
            >
              Providing exceptional healthcare built on empathy, trust, and
              long-term patient relationships across all ages.
            </motion.p>

            {/* Male Doctor */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewportOptions}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="relative"
            >
              <div className="relative bg-[#F46700] rounded-3xl p-4 sm:p-6 overflow-hidden">
                <div className="relative z-10">
                  <Image
                    src="/images/HomeAboutUs/RightMaleDcotor.png"
                    alt="Male Doctor"
                    width={400}
                    height={500}
                    className="object-contain w-full h-auto"
                  />
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Section - Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOptions}
            className="space-y-8"
          >
            {/* About Us Label */}
            <motion.div variants={itemVariants}>
              <span className="text-sm font-semibold text-[#F46700] uppercase tracking-wide">
                About Us
              </span>
            </motion.div>

            {/* Main Heading */}
            <motion.div variants={itemVariants}>
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
                <span className="text-[#1a1a2e]">Healthcare made simple, for</span>
                <br />
                <span className="text-[#F46700]">everyone</span>
              </h2>
            </motion.div>

            {/* Introductory Paragraph */}
            <motion.p
              variants={itemVariants}
              className="text-lg text-[#4A4A4A] leading-relaxed max-w-xl"
            >
              We treat medicine as more than science. It&apos;s a journey of hope,
              guided by compassion, courage, and a commitment to help you live
              healthier, longer, and happier.
            </motion.p>

            {/* Features List */}
            <motion.div
              variants={itemVariants}
              className="space-y-4"
            >
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={viewportOptions}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  className="flex items-start gap-3"
                >
                  <div className="shrink-0 mt-1">
                    <CheckIcon width={24} height={24} color="#F46700" />
                  </div>
                  <p className="text-base text-[#4A4A4A]">{feature}</p>
                </motion.div>
              ))}
            </motion.div>

            {/* CTA Button */}
            <motion.div
              variants={itemVariants}
              className="pt-4"
            >
              <ThemeButton variant="primary" size="lg" isArrowIcon={true}>
                Find a Doctor
              </ThemeButton>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutUsSection;
