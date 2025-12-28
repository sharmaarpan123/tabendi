import React from "react";
import AboutUsHeroSection from "@/components/AboutUs/AboutUsHeroSection/Index";
import AboutUsServiceSection from "@/components/AboutUs/AboutUsServiceSection/Index";
import AboutUsChooseUsSection from "@/components/AboutUs/AboutUsChooseUsSection/Index";
import SuccessCountDown from "@/components/Home/SuccessCountDown/Index";

const AboutUsPage = () => {
  return (
    <>
      <AboutUsHeroSection />
      <AboutUsServiceSection />
      <SuccessCountDown />
      <AboutUsChooseUsSection />
    </>
  );
};

export default AboutUsPage;