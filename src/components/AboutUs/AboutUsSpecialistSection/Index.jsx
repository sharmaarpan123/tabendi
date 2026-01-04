"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const AboutUsSpecialistSection = () => {
  const specialists = [
    {
      id: 1,
      name: "Chool Liyanapatabendi, M.D., M.A.C.P.",
      image: "/images/AboutUsSpecialist/HeroDoctor.png", // Placeholder - will be updated
      description:
        "Dr. Liyanapatabendi is a board-certified physician in Internal Medicine, specializing in the prevention, diagnosis, and management of complex adult medical conditions. His practice emphasizes comprehensive and patient-centered care, covering routine health maintenance, chronic disease management, and coordination of care for patients with multiple or complicated illnesses.",
      practiceLocation: "715 W. Lake Street, Suite 104, Addison, IL, 60101",
      tel: "630 366 6681",
      fax: "630 366 6550",
    },
    {
      id: 2,
      name: "Maria Theresa De Rosas, APN",
      image: "/images/AboutUsSpecialist/Hero2.jpg", // Placeholder - will be updated
      description:
        "Maria Theresa De Rosas, APN, specializes in the prevention, diagnosis, and management of complex adult medical conditions. Her practice focuses on delivering comprehensive, patient-centered care that addresses the full spectrum of adult health needs, from routine preventive services and chronic disease management to the coordination of care for individuals with multiple or complicated medical issues. She is committed to evidence-based practice to promote optimal health outcomes and enhance patient quality of life through compassionate and personalized care.",
      practiceLocation: "715 W. Lake Street, Suite 104, Addison, IL, 60101",
      tel: "630 366 6681",
      fax: "630 366 6550",
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
        staggerChildren: 0.2,
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

  return (
    <section className="relative py-16 sm:py-20 lg:py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOptions}
          className="space-y-12"
        >
          {/* Header Section */}
          <motion.div
            variants={itemVariants}
            className="text-center space-y-4 max-w-3xl mx-auto"
          >
            {/* Section Label */}
            <div className="flex flex-col items-center space-y-2">
              
              {/* Horizontal line */}
              <div className="w-16 h-0.5 bg-primary"></div>
            </div>

            {/* Main Heading */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1a1a2e] leading-tight">
              Meet Our Specialists
            </h2>
          </motion.div>

          {/* Specialists Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            {specialists.map((specialist) => (
              <motion.div
                key={specialist.id}
                variants={itemVariants}
                className="bg-white rounded-2xl p-6 sm:p-8 shadow-md hover:shadow-lg transition-shadow duration-300"
              >
                {/* Specialist Image */}
                <div className="flex justify-center mb-6">
                  <div className="relative w-48 h-48 sm:w-56 sm:h-56 lg:w-64 lg:h-64 rounded-lg overflow-hidden">
                    <Image
                      src={specialist.image}
                      alt={specialist.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>

                {/* Name and Title */}
                <h3 className="text-xl sm:text-2xl font-bold text-[#1a1a2e] mb-4 text-center">
                  {specialist.name}
                </h3>

                {/* Description */}
                <p className="text-sm sm:text-base text-text-dark leading-relaxed mb-6">
                  {specialist.description}
                </p>

                {/* Contact Information */}
                <div className="border-t border-border-light pt-4 space-y-2">
                  <p className="text-sm text-text-dark">
                    <span className="font-semibold">Practice Location:</span>{" "}
                    {specialist.practiceLocation}
                  </p>
                  <p className="text-sm text-text-dark">
                    <span className="font-semibold">Tel:</span> {specialist.tel}
                    {specialist.fax && (
                      <>
                        {" "}
                        | <span className="font-semibold">Fax:</span>{" "}
                        {specialist.fax}
                      </>
                    )}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutUsSpecialistSection;
