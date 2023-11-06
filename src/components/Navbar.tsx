import React, { useEffect } from "react";
import RippleBtn from "./RippleBtn";
import SectionLayout from "./SectionLayout";

const Navbar = () => {
  const [activeLink, setActiveLink] = React.useState("Home");

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    const text = (e.target as HTMLElement).textContent;
    text && setActiveLink(text);
  };

  return (
    <div
      className={`bg-bgdark fixed left-1/2 top-0 z-50  flex h-[97px] w-full -translate-x-1/2 items-center px-4  `}
    >
      <SectionLayout>
        <div className="text-[32px] font-bold">
          <span className="gradient-text">Song</span>
          <span className="text-grey">Link</span>
        </div>
      </SectionLayout>
    </div>
  );
};

export default Navbar;
