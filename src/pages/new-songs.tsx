import MainLayout from "@/components/MainLayout";
import PlayStores from "@/components/PlayStores";
import RippleBtn from "@/components/RippleBtn";
import SectionComponent from "@/components/SectionComponent";
import React from "react";
import LeftArrowIcon from "../icons/left-arrow.svg";
import RightArrowIcon from "../icons/right-arrow.svg";
import Card from "@/components/Card";

const cards = new Array(5).fill("");
const cards2 = new Array(20).fill("");

const NewSongs = () => {
  return (
    <MainLayout>
      <div className="mb-[78px] mt-6 px-8">
        <SectionComponent
          heading={
            <div className="text-2xl font-medium">
              New Feelings... New Songs
            </div>
          }
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
        <div className="mt-[40px]">
          <PlayStores />
        </div>
      </div>
    </MainLayout>
  );
};

export default NewSongs;
