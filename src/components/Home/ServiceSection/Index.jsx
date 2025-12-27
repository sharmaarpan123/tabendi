"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import ThemeButton from "@/components/ui/ThemeButton";
import CheckIcon from "@/assets/Icon/CheckIcon";
import { ArrowIcon } from "@/components/ui/ThemeButton";

const ServiceSection = () => {
  const features = [
    "Excellent Laboratory",
    "World Class Infrastructure",
    "Excellent Laboratory",
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

  return (
    <section className="relative py-16 sm:py-20 lg:py-20 bg-bg-cream overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOptions}
          className="text-center mb-12 lg:mb-16"
        >
          <motion.div variants={itemVariants}>
            <span className="text-bold text-2xl font-semibold text-primary uppercase tracking-wide">
              Our Service
            </span>
          </motion.div>
          <motion.h2
            variants={itemVariants}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#1a1a2e] mt-4 mb-4"
          >
            Dedicated to Your Wellness
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-lg text-text-dark max-w-2xl mx-auto"
          >
            Your health is our top priority. Schedule an appointment with us
            today
          </motion.p>
        </motion.div>

        {/* Main Content Area */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-12">
          {/* Left Card - General Health Check-Up */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={viewportOptions}
            transition={{ duration: 0.8 }}
            className=" bg-white rounded-3xl p-6 sm:p-8 shadow-lg hover:shadow-xl transition-shadow"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
              {/* Image */}
              <div className="relative h-64 md:h-80 rounded-2xl overflow-hidden">
                <Image
                  src="/images/HomeService/HomeServiceLeftDoctor.png"
                  alt="General Health Check-Up"
                  fill
                  className="object-cover"
                />
              </div>

              {/* Content */}
              <div className="space-y-4">
                <h3 className="text-2xl sm:text-3xl font-bold text-[#1a1a2e]">
                  General Health Check-Up
                </h3>
                <p className="text-base text-text-dark leading-relaxed">
                  Comprehensive routine assessments to monitor overall health
                  and detect early medical concerns
                </p>

                {/* Features List */}
                <ul className="space-y-3">
                  {features.map((feature, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={viewportOptions}
                      transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                      className="flex items-center gap-3"
                    >
                      <CheckIcon width={20} height={20} />
                      <span className="text-base text-text-dark">
                        {feature}
                      </span>
                    </motion.li>
                  ))}
                </ul>

                {/* Button */}
                <div className="pt-4">
                  <ThemeButton variant="primary" size="md" isArrowIcon={true}>
                    Book an Appointment
                  </ThemeButton>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Cards - Cardiology Consultation */}
          <div className="grid   lg:grid-cols-4 h-full gap-4">
            {[1, 2, 3, 4].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={viewportOptions}
                transition={{ duration: 0.6 + index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="relative h-48 rounded-2xl h-full overflow-hidden shadow-lg cursor-pointer group"
              >
                {/* Dark Overlay */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/80 z-10" />

                {/* Image */}
                <Image
                  src="/images/HomeService/HomeServiceRightDoctor.png"
                  alt="Cardiology Consultation"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-300"
                />

                {/* Content */}
                <div className="absolute inset-0 z-20 flex flex-col justify-center items-center p-4">
                  <div className="z-30 bg-white rounded-lg p-2 shadow-md">
                    <ArrowIcon color="var(--primary)" />
                  </div>
                  <h4 className="text-white text-lg font-semibold text-center mb-2 h-full vertical-text">
                    Cardiology Consultation
                  </h4>
                </div>

                {/* Arrow Icon */}
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportOptions}
          transition={{ duration: 0.6 }}
          className="text-center   relative block margin-bottom-10"
        >
          <hr height="1px" className="border-border-light mt-28" />
          <ThemeButton
            variant="secondary"
            size="lg"
            isArrowIcon={false}
            className="border-2 absolute left-1/2 bottom-1/2 -translate-x-1/2 translate-y-[50%]"
          >
            View All Services
          </ThemeButton>
        </motion.div>
      </div>
    </section>
  );
};

export default ServiceSection;
