"use client";

import ThemeButton from "@/components/ui/ThemeButton";
import { motion } from "framer-motion";
import Image from "next/image";
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

const TestimonialSection = () => {
  const testimonials = [
    {
      id: 1,
      text: "Their support and compassion truly stand out. I'm incredibly thankful for the personalized care that brought back my comfort, confidence, and well-being.",
      name: "David Lee",
      role: "Rehabilitation Program Patient",
      image: "/images/Hero/randomUser1.png",
    },
    {
      id: 2,
      text: "Their support and compassion truly stand out. I'm incredibly thankful for the personalized care that brought back my comfort, confidence, and well-being.",
      name: "Maria Gonzalez",
      role: "Rehabilitation Program Patient",
      image: "/images/Hero/randomUser2.png",
    },
    {
      id: 3,
      text: "Their support and compassion truly stand out. I'm incredibly thankful for the personalized care that brought back my comfort, confidence, and well-being.",
      name: "Sarah Johnson",
      role: "Rehabilitation Program Patient",
      image: "/images/Hero/randomUser3.png",
    },
    {
      id: 4,
      text: "Their support and compassion truly stand out. I'm incredibly thankful for the personalized care that brought back my comfort, confidence, and well-being.",
      name: "Michael Chen",
      role: "Rehabilitation Program Patient",
      image: "/images/Hero/randomUser4.png",
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
        ease: "easeOut",
      },
    },
  };

  // Quote Icon Component
  const QuoteIcon = () => (
    <svg
      width="80"
      height="80"
      viewBox="0 0 80 80"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="text-primary"
    >
      <path
        d="M10 18C10 10.268 16.268 4 24 4H30C37.732 4 44 10.268 44 18V38C44 45.732 37.732 52 30 52H22C21.4477 52 21 52.4477 21 53V66C21 67.1046 20.1046 68 19 68H12C10.8954 68 10 67.1046 10 66V18Z"
        fill="currentColor"
      />

      <path
        d="M46 18C46 10.268 52.268 4 60 4H66C73.732 4 80 10.268 80 18V38C80 45.732 73.732 52 66 52H58C57.4477 52 57 52.4477 57 53V66C57 67.1046 56.1046 68 55 68H48C46.8954 68 46 67.1046 46 66V18Z"
        fill="currentColor"
      />
    </svg>
  );

  return (
    <section className="relative py-16 sm:py-20 lg:py-24  overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Section - Testimonial Cards */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOptions}
            className="relative"
          >
            <Swiper
              modules={[Pagination, Autoplay]}
              spaceBetween={20}
              slidesPerView={1}
              pagination={{
                clickable: true,
                bulletActiveClass: "swiper-pagination-bullet-active-custom",
              }}
              autoplay={{
                delay: 5000,
                disableOnInteraction: false,
              }}
              breakpoints={{
                640: {
                  slidesPerView: 2,
                  spaceBetween: 20,
                },
              }}
              className="testimonial-swiper"
            >
              {testimonials.map((testimonial) => (
                <SwiperSlide key={testimonial.id}>
                  <motion.div
                    variants={itemVariants}
                    className="bg-bg-cream rounded-3xl p-6 sm:p-8 h-full shadow-lg"
                  >
                    {/* Quote Icon */}
                    <div className="mb-6">
                      <QuoteIcon />
                    </div>

                    {/* Testimonial Text */}
                    <p className="text-base text-text-dark leading-relaxed mb-6">
                      {testimonial.text}
                    </p>

                    {/* Profile Section */}
                    <div className="flex items-center gap-4">
                      <div className="relative w-16 h-16 rounded-full overflow-hidden border-2 border-white shadow-md">
                        <Image
                          src={testimonial.image}
                          alt={testimonial.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-[#1a1a2e]">
                          {testimonial.name}
                        </h4>
                        <p className="text-sm text-primary">
                          {testimonial.role}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                </SwiperSlide>
              ))}
            </Swiper>

            {/* Custom Pagination Styles */}
            <style jsx global>{`
              .testimonial-swiper .swiper-pagination {
                position: relative;
                margin-top: 2rem;
                text-align: center;
              }
              .testimonial-swiper .swiper-pagination-bullet {
                width: 12px;
                height: 12px;
                background: #e0e0e0;
                opacity: 1;
                margin: 0 4px;
                transition: all 0.3s;
              }
              .testimonial-swiper .swiper-pagination-bullet-active {
                background: var(--primary);
                width: 32px;
                border-radius: 6px;
              }
            `}</style>
          </motion.div>

          {/* Right Section - Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOptions}
            className="space-y-8"
          >
            {/* Testimonials Label */}
            <motion.div variants={itemVariants}>
              <span className="text-sm font-semibold text-primary uppercase tracking-wide">
                Testimonials
              </span>
            </motion.div>

            {/* Main Heading */}
            <motion.h2
              variants={itemVariants}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#1a1a2e] leading-tight"
            >
              Trusted by Patients
            </motion.h2>

            {/* Descriptive Paragraph */}
            <motion.p
              variants={itemVariants}
              className="text-lg text-text-dark leading-relaxed max-w-xl"
            >
              Our patients share real stories of care, recovery, and trust —
              each one reflecting our dedication to compassionate service and
              exceptional medical excellence.
            </motion.p>

            {/* CTA Button */}
            <motion.div variants={itemVariants} className="pt-4">
              <ThemeButton variant="primary" size="lg" isArrowIcon={false}>
                View More
              </ThemeButton>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
