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
          <Link href={"/trending-now"}>
            <RippleBtn classnames="rounded-[10px] bg-grey px-3 py-1 font-medium text-primary-light">
              More
            </RippleBtn>
          </Link>
        </div>
        <div className="mb-[40px] grid grid-cols-1 place-items-center gap-6 gap-y-8 xs:grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
          {cards.map((el, idx) => (
            <div key={idx}>
              <Card />
            </div>
          ))}
        </div>
        <div className="underlined h-[2px] w-full"></div>
      </SectionLayout>
    </div>
  );
};

export default TrendingNow;
