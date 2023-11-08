import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import MainLayout from "@/components/MainLayout";
import Navbar from "@/components/Navbar";
import NewSongs from "@/components/NewSongs";
import PlayStores from "@/components/PlayStores";
import SmallNavbar from "@/components/SmallNavbar";
import TrendingNow from "@/components/TrendingNow";
import React from "react";

export default function Home() {
  // Function to handle scroll to target section
  const scrollToSection = (targetId: string) => {
    const targetSection = document.getElementById(targetId);
    const navBarHeight = 161; // Get the actual height of the navigation bar
    if (targetSection) {
      window.scrollTo({
        top: targetSection.offsetTop - navBarHeight,
        behavior: "smooth",
      });
    }
  };

  return (
    <>
      <Navbar />
      <SmallNavbar scrollToSection={scrollToSection} />
      <div className=" min-h-[100vh] pt-[161px] ">
        <HeroSection />
        <TrendingNow />
        <NewSongs />
        <div className=" h-[400px]  py-[56px] text-4xl" id="news">
          News
        </div>
        <Footer />
      </div>
    </>
  );
}
