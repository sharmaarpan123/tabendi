import Hero from "@/components/Home/Hero/Index";
import AboutUsSection from "@/components/Home/AboutUsSection/Index";
import ServiceSection from "@/components/Home/ServiceSection/Index";
import SuccessCountDown from "@/components/Home/SuccessCountDown/Index";

export default function Home() {
  return (
    <>
      <Hero />
      <AboutUsSection />
      <ServiceSection />
      <SuccessCountDown />
    </>
  );
}
