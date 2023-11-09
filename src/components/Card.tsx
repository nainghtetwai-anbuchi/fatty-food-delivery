import Image from "next/image";
import React from "react";
import PlayIcon from "../icons/play-button.svg";

const Card = () => {
  return (
    <div className="relative flex flex-col items-center text-[8px] sm:text-base ">
      <div className="absolute right-0 top-0 flex h-8 w-8 scale-[0.7]  cursor-pointer items-center justify-center rounded-full border border-primary-light bg-[#1a1a1a] sm:right-2 sm:top-2 sm:scale-[1] ">
        <PlayIcon />
      </div>
      <div className="mb-3 max-h-[221px] max-w-[221px]">
        <img src={"/ed-sheerean.png"} className="h-full w-full object-cover" />
      </div>
      <div className="mb-2 self-start font-medium text-primary-dark">
        Shape Of You
      </div>
      <div className="self-start text-grey ">Ed Sheeran</div>
    </div>
  );
};

export default Card;
