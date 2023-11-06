import React from "react";
import RippleBtn from "./RippleBtn";

const Navbar = () => {
  return (
    <div className="fixed left-1/2 top-0 z-50 flex w-full max-w-[1320px] -translate-x-1/2 items-center   px-4 pt-4">
      <div className="flex gap-4 text-primary-main">
        <div>Logo</div>
        <div className="font-semibold uppercase">Fatty Food Delivery</div>
      </div>
      <div className="flex flex-1 items-center justify-end  ">
        <div className=" hidden flex-1 justify-evenly md:flex ">
          <a className="active" href="#home">
            Home
          </a>
          <a className="cursor-pointer" href="#promotion">
            Promotion
          </a>
          <a className="cursor-pointer" href="#services">
            Services
          </a>
          <a className="cursor-pointer" href="#news">
            News
          </a>
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
