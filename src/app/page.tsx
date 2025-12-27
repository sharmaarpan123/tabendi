import Hero from "@/components/Home/Hero/Index";
import AboutUsSection from "@/components/Home/AboutUsSection/Index";
import ServiceSection from "@/components/Home/ServiceSection/Index";
import SuccessCountDown from "@/components/Home/SuccessCountDown/Index";
import ContactSection from "@/components/Home/ContactSection/Index";
import TestimonialSection from "@/components/Home/TestimonialSection/Index";

export default function Home() {
  return (
    <>
      <Hero />
      <AboutUsSection />
      <ServiceSection />
      <SuccessCountDown />
      <ContactSection />
      <TestimonialSection />
    </>
  );
}
