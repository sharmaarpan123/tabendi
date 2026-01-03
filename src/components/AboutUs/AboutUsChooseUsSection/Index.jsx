"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import ThemeButton from "@/components/ui/ThemeButton";
import CheckIcon from "@/assets/Icon/CheckIcon";

const AboutUsChooseUsSection = () => {
  const features = [
    {
      id: 1,
      title: "Patient-Provider Approach",
      description:
        "Your health is at the heart of what we do. We prioritize your comfort, needs, and satisfaction in every aspect of healthcare delivery.",
      iconColor: "var(--bg-cream)",
      iconCheckColor: "var(--primary)",
    },
    {
      id: 2,
      title: "Expert Healthcare Professionals",
      description:
        "We boast skilled and compassionate healthcare professionals dedicated to providing the highest standard of care.",
      iconColor: "#D2EEE2", // Green color
      iconCheckColor: "#1C4B37",
    },
    {
      id: 3,
      title: "Pioneering Healthcare Solutions",
      description:
        "We boast skilled and compassionate healthcare professionals dedicated to providing the highest standard of care.",
        iconColor: "var(--bg-cream)",
        iconCheckColor: "var(--primary)",
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
      },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.8,
      },
    },
  };

  return (
    <section className="relative py-16  sm:py-20 lg:py-24  bg-white overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 items-start">
          {/* Left Column - Appointment CTA Card */}
          <motion.div
            variants={imageVariants}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOptions}
            className="relative lg:col-span-1"
          >
            <div className="relative bg-[#FFD3B2] rounded-3xl p-8 pb-0  sm:p-10 lg:p-12 lg:pb-0  flex flex-col justify-between overflow-hidden">
              {/* Faint THN Logo in Background */}
              <div className="absolute top-1/2 left-4 ">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: "spring", stiffness: 400 }}
                  className="flex items-center justify-center rounded-full"
                >
                  <Image
                    src="/images/logo-light-watermark.png"
                    alt="Tabendi Healthcare Network Logo"
                    width={200}
                    height={60}
                    className="object-contain"
                  />
                </motion.div>
              </div>
              <div className="absolute top-0 right-0 ">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: "spring", stiffness: 400 }}
                  className="flex items-center justify-center rounded-full"
                >
                  <Image
                    src="/images/BackGroundBuble.png"
                    alt="Tabendi Healthcare Network Logo"
                    width={200}
                    height={60}
                    className="object-contain"
                  />
                </motion.div>
              </div>

              {/* Content */}
              <div className="relative z-10 space-y-6">
                {/* Heading */}
                <motion.h2
                  variants={itemVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={viewportOptions}
                  className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#1a1a2e] leading-tight"
                >
                  Your Path to Mental Health, Make an Appointment Now.
                </motion.h2>

                {/* CTA Button */}
                <motion.div
                  variants={itemVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={viewportOptions}
                  className="pt-4"
                >
                  <ThemeButton
                    variant="transparent"
                    size="lg"
                    className="text-primary"
                    isArrowIcon={true}
                    onClick={() => {
                      window.open(
                        process.env.NEXT_PUBLIC_PATIENT_WEB_URL,
                        "_blank"
                      );
                    }}
                  >
                    Make Appointment
                  </ThemeButton>
                </motion.div>
              </div>

              {/* Doctor Image */}
              <motion.div
                variants={itemVariants}
                initial="hidden"
                whileInView="visible"
                viewport={viewportOptions}
                className="relative z-10 mt-8 h-[400px] lg:h-[450px] flex items-end justify-end"
              >
                <div className="relative w-full h-full">
                  <Image
                    src="/images/AboutUsChooseUs/FemaleDoctor.png"
                    alt="Healthcare Professional"
                    fill
                    className="object-contain object-bottom-right"
                  />
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Right Column - Why Choose Us Details */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOptions}
            className="space-y-8 lg:col-span-2"
          >
            {/* Sub-heading */}
            <motion.div variants={itemVariants}>
              <p className="text-2xl font-semibold text-primary  tracking-wide">
                Why Choose Us
              </p>
            </motion.div>

            {/* Main Title */}
            <motion.h2
              variants={itemVariants}
              className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight"
            >
              <span className="text-[#1a1a2e]">Tabendi Healthcare</span>{" "}
              <span className="text-primary">Network</span>
            </motion.h2>

            {/* Description */}
            <motion.p
              variants={itemVariants}
              className="text-base text-text-dark leading-relaxed"
            >
              Dr. Chool Liyanapatabendi, M.D., is a board-certified physician in
              Internal Medicine, specializing in the prevention, diagnosis, and
              management of complex adult medical conditions. His practice
              emphasizes comprehensive and patient-centered care, ranging from
              routine health maintenance and chronic disease management to the
              coordination of care for patients with multiple or complicated
              illnesses.
            </motion.p>

            {/* Feature Cards */}
            <motion.div
              variants={itemVariants}
              className="grid grid-cols-1 sm:grid-cols-3 gap-4 lg:gap-6"
            >
              {features.map((feature) => (
                <motion.div
                  key={feature.id}
                  variants={itemVariants}
                  whileHover={{ y: -5 }}
                  transition={{ duration: 0.3 }}
                  className="bg-white border border-border-light rounded-2xl p-4 sm:p-6 shadow-sm hover:shadow-md transition-shadow duration-300"
                >
                  {/* Icon */}
                  <div className="mb-4">
                    <div
                      className="w-12 h-12 rounded-full flex items-center justify-center"
                      style={{ backgroundColor: feature.iconColor }}
                    >
                      <CheckIcon
                        width={24}
                        height={24}
                        color={feature.iconCheckColor}
                      />
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-base font-bold text-[#1a1a2e] mb-3">
                    {feature.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-text-dark leading-relaxed">
                    {feature.description}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutUsChooseUsSection;
