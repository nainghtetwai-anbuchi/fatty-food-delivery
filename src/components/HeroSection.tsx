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
    <div className="hero-section-bg px-4 " id="hero">
      <SectionLayout>
        <div ref={ref} className="flex min-h-[430px] " id="home">
          <div className=" mt-auto flex w-full flex-col-reverse sm:flex-row">
            <div className="flex items-center sm:flex-1">
              <div className="w-full sm:w-[80%] ">
                <div className="mb-4 hidden text-2xl font-medium text-black sm:block">
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
                <div className=" flex xs:gap-2 sm:gap-4">
                  <StoreIcon storeName="App Store">
                    <AppStoreIcon />
                  </StoreIcon>
                  <StoreIcon storeName="Play Store">
                    <GooglePlayIcon />
                  </StoreIcon>
                </div>
              </div>
            </div>

            <div className="relative mb-6 h-[280px] sm:mb-0 sm:h-[430px] sm:flex-1">
              <Image
                src={"/ts-half.png"}
                fill
                sizes="(min-width: 808px) 50vw, 100vw"
                style={{
                  objectFit: "contain", // cover, contain, none
                }}
                alt="ts-half"
                quality={100}
              />
            </div>
            <div className="mb-4 text-2xl font-medium text-black sm:hidden">
              Let me connect your heart to beats!
            </div>
          </div>
        </div>

        {/* <div className="flex h-full w-full flex-col justify-between border border-green-500 sm:flex-row ">
            <div className="flex flex-1 items-center justify-center ">
              <div className="min-w-[240px] w-[80%]">
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
                <div className=" flex xs:gap-2 sm:gap-4">
                  <StoreIcon storeName="App Store">
                    <AppStoreIcon />
                  </StoreIcon>
                  <StoreIcon storeName="Play Store">
                    <GooglePlayIcon />
                  </StoreIcon>
                </div>
              </div>
            </div>
            <div className="flex-1 self-stretch"></div>

            <div className=" flex flex-1 border border-blue-700 ">
              <div className=" relative  w-full ">
                <Image
                  src={"/ts-half.png"}
                  fill
                  sizes="(min-width: 808px) 50vw, 100vw"
                  style={{
                    objectFit: "contain", // cover, contain, none
                  }}
                  alt="ts-half"
                />
              </div>
            </div>
          </div> 
        </div>*/}
      </SectionLayout>
    </div>
  );
};

export default HeroSection;
