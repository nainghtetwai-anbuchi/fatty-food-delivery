import React, { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import SectionLayout from "./SectionLayout";

const LandingPage = () => {
  const { ref } = useInView({ threshold: 0.2 });

  return (
    <div className="hero-section-bg ">
      <SectionLayout>
        <div ref={ref} className=" min-h-[430px] " id="home ">
          <div className="mt-4 flex">
            <div className="flex flex-1  items-center justify-center ">
              <div className="w-[80%]">
                <div className="mb-8 text-5xl">Travelogue</div>
                <div className="text-xl">
                  Your best travel partner. One stop services from package tour
                  to customizeable packages{" "}
                </div>
              </div>
            </div>
            <div className="flex flex-1 justify-center">
              <div className="  h-[300px] w-[300px] bg-[url('/ts-half.png')]  bg-cover bg-center" />
            </div>
          </div>
        </div>
      </SectionLayout>
    </div>
  );
};

export default LandingPage;
