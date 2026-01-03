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
    <section className="relative py-16 sm:py-20 lg:py-24 lg:pb-0 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Section - Images and Statistics */}
          <motion.div
            variants={imageVariants}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOptions}
            className="relative grid pt-16 grid-cols-1 lg:grid-cols-2 gap-1 lg:gap-1 items-center"
          >
            {/* Female Doctor */}
            <div className="w-full">
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={viewportOptions}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="relative mb-8 w-full h-[400px] rounded-3xl  sm:p-6"
              >
                <Image
                  src="/images/HomeAboutUs/LeftFemaleDoctor.png"
                  alt="Female Doctor"
                  fill
                  className="object-contain  w-full h-auto"
                />

                {/* ISO Certification Badge */}
              </motion.div>

              {/* Patient Count Statistic */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={viewportOptions}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="mb-6 flex gap-2 justify-center lg:justify-start"
              >
                <div className="text-6xl sm:text-5xl font-bold text-[#1a1a2e] mb-2">
                  25K
                </div>
                <p className="text-lg text-text-dark">
                  <span className="text-primary font-semibold block">
                    Patients Cared
                  </span>{" "}
                  <span className="text-[#1a1a2e] font-bold">
                    With Compassion
                  </span>
                </p>
              </motion.div>
              {/* Descriptive Text */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={viewportOptions}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="text-base text-text-dark mb-8 max-w-md mx-auto lg:mx-0"
              >
                Providing exceptional healthcare built on empathy, trust, and
                long-term patient relationships across all ages.
              </motion.p>
            </div>
            <div>
              <div className="flex  gap-2">
                <div className="flex flex-col justify-center">
                  <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={viewportOptions}
                    transition={{ duration: 0.6, delay: 0.5, type: "spring" }}
                    className="flex flex-col items-center justify-center"
                  >
                    <img
                      src="/images/HomeAboutUs/certificationImage.png"
                      alt="ISO 9001 Quality Management Certification"
                      className="w-14 h-14 object-contain"
                    />
                  </motion.div>
                  <div className="flex flex-col items-center justify-center">
                    <p className="text-sm font-bold text-[#1a1a2e] ">
                      ISO 9001
                    </p>
                    <p
                      style={{ fontSize: "10px" }}
                      className="font-bold text-[#1a1a2e] "
                    >
                      ACCREDITATION
                    </p>
                  </div>
                </div>
                <div>
                  <p className="text-sm text-primary">ISO 9001</p>
                  <h3 className="text-xl font-bold text-[#1a1a2e] mb-2">
                    {" "}
                    Quality Management Certification
                  </h3>
                </div>
              </div>

              {/* Male Doctor */}
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={viewportOptions}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="relative mb-8 w-full h-[400px] rounded-3xl  sm:p-6"
              >
                <Image
                  src="/images/HomeAboutUs/RightMaleDcotor.png"
                  alt="Female Doctor"
                  fill
                  className="object-contain  w-full h-auto"
                />

                {/* ISO Certification Badge */}
              </motion.div>
            </div>
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
              <span className="text-2xl font-semibold text-primary  tracking-wide">
                About Us
              </span>
            </motion.div>

            {/* Main Heading */}
            <motion.div variants={itemVariants}>
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
                <span className="text-[#1a1a2e]">
                  Healthcare made simple, for
                </span>{" "}
                <span className="text-primary">everyone</span>
              </h2>
            </motion.div>

            {/* Introductory Paragraph */}
            <motion.p
              variants={itemVariants}
              className="text-lg text-text-dark leading-relaxed max-w-xl"
            >
              We treat medicine as more than science. It&apos;s a journey of
              hope, guided by compassion, courage, and a commitment to help you
              live healthier, longer, and happier.
            </motion.p>

            {/* Features List */}
            <motion.div variants={itemVariants} className="space-y-4">
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
                    <CheckIcon width={24} height={24} color="var(--primary)" />
                  </div>
                  <p className="text-base text-text-dark">{feature}</p>
                </motion.div>
              ))}
            </motion.div>

            {/* CTA Button */}
            <motion.div variants={itemVariants} className="pt-4">
              <ThemeButton
                onClick={() =>
                  window.open(process.env.NEXT_PUBLIC_PATIENT_WEB_URL, "_blank")
                }
                variant="primary"
                size="lg"
                isArrowIcon={true}
              >
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
