import Image from "next/image";
import React from "react";
import PlayIcon from "../icons/play-button.svg";

const Card = () => {
  return (
    <div className="relative flex flex-col items-center ">
      <div className="absolute right-4 top-4 flex h-8 w-8 cursor-pointer items-center justify-center rounded-full border border-primary-light bg-[#1a1a1a]">
        <PlayIcon />
      </div>
      <img
        src={"/ed-sheerean.png"}
        className="mb-3 max-h-[80%] w-full object-cover"
      />
      <div className="mb-2 text-center font-medium text-primary-dark">
        Shape Of You
      </div>
      <div className="text-center text-grey ">Ed Sheeran</div>
    </div>
  );
};

export default Card;
