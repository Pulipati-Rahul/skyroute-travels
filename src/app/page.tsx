import Hero from "@/components/sections/Hero";
import Destinations from "@/components/sections/Destinations";
import Packages from "@/components/sections/Packages";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import Gallery from "@/components/sections/Gallery";
import Reviews from "@/components/sections/Reviews";
import Blog from "@/components/sections/Blog";
import FAQ from "@/components/sections/FAQ";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <Destinations />
      <Packages />
      <WhyChooseUs />
      <Gallery />
      <Reviews />
      <Blog />
      <FAQ />
      <Contact />
    </>
  );
}
