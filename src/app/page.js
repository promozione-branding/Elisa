import About from "@/Components/About";
import Categories from "@/Components/Categories";
import ContactCTA from "@/Components/ContactCTA";
import FAQSection from "@/Components/FAQSection";
import Footer from "@/Components/Footer";
import Hero from "@/Components/Hero";
import Industries from "@/Components/Industry";
import Navbaar from "@/Components/Navbaar";
import Products from "@/Components/Products";
import StatsSection from "@/Components/StatsSection";
import Testimonials from "@/Components/Testimonials";
import WhyChooseUs from "@/Components/WhyChoosus";
import Image from "next/image";

export default function Home() {
  return (
    <>
    <Navbaar/>
    <Hero/>
    <About/>
    <Products/>
     <StatsSection/>
     <Categories/> 
<WhyChooseUs/>
    <Industries/>
    <Testimonials/>
     <FAQSection/>
     <ContactCTA/>
    <Footer/>
    </>
  );
}



