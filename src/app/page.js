import About from "@/Components/About";
import AboutCTA from "@/Components/AboutCTA";
import Categories from "@/Components/Categories";
import CategoryMarquee from "@/Components/CategoryMarquee";
import ContactCTA from "@/Components/ContactCTA";
import FAQSection from "@/Components/FAQSection";
import Hero from "@/Components/Hero";
import Industries from "@/Components/Industry";
import Products from "@/Components/Products";
import StatsSection from "@/Components/StatsSection";
import Testimonials from "@/Components/Testimonials";
import WhyChooseUs from "@/Components/WhyChoosus";
import Image from "next/image";

export default function Home() {
  return (
    <>
    <Hero/>
    <About/>
    <Products/>
     <StatsSection/>
    <AboutCTA/>
     <Categories/> 
<WhyChooseUs/>
 <CategoryMarquee/>
    <Industries/>
    <Testimonials/>
     <FAQSection/>
     <ContactCTA/>
      {/* <ContactPopup /> */}
    </>
  );
}



