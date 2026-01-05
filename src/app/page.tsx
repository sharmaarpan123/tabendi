import Hero from "@/components/Home/Hero/Index";
import AboutUsSection from "@/components/Home/AboutUsSection/Index";
import ServiceSection from "@/components/Home/ServiceSection/Index";
import SuccessCountDown from "@/components/Home/SuccessCountDown/Index";
import ContactSection from "@/components/Home/ContactSection/Index";
import TestimonialSection from "@/components/Home/TestimonialSection/Index";
import { getHomePageData } from "@/services/homePageService";
import DownloadAppSection from "@/components/Home/DownloadAppSection/Index";
import AboutUsSpecialistSection from "@/components/AboutUs/AboutUsSpecialistSection/Index";

export default async function Home() {
  // Fetch home page data server-side
  const homePageData = await getHomePageData();

  console.log(homePageData?.data?.specialists, "homePageData-----");

  return (
    <>
      <Hero />
      <AboutUsSection />
      <ServiceSection categories={homePageData?.data?.categories || []} />
      <SuccessCountDown floatingToTop={true} />
      <AboutUsSpecialistSection specialists={homePageData?.data?.specialists || []} />
      <ContactSection />
      <TestimonialSection
        testimonials={homePageData?.data?.testimonials || []}
      />
      <DownloadAppSection />
    </>
  );
}
