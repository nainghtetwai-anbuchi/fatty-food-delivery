import Image from "next/image";
import React from "react";

const Card = () => {
  return (
    <div className="flex flex-col items-center ">
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
