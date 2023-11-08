import React from "react";
import { useInView } from "react-intersection-observer";
import SectionLayout from "./SectionLayout";
import Image from "next/image";
import StoreIcon from "./StoreIcon";
import GooglePlayIcon from "../icons/google-play-icon.svg";
import AppStoreIcon from "../icons/app-store-icon.svg";

const HeroSection = () => {
  const { ref } = useInView({ threshold: 0.2 });

  return (
    <div className="hero-section-bg pt-[161px]" id="hero">
      <SectionLayout>
        <div ref={ref} className="flex min-h-[430px] items-end" id="home">
          <div className="flex w-full flex-col justify-between sm:flex-row ">
            <div className="flex flex-1  items-center justify-center ">
              <div className="min-h-[300px] w-[80%]">
                <div className="mb-4 text-2xl font-medium text-black">
                  Let me connect your heart to beats!
                </div>
                <div className="mb-6 text-2xl font-bold">
                  SongLink music application
                </div>
                <div className="mb-8">
                  Discover a world of musical possibilities with our music
                  application, where users and songs unite in perfect harmony.
                  Explore a vast library of tracks and connect with like-minded
                  music enthusiasts from around the globe.
                </div>
                <div className=" xs:gap-2 flex sm:gap-4">
                  <StoreIcon storeName="App Store">
                    <AppStoreIcon />
                  </StoreIcon>
                  <StoreIcon storeName="Play Store">
                    <GooglePlayIcon />
                  </StoreIcon>
                </div>
              </div>
            </div>

            <div className=" flex flex-1 justify-end ">
              <div className=" h-[430px] w-[full] ">
                <Image
                  src={"/ts-half.png"}
                  width={0}
                  height={0}
                  sizes="100vw"
                  style={{ width: "auto", height: "100%" }}
                  alt="ts-half"
                />
              </div>
              {/* <div className=" z-10 h-[430px] w-[360px] bg-[url('/ts-half.png')]  bg-cover bg-center" /> */}
            </div>
          </div>
        </div>
      </SectionLayout>
    </div>
  );
};

export default HeroSection;
