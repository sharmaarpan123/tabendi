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
      xmlns="http://www.w3.org/2000/svg"
      width="39"
      height="38"
      viewBox="0 0 39 38"
      fill="none"
    >
      <path
        d="M29.3212 0C32.3577 0 34.7299 1.0476 36.438 3.1429C38.146 5.3333 39 8.5714 39 12.8571C39 17.3333 38.0037 21.619 36.011 25.7143C33.9234 29.8095 30.9818 33.8571 27.1861 37.8571C27.0912 37.9524 26.9489 38 26.7591 38C26.4745 38 26.2847 37.8571 26.1898 37.5714C26 37.381 25.9526 37.1429 26.0474 36.8571C28.3248 33.8095 29.8905 30.8571 30.7445 28C31.5037 25.2381 31.8832 22.1429 31.8832 18.7143C31.8832 16.1429 31.5511 14.1429 30.8869 12.7143C30.2226 11.2857 29.3212 10 28.1825 8.8571L33.5912 7.8571C33.6861 9.4762 33.2591 10.7143 32.3102 11.5714C31.2664 12.4286 29.9379 12.8571 28.3248 12.8571C26.3321 12.8571 24.8139 12.2857 23.7701 11.1429C22.6314 10 22.062 8.4286 22.062 6.4286C22.062 4.3333 22.7263 2.7143 24.0547 1.5714C25.2883 0.5238 27.0438 0 29.3212 0ZM7.4015 0C10.438 0 12.8102 1.0476 14.5182 3.1429C16.1314 5.3333 16.938 8.5714 16.938 12.8571C16.938 17.4286 15.9416 21.7619 13.9489 25.8571C11.9562 29.9524 9.0146 33.9524 5.1241 37.8571C5.0292 37.9524 4.8869 38 4.6971 38C4.4124 38 4.2226 37.8571 4.1277 37.5714C3.938 37.381 3.8905 37.1429 3.9854 36.8571C6.2628 33.8095 7.8285 30.8571 8.6825 28C9.4416 25.2381 9.8212 22.1429 9.8212 18.7143C9.8212 16.1429 9.5365 14.0952 8.9672 12.5714C8.3029 11.1429 7.4015 9.9048 6.2628 8.8571L11.5292 7.8571C11.6241 9.4762 11.1971 10.7143 10.2482 11.5714C9.2993 12.4286 7.9708 12.8571 6.2628 12.8571C4.2701 12.8571 2.7518 12.2857 1.708 11.1429C0.569302 10 0 8.4286 0 6.4286C0 4.3333 0.6642 2.7143 1.9927 1.5714C3.2263 0.5238 5.0292 0 7.4015 0Z"
        fill="#F46700"
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
                   
                    <div className="mb-6">
                      <QuoteIcon />
                    </div>

                   
                    <p className="text-base text-text-dark leading-relaxed mb-6">
                      {testimonial.text}
                    </p>

                    
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
            {/* <motion.div variants={itemVariants} className="pt-4">
              <ThemeButton variant="primary" size="lg" isArrowIcon={false}>
                View More
              </ThemeButton>
            </motion.div> */}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
