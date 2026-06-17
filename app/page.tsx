import Hero from "@/components/home/Hero";
import Metrics from "@/components/home/Metrics";
import HowItWorks from "@/components/home/HowItWorks";
import LatestLoads from "@/components/home/LatestLoads";
import ProductsShowcase from "@/components/home/ProductsShowcase";
import Testimonials from "@/components/home/Testimonials";
import WhyTruckConnect from "@/components/home/WhyTruckConnect";

export default function Home() {
  return (
    <>
      <Hero />
      <Metrics />
      <HowItWorks />
      <LatestLoads />
      <ProductsShowcase />
      <Testimonials />
      <WhyTruckConnect  />
    </>
  );
}
