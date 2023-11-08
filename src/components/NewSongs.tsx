import React from "react";
import SectionLayout from "./SectionLayout";
import Card from "./Card";

const cards = new Array(5).fill("");

const NewSongs = () => {
  return (
    <div id="newsongs" className="p-10">
      <SectionLayout>
        <div className="text2xl mb-6 font-medium">New Songs</div>
        <div className="xs:grid-cols-2 mb-[40px] grid grid-cols-1 place-items-center gap-6 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
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

export default NewSongs;
