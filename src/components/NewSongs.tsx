import React from "react";
import SectionLayout from "./SectionLayout";
import Card from "./Card";
import Link from "next/link";
import RippleBtn from "./RippleBtn";

const cards = new Array(15).fill("");

const NewSongs = () => {
  return (
    <div id="newsongs" className="p-8 pt-10">
      <SectionLayout>
        <div className="mb-6 flex justify-between">
          <div className="text-2xl  font-medium">New Songs</div>
          <div className="hidden xs:block">
            <Link href={"/new-songs"}>
              <RippleBtn classnames="rounded-[10px] bg-grey px-3 py-1 font-medium text-primary-light">
                More
              </RippleBtn>
            </Link>
          </div>
        </div>
        <div className="mb-[40px] grid grid-cols-3 place-items-center gap-6  lg:grid-cols-4 xl:grid-cols-5">
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

export default NewSongs;
