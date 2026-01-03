"use client";

import React, { useState, useMemo } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import ThemeButton from "@/components/ui/ThemeButton";
import CheckIcon from "@/assets/Icon/CheckIcon";
import { ArrowIcon } from "@/components/ui/ThemeButton";
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

const ServiceSection = ({ categories = [] }) => {
  const [showAllServices, setShowAllServices] = useState(false);

  // Transform categories to services format
  const services = useMemo(() => {
    // Filter only top-level categories (parent_id === null)
    const topLevelCategories = categories.filter(
      (cat) => cat.parent_id === null && cat.status === 1
    );

    return topLevelCategories.map((category) => {
      // Parse description to extract features (bullet points)
      const features = category.description
        .split(/\r?\n/)
        .map((line) => line.trim())
        .filter((line) => line.startsWith("•") || line.startsWith("-"))
        .map((line) => line.replace(/^[•\-]\s*/, "").trim())
        .filter((line) => line.length > 0)
        .slice(0, 5); // Limit to 5 features max

      // Get a short description (first sentence or first 150 characters)
      const description = category.description
        .split(/\r?\n/)[0]
        .replace(/^[•\-]\s*/, "")
        .trim()
        .substring(0, 150);

      return {
        id: category.id,
        title: category.title,
        description: description || category.title,
        features: features.length > 0 ? features : [category.title],
        image: category.icon || "/images/HomeService/HomeServiceLeftDoctor.png",
      };
    });
  }, [categories]);

  const serviceBatches = services?.length / 5;

  return (
    <section className="relative py-16 sm:py-20 lg:py-32 bg-bg-cream overflow-hidden">
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
            className="text-lg text-text-dark max-w-2xl mx-auto pt-2"
          >
            Your health is our top priority. Schedule an appointment with us
            today
          </motion.p>
        </motion.div>

        {/* Main Content Area - Expandable Cards */}
        {services.length > 0 ? (
          <>
            {Array.from({ length: serviceBatches }, (_, index) => index + 1)
              ?.filter((number) => {
                if (number === 1) {
                  return true;
                }
                if (!showAllServices) {
                  return false;
                }
                return true;
              })
              .map((item) => {
                const startIndex = (item - 1) * 5;

                return (
                  <ServiceOneRow
                    key={item}
                    item={item}
                    services={services}
                    startIndex={startIndex}
                  />
                );
              })}
          </>
        ) : (
          <div className="text-center py-12">
            <p className="text-text-dark">
              No services available at the moment.
            </p>
          </div>
        )}

        {/* Bottom CTA Button - Only show if there are more than 4 services */}
        {services.length > 4 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewportOptions}
            transition={{ duration: 0.6 }}
            className="text-center relative block margin-bottom-10"
          >
            <hr height="1px" className="border-border-light mt-18 mb-8" />
            <ThemeButton
              variant="outline"
              size="lg"
              isArrowIcon={false}
              onClick={() => setShowAllServices(!showAllServices)}
              className="border-2  absolute left-1/2 bottom-1/2 -translate-x-1/2 translate-y-[50%] bg-bg-cream"
            >
              {showAllServices ? "Show Less" : "View All Services"}
            </ThemeButton>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default ServiceSection;

const ServiceOneRow = ({ services, startIndex, item }) => {
  const [expandedIndex, setExpandedIndex] = useState(0);
  return (
    <div key={item} className="grid grid-cols-1 lg:grid-cols-7 gap-4 mb-12">
      {services.slice(startIndex, startIndex + 5).map((service, index) => {
        const isExpanded = expandedIndex === index;

        return (
          <motion.div
            key={service.id || index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewportOptions}
            transition={{ duration: 0.6 + index * 0.1 }}
            onHoverStart={() => setExpandedIndex(index)}
            className={`relative rounded-3xl overflow-hidden shadow-lg cursor-pointer transition-all duration-500 ${
              isExpanded ? "lg:col-span-3 bg-white" : "lg:col-span-1 bg-white"
            }`}
          >
            <AnimatePresence mode="popLayout">
              {isExpanded ? (
                // Expanded View - Full Content
                <motion.div
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0, opacity: 0.5 }}
                  transition={{ duration: 0.8 }}
                  className="p-6 sm:p-8"
                  key={"expanded"}
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
                    {/* Image */}
                    <div className="relative h-64 md:h-80 rounded-2xl overflow-hidden">
                      <Image
                        src={service.image}
                        alt={service.title}
                        fill
                        className="object-contain"
                      />
                    </div>

                    {/* Content */}
                    <div className="space-y-4">
                      <h3 className="text-2xl sm:text-3xl font-bold text-[#1a1a2e]">
                        {service.title}
                      </h3>
                      <p className="text-base text-text-dark leading-relaxed">
                        {service.description}
                      </p>

                      {/* Features List */}
                      <ul className="space-y-3">
                        {service.features.map((feature, featureIndex) => (
                          <motion.li
                            key={featureIndex}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{
                              duration: 0.5,
                              delay: 0.3 + featureIndex * 0.1,
                            }}
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
                        <ThemeButton
                          variant="primary"
                          size="md"
                          isArrowIcon={true}
                          onClick={() =>
                            window.open(
                              process.env.NEXT_PUBLIC_PATIENT_WEB_URL,
                              "_blank"
                            )
                          }
                        >
                          Book an Appointment
                        </ThemeButton>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ) : (
                // Collapsed View - Minimal Content
                <motion.div
                  initial={{ scale: 0, opacity: 0.5 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0, opacity: 0.5 }}
                  transition={{ duration: 0.8 }}
                  className="relative h-48 lg:h-full min-h-[200px]"
                  key={"collapsed"}
                >
                  {/* Dark Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/80 z-10" />

                  {/* Image */}
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-110"
                  />

                  {/* Content */}
                  <div className="absolute inset-0 z-20 flex flex-col justify-center items-center p-4">
                    <div className="z-30 bg-white rounded-lg p-2 shadow-md mb-3">
                      <ArrowIcon color="var(--primary)" />
                    </div>
                    <h4 className="text-white  vertical-text text-lg font-semibold text-center">
                      {service.title}
                    </h4>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        );
      })}
    </div>
  );
};
