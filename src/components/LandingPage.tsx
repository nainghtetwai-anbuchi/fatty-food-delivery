import React, { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import SectionLayout from "./SectionLayout";
import Image from "next/image";
import StoreIcon from "./StoreIcon";

const LandingPage = () => {
  const { ref } = useInView({ threshold: 0.2 });

  return (
    <div className="hero-section-bg ">
      <SectionLayout>
        <div ref={ref} className=" flex min-h-[430px] items-end " id="home">
          <div className="flex w-full justify-between ">
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
                <div className=" flex gap-4">
                  <StoreIcon storeName="App Store">
                    <svg
                      width="25"
                      height="30"
                      viewBox="0 0 25 30"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M12.4987 8.62933C11.3307 8.62933 9.52269 7.30133 7.61869 7.34933C5.10669 7.38133 2.80269 8.80533 1.50669 11.0613C-1.10131 15.5893 0.834688 22.2773 3.37869 25.9573C4.62669 27.7493 6.09869 29.7653 8.05069 29.7013C9.92269 29.6213 10.6267 28.4853 12.8987 28.4853C15.1547 28.4853 15.7947 29.7013 17.7787 29.6533C19.7947 29.6213 21.0747 27.8293 22.3067 26.0213C23.7307 23.9413 24.3227 21.9253 24.3547 21.8133C24.3067 21.7973 20.4347 20.3093 20.3867 15.8293C20.3547 12.0853 23.4427 10.2933 23.5867 10.2133C21.8267 7.63733 19.1227 7.34933 18.1787 7.28533C15.7147 7.09333 13.6507 8.62933 12.4987 8.62933ZM16.6587 4.85333C17.6987 3.60533 18.3867 1.86133 18.1947 0.133333C16.7067 0.197333 14.9147 1.12533 13.8427 2.37333C12.8827 3.47733 12.0507 5.25333 12.2747 6.94933C13.9227 7.07733 15.6187 6.10133 16.6587 4.85333Z"
                        fill="#D7D7D7"
                      />
                    </svg>
                  </StoreIcon>
                  <StoreIcon storeName="Play Store">
                    <svg
                      width="24"
                      height="28"
                      viewBox="0 0 24 28"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M0.812002 0.418661L14.3893 14L0.813335 27.5813C0.571923 27.4798 0.365906 27.3092 0.22119 27.091C0.0764737 26.8727 -0.000481025 26.6165 2.26243e-06 26.3547V1.64533C0.000104461 1.38376 0.077142 1.12799 0.221524 0.909878C0.365906 0.691764 0.571254 0.520936 0.812002 0.418661ZM15.332 14.9427L18.4013 18.012L3.81867 26.456L15.332 14.9427ZM19.5973 10.6787L23.34 12.8467C23.5421 12.9639 23.7098 13.1321 23.8264 13.3345C23.9429 13.5369 24.0043 13.7664 24.0043 14C24.0043 14.2336 23.9429 14.4631 23.8264 14.6655C23.7098 14.8679 23.5421 15.0361 23.34 15.1533L19.596 17.3213L16.2747 14L19.5973 10.6787ZM3.81867 1.54399L18.4027 9.98666L15.332 13.0573L3.81867 1.54399Z"
                        fill="#D7D7D7"
                      />
                    </svg>
                  </StoreIcon>
                </div>
              </div>
            </div>

            <div className=" flex flex-1 justify-end ">
              <div className="h-[430px] w-[full] ">
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

export default LandingPage;
