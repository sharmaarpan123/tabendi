"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import ThemeButton from "@/components/ui/ThemeButton";
import CheckIcon from "@/assets/Icon/CheckIcon";

const ContactSection = () => {
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
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  return (
    <section className="relative py-16 sm:py-20 lg:py-24 overflow-hidden">
      <div className="container relative mx-auto px-4 sm:px-6 lg:px-8 flex justify-end">
        <div className="absolute inset-0 h-full">
          <div className="relative h-full rounded-3xl overflow-hidden">
            <Image
              src="/images/HomeContact/ContacUsSecBackGround.png"
              alt="Healthcare Professional"
              fill
              className="object-cover"
            />
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center my-8">
            <div></div>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOptions}
            className="relative"
          >
            <div className="bg-white rounded-3xl p-8 sm:p-10 lg:p-12 shadow-xl">
              {/* Top Label */}
              <motion.div variants={itemVariants}>
                <span className="text-sm font-semibold text-primary uppercase tracking-wide">
                  Are you doctor? Join us!
                </span>
              </motion.div>

              {/* Mission Statement */}
              <motion.h2
                variants={itemVariants}
                className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1a1a2e] mt-4 mb-6 leading-tight"
              >
                Our mission is to provide{" "}
                <span className="text-primary">good health</span> for everybody.
              </motion.h2>

              {/* Descriptive Paragraph */}
              <motion.p
                variants={itemVariants}
                className="text-base text-text-dark leading-relaxed mb-8"
              >
                We treat medicine as more than science. It&apos;s a journey of
                hope, guided by compassion, courage, and a commitment to help
                you live healthier, longer, and happier.
              </motion.p>

              {/* Features List */}
              <motion.div variants={itemVariants} className="space-y-4 mb-8">
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
                      <CheckIcon width={20} height={20} />
                    </div>
                    <p className="text-base text-text-dark">{feature}</p>
                  </motion.div>
                ))}
              </motion.div>

              {/* CTA Button */}
              <motion.div variants={itemVariants}>
                <ThemeButton variant="primary" size="lg" isArrowIcon={true}>
                  Contact Us
                </ThemeButton>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
