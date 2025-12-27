"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { motion, useInView, useMotionValue, useSpring } from "framer-motion";

const SuccessCountDown = () => {
  const profileImages = [
    "/images/Hero/randomUser1.png",
    "/images/Hero/randomUser2.png",
    "/images/Hero/randomUser3.png",
    "/images/Hero/randomUser4.png",
  ];

  const statistics = [
    { number: 250, suffix: "+", label: "Specialist" },
    { number: 45, suffix: "K", label: "Happy Patient" },
    { number: 150, suffix: "+", label: "Winning Awards" },
  ];

  const viewportOptions = {
    once: true,
    amount: 0.2,
  };

  // Counter component for animated numbers
  const Counter = ({ value, suffix, delay = 0, label }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.5 });
    const motionValue = useMotionValue(0);
    const springValue = useSpring(motionValue, {
      damping: 60,
      stiffness: 100,
    });
    const [displayValue, setDisplayValue] = React.useState(0);

    useEffect(() => {
      if (isInView) {
        const timer = setTimeout(() => {
          motionValue.set(value);
        }, delay * 1000);

        return () => clearTimeout(timer);
      }
    }, [motionValue, isInView, value, delay]);

    useEffect(() => {
      const unsubscribe = springValue.on("change", (latest) => {
        setDisplayValue(Math.round(latest));
      });

      return () => unsubscribe();
    }, [springValue]);

    return (
      <motion.div
        ref={ref}
        initial={{ opacity: 0, x: 30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={viewportOptions}
        transition={{ duration: 0.6, delay: 0.2 + delay }}
        className="text-center lg:text-left"
      >
        <div className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-2">
          {displayValue}
          {suffix}
        </div>
        <div className="text-lg sm:text-xl font-semibold text-primary">
          {label}
        </div>
      </motion.div>
    );
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
        ease: "easeOut",
      },
    },
  };

  return (
    <section className="relative py-16  overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOptions}
          className="relative rounded-3xl overflow-hidden"
        >
          {/* Background Image with Overlay */}
          <div className="absolute inset-0">
            <Image
              src="/images/HomeCountDown/BackGroundImg.png"
              alt="Background"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0  backdrop-blur-sm" />
          </div>

          {/* Content */}
          <div className="relative z-10 p-8 sm:p-12 lg:p-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              {/* Left Section - Appointment Booking */}
              <motion.div variants={itemVariants} className="space-y-6 flex flex-col justify-center  md:justify-start">
                {/* Profile Images */}
                <div className="flex items-center -space-x-3 mb-4">
                  {profileImages.map((img, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={viewportOptions}
                      transition={{
                        delay: 0.3 + index * 0.1,
                        type: "spring",
                        stiffness: 200,
                      }}
                      whileHover={{ scale: 1.1, zIndex: 10 }}
                      className="relative w-12 h-12 rounded-full border-4 border-white overflow-hidden shadow-lg"
                    >
                      <Image
                        src={img}
                        alt={`Patient ${index + 1}`}
                        fill
                        className="object-cover"
                      />
                    </motion.div>
                  ))}
                </div>

                {/* Appointment Text */}
                <p className="text-white text-lg sm:text-xl font-medium">
                  500+ Appointment Booking Confirm for this Week
                </p>
              </motion.div>

               {/* Right Section - Statistics */}
               <motion.div variants={itemVariants} className="flex flex-col md:flex-row gap-8">
                 {statistics.map((stat, index) => (
                   <Counter
                     key={index}
                     value={stat.number}
                     suffix={stat.suffix}
                     label={stat.label}
                     delay={index * 0.1}
                   />
                 ))}
               </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SuccessCountDown;
