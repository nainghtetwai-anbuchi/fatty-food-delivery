import React from "react";
import RippleBtn from "./RippleBtn";

const Navbar = () => {
  const [activeLink, setActiveLink] = React.useState("Home");

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    const text = (e.target as HTMLElement).textContent;
    text && setActiveLink(text);
  };

  return (
    <div className="fixed left-1/2 top-0 z-50 flex h-[56px] w-full max-w-[1320px] -translate-x-1/2 items-center bg-slate-200 px-4 ">
      <div className="flex gap-4 text-primary-main">
        <div>Logo</div>
        <div className="font-semibold uppercase">Fatty Food Delivery</div>
      </div>
      <div className="flex flex-1 items-center justify-end  ">
        <div className=" hidden flex-1 justify-evenly md:flex ">
          <a
            href="#home"
            className={`${activeLink === "Home" ? "active" : ""}`}
            onClick={handleClick}
          >
            Home
          </a>
          <a
            className={`${activeLink === "Promotion" ? "active" : ""}`}
            onClick={handleClick}
            href="#promotion"
          >
            Promotion
          </a>
          <a
            className={`${activeLink === "Services" ? "active" : ""}`}
            onClick={handleClick}
            href="#services"
          >
            Services
          </a>
          <a
            className={`${activeLink === "News" ? "active" : ""}`}
            onClick={handleClick}
            href="#news"
          >
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
