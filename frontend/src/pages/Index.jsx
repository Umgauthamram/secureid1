import { useEffect } from "react";
import PageTransition from "@/components/layout/PageTransition";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/home/Hero";
import Features from "@/components/home/Features";
import HowItWorks from "@/components/home/HowItWorks";
import CTA from "@/components/home/CTA";

const Index = () => {
  useEffect(() => {
    document.title = "SecureID | Decentralized Identity System";
  }, []);

  return (
    <PageTransition>
      <Navbar />
 
        <Hero />
        <Features />
        <HowItWorks />
        <CTA />
     
      <Footer />
    </PageTransition>
  );
};

export default Index;