import React from "react";
import SectionLayout from "./SectionLayout";
import Card from "./Card";
import RippleBtn from "./RippleBtn";
import Link from "next/link";

const cards = new Array(10).fill("");

const TrendingNow = () => {
  return (
    <div id="trendingnow" className="p-8 pb-0">
      <SectionLayout>
        <div className="mb-6 flex justify-between">
          <div className="text-2xl  font-medium">Trending Now</div>
          <div className="hidden xs:block">
            <Link href={"/trending-now"}>
              <RippleBtn classnames="rounded-[10px] bg-grey px-3 py-1 font-medium text-primary-light">
                More
              </RippleBtn>
            </Link>
          </div>
        </div>
        <div className="mb-[40px] grid grid-cols-3 place-items-center gap-6 gap-y-8  lg:grid-cols-4 xl:grid-cols-5">
          {cards.map((el, idx) => (
            <div key={idx}>
              <Card />
            </div>
          ))}
        </div>
        <div className="mb-4 block w-fit scale-[0.8] xs:hidden">
          <Link href={"/new-songs"}>
            <RippleBtn classnames="rounded-[10px] bg-grey px-3 py-1 font-medium text-primary-light">
              More
            </RippleBtn>
          </Link>
        </div>
        <div className="underlined h-[2px] w-full"></div>
      </SectionLayout>
    </div>
  );
};

export default TrendingNow;
