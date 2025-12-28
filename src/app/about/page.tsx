import React from "react";
import AboutUsHeroSection from "@/components/AboutUs/AboutUsHeroSection/Index";
import AboutUsServiceSection from "@/components/AboutUs/AboutUsServiceSection/Index";
import AboutUsChooseUsSection from "@/components/AboutUs/AboutUsChooseUsSection/Index";
import SuccessCountDown from "@/components/Home/SuccessCountDown/Index";
import ServiceProcessSection from "@/components/AboutUs/ServiceProcessSection/Index";

const AboutUsPage = () => {
  return (
    <>
      <AboutUsHeroSection />
      <AboutUsServiceSection />
      <SuccessCountDown />
      <AboutUsChooseUsSection />
      <ServiceProcessSection />
    </>
  );
};

export default AboutUsPage;