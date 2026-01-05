"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

const AboutUsSpecialistSection = ({ specialists }) => {
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
            <div className="flex flex-col text-primary items-center space-y-2">
              <span className="text-2xl font-semibold tracking-wide">
                Professional care, personal approach
              </span>
            </div>

            <p className="text-2xl sm:text-4xl lg:text-5xl font-bold text-[#1a1a2e] leading-tight">
              Meet Our Specialist
            </p>
          </motion.div>

          {/* Specialists Swiper */}
          <motion.div variants={itemVariants}>
            <Swiper
              modules={[Pagination, Autoplay]}
              spaceBetween={30}
              slidesPerView={1}
              autoplay={{
                delay: 3000,
                disableOnInteraction: false,
              }}
              pagination={{
                clickable: true,
                bulletActiveClass: "swiper-pagination-bullet-active-custom",
              }}
              breakpoints={{
                640: {
                  slidesPerView: 1,
                  spaceBetween: 20,
                },
                1024: {
                  slidesPerView: 2,
                  spaceBetween: 30,
                },
              }}
              className="custom-swiper"
            >
              {specialists.map((specialist) => (
                <SwiperSlide key={specialist.id}>
                  <motion.div
                    variants={itemVariants}
                    className={`bg-white rounded-2xl p-6 sm:p-8 shadow-md h-full
                        hover:scale-105 hover:border-primary 
                         hover:shadow-[0_10px_40px_rgba(244,103,0,0.15)] transition-all duration-300`}
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
                    <h3 className="text-xl sm:text-2xl font-bold text-[#1a1a2e] mb-4 ">
                      {specialist.name}
                    </h3>

                    {/* Description */}
                    <p
                      dangerouslySetInnerHTML={{
                        __html: specialist.description,
                      }}
                      className="flex flex-col gap-2"
                    ></p>
                  </motion.div>
                </SwiperSlide>
              ))}
            </Swiper>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutUsSpecialistSection;
