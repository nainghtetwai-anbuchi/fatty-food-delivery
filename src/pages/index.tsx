import Footer from "@/components/Footer";
import LandingPage from "@/components/LandingPage";
import MainLayout from "@/components/MainLayout";
import Navbar from "@/components/Navbar";
import SmallNavbar from "@/components/SmallNavbar";
import React from "react";

export default function Home() {
  return (
    <>
      <Navbar />
      <SmallNavbar />
      <div className=" min-h-[100vh] ">
        <LandingPage />
        <div className=" h-[400px]  py-[56px] text-4xl" id="promotion">
          Promotion
        </div>
        <div className=" h-[400px]  py-[56px] text-4xl" id="services">
          Services
        </div>
        <div className=" h-[400px]  py-[56px] text-4xl" id="news">
          News
        </div>
        <Footer />
      </div>
    </>
  );
}
