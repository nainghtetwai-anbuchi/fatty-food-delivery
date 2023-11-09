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
  return (
    <MainLayout>
      <HeroSection />
      <TrendingNow />
      <NewSongs />
    </MainLayout>
  );
}
