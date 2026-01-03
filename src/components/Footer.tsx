"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import EmailIcon from "@/assets/Icon/EmailIcon";

const Footer = () => {
  const services = [
    { href: "#", label: "Primary Care Consultation" },
    { href: "#", label: "Mental Health" },
    { href: "#", label: "Dentist" },
    { href: "#", label: "Weight Management" },
    { href: "#", label: "Chronic Disease Management" },
  ];

  const quickLinks = [
    { href: "/about", label: "About us" },
    { href: "#", label: "Our Doctor" },
    { href: "#", label: "Appointments" },
    { href: "/contact", label: "Contact us" },
    { href: "#", label: "FAQs" },
  ];

  const legalLinks = [
    { href: "#", label: "Terms & Condition" },
    { href: "#", label: "Privacy Policy" },
    { href: "#", label: "Disclaimer" },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <motion.footer
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={containerVariants}
      className="w-full"
    >
      {/* Upper Section - Light Gray Background */}
      <div className="bg-white pb-12  sm:pb-16 lg:pb-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {/* Column 1 - Branding and Description */}
            <motion.div variants={itemVariants} className="space-y-4">
              {/* Logo */}
              <Link href="/" className="flex items-center gap-3">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: "spring", stiffness: 400 }}
                  className="flex items-center justify-center rounded-full"
                >
                  <Image
                    src="/images/logo.png"
                    alt="Tabendi Healthcare Network Logo"
                    width={90}
                    height={40}
                    className="object-contain"
                  />
                </motion.div>
              </Link>
              {/* Description */}
              <p className="text-sm text-text-dark leading-relaxed">
                Our paper is sourced from FSC-certified mills. We plant enough
                trees to more than double our paper usage.
              </p>
            </motion.div>

            {/* Column 2 - Services */}
            <motion.div variants={itemVariants} className="space-y-4">
              <h3 className="text-base font-bold text-text-dark mb-4">
                Services
              </h3>
              <ul className="space-y-3">
                {services.map((service, index) => (
                  <li key={index}>
                    <Link
                      href={service.href}
                      className="text-sm text-text-dark hover:text-primary transition-colors duration-200"
                    >
                      {service.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Column 3 - Quick Links */}
            <motion.div variants={itemVariants} className="space-y-4">
              <h3 className="text-base font-bold text-text-dark mb-4">
                Quick Links
              </h3>
              <ul className="space-y-3">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <Link
                      href={link.href}
                      className="text-sm text-text-dark hover:text-primary transition-colors duration-200"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Column 4 - Contact */}
            <motion.div variants={itemVariants} className="space-y-4">
              <h3 className="text-base font-bold text-text-dark mb-4">
                Contact
              </h3>
              <div className="flex items-center gap-3">
                <EmailIcon width={20} height={20} color="var(--text-dark)" />
                <a
                  href="mailto:support@tabendihealthcarenetwork.com"
                  className="text-sm text-text-dark hover:text-primary transition-colors duration-200"
                >
                  support@tabendihealthcarenetwork.com
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Bottom Bar - Orange Background */}
      <motion.div variants={itemVariants} className="bg-primary py-4 sm:py-5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            {/* Left Side - Legal Links */}
            <div className="flex flex-wrap items-center gap-4 justify-center sm:justify-start">
              {legalLinks.map((link, index) => (
                <React.Fragment key={index}>
                  <Link
                    href={link.href}
                    className="text-sm text-white hover:text-gray-200 transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                  {index < legalLinks.length - 1 && (
                    <span className="text-white text-sm">|</span>
                  )}
                </React.Fragment>
              ))}
            </div>

            {/* Right Side - Copyright */}
            <div className="text-sm text-white text-center sm:text-right">
              © 2025 Tabandi, Inc. All rights reserved
            </div>
          </div>
        </div>
      </motion.div>
    </motion.footer>
  );
};

export default Footer;
