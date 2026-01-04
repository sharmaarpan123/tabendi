import React from "react";
import AboutUsHeroSection from "@/components/AboutUs/AboutUsHeroSection/Index";
import AboutUsServiceSection from "@/components/AboutUs/AboutUsServiceSection/Index";
import AboutUsChooseUsSection from "@/components/AboutUs/AboutUsChooseUsSection/Index";
import SuccessCountDown from "@/components/Home/SuccessCountDown/Index";
import ServiceProcessSection from "@/components/AboutUs/ServiceProcessSection/Index";
import TestimonialSection from "@/components/Home/TestimonialSection/Index";
import {
  getHomePageData,
  getTestimonialsData,
} from "@/services/homePageService";
import DownloadAppSection from "@/components/Home/DownloadAppSection/Index";

const AboutUsPage = async () => {
  const testimonialsData = await getTestimonialsData();
  const homePageData = await getHomePageData();
  return (
    <>
      <AboutUsHeroSection />
      <AboutUsServiceSection
        categories={homePageData?.data?.categories || []}
      />
      <SuccessCountDown />
      <AboutUsChooseUsSection />
      <ServiceProcessSection />
      <TestimonialSection testimonials={testimonialsData?.data?.data || []} />
      <DownloadAppSection />
    </>
  );
};

export default AboutUsPage;
