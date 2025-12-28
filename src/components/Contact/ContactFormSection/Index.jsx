"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import EmailIcon from "@/assets/Icon/EmailIcon";
import PhoneIcon from "@/assets/Icon/PhoneIcon";
import ThemeButton from "@/components/ui/ThemeButton";

const ContactFormSection = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData);
  };

  const viewportOptions = {
    once: true,
    amount: 0.1,
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

  return (
    <section  className="relative py-16 sm:py-20 lg:py-24 bg-white  lg:px-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: -100 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={viewportOptions}
          className="relative -mt-20 lg:-mt-32 z-20"
        >
          <div className="bg-white    shadow rounded-3xl overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              {/* Left Column - Contact Information (Orange) */}
              <div className="p-4 sm:p-6 ">
                <motion.div
                  variants={itemVariants}
                  className="bg-primary h-full  rounded-3xl flex flex-col justify-center"
                >
                  <div className="space-y-8 p-4  ">
                    {/* Heading */}
                    <h2 className="text-3xl sm:text-4xl font-bold text-white">
                      Contact Information
                    </h2>

                    {/* Description */}
                    <p className="text-base sm:text-lg text-white/90 leading-relaxed">
                      We&apos;re here to help! For questions or assistance, feel
                      free to reach out and contact us anytime.
                    </p>

                    {/* Email */}
                    <div className="flex items-center gap-4">
                      <div className="shrink-0">
                        <EmailIcon width={24} height={24} color="white" />
                      </div>
                      <a
                        href="mailto:jenny.wilson@Tabendi.com"
                        className="text-base sm:text-lg text-white hover:text-white/80 transition-colors duration-200"
                      >
                        jenny.wilson@Tabendi.com
                      </a>
                    </div>

                    {/* Phone */}
                    <div className="flex items-center gap-4">
                      <div className="shrink-0">
                        <PhoneIcon width={24} height={24} color="white" />
                      </div>
                      <a
                        href="tel:+917986709965"
                        className="text-base sm:text-lg text-white hover:text-white/80 transition-colors duration-200"
                      >
                        +91 7986709965
                      </a>
                    </div>
                  </div>
                </motion.div>
              </div>
              {/* Right Column - Contact Form (White) */}
              <motion.div
                variants={itemVariants}
                className="bg-white p-8 sm:p-12 lg:p-16"
              >
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name Fields - Side by Side */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* First Name */}
                    <div>
                      <label
                        htmlFor="firstName"
                        className="block text-sm font-medium text-text-dark mb-2"
                      >
                        First Name
                      </label>
                      <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        placeholder="First Name"
                        className="w-full px-4 py-3 border border-border-light rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent text-text-dark"
                        required
                      />
                    </div>

                    {/* Last Name */}
                    <div>
                      <label
                        htmlFor="lastName"
                        className="block text-sm font-medium text-text-dark mb-2"
                      >
                        Last Name
                      </label>
                      <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        placeholder="Last Name"
                        className="w-full px-4 py-3 border border-border-light rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent text-text-dark"
                        required
                      />
                    </div>
                  </div>

                  {/* Email Address */}
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-text-dark mb-2"
                    >
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Ex.Hello@tabendi.com"
                      className="w-full px-4 py-3 border border-border-light rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent text-text-dark"
                      required
                    />
                  </div>

                  {/* Message */}
                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-text-dark mb-2"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Write a message..."
                      rows={6}
                      className="w-full px-4 py-3 border border-border-light rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent text-text-dark resize-none"
                      required
                    />
                  </div>

                  {/* Submit Button */}
                  <div className="pt-4">
                    <ThemeButton
                      type="submit"
                      variant="primary"
                      size="lg"
                      isArrowIcon={true}
                      fullWidth
                    >
                      Submit
                    </ThemeButton>
                  </div>
                </form>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactFormSection;
