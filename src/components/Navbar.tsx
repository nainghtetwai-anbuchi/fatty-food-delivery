import React from "react";
import RippleBtn from "./RippleBtn";

const Navbar = () => {
  return (
    <div className="mt-4 flex items-center">
      <div className="text-primary-main flex gap-4">
        <div>Logo</div>
        <div className="font-semibold uppercase">Fatty Food Delivery</div>
      </div>
      <div className="flex flex-1 items-center justify-end  ">
        <div className=" hidden flex-1 justify-evenly md:flex ">
          <div>Home</div>
          <div>Promotion</div>
          <div>Services</div>
          <div>News</div>
        </div>
        <button className="">
          <RippleBtn classnames="bg-primary-main text-white px-4 py-2 text-base  ">
            Contact Us
          </RippleBtn>
        </button>
      </div>
    </div>
  );
};

export default Navbar;
