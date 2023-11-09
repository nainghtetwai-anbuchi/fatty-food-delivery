import Card from "@/components/Card";
import MainLayout from "@/components/MainLayout";
import PlayStores from "@/components/PlayStores";
import SectionComponent from "@/components/SectionComponent";
import React from "react";
import LeftArrowIcon from "../icons/left-arrow.svg";
import RightArrowIcon from "../icons/right-arrow.svg";
import RippleBtn from "@/components/RippleBtn";

const cards = new Array(5).fill("");
const cards2 = new Array(20).fill("");

const TrendingNow = () => {
  return (
    <MainLayout>
      <div className="mb-[78px] mt-6 px-8">
        <SectionComponent
          heading={
            <div className="text-2xl font-medium">Trending This Week</div>
          }
        >
          {cards.map((el, idx) => (
            <div key={idx}>
              <Card />
            </div>
          ))}
        </SectionComponent>
        <div className="underlined h-[2px] w-full"></div>
        <div className="my-[40px]">
          <PlayStores />
        </div>
        <SectionComponent
          heading={<div className="text-2xl font-medium">Trending 2023</div>}
        >
          {cards2.map((el, idx) => (
            <div key={idx}>
              <Card />
            </div>
          ))}
        </SectionComponent>
        <div className="flex justify-center sm:justify-end ">
          <div className="flex items-center justify-center gap-4">
            <RippleBtn classnames="rounded-[10px] bg-grey p-2">
              <LeftArrowIcon />
            </RippleBtn>
            <div>Page 1 of 29</div>
            <RippleBtn classnames="rounded-[10px] bg-grey p-2">
              <RightArrowIcon />
            </RippleBtn>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default TrendingNow;
