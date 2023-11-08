import React, { useEffect } from "react";
import RippleBtn from "./RippleBtn";
import SectionLayout from "./SectionLayout";
import SearchIcon from "../icons/search-icon.svg";
import UserIcon from "../icons/user.svg";
import { Tooltip } from "./Tooltip";

const Navbar = () => {
  const [activeLink, setActiveLink] = React.useState("Home");

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    const text = (e.target as HTMLElement).textContent;
    text && setActiveLink(text);
  };

  const btns = (
    <div>
      <RippleBtn classnames="  bg-transparent p-2 mb-2">Log In</RippleBtn>
      <RippleBtn classnames="  p-2 bg-grey text-black">Register</RippleBtn>
    </div>
  );

  return (
    <div
      className={`fixed left-1/2 top-0 z-40 flex  h-[97px] w-full -translate-x-1/2 items-center bg-bgdark px-4  `}
    >
      <SectionLayout>
        <div className="flex items-center justify-between">
          <div className="flex flex-1  text-[32px] font-bold">
            <span className="gradient-text">Song</span>
            <span className="text-grey">Link</span>
          </div>
          <div className="flex flex-1 items-center  justify-end gap-4 ">
            <div className=" lg:hidden">
              <SearchIcon />
            </div>
            <div className="relative hidden flex-1 lg:block">
              <div className="absolute left-4 top-1/2 -translate-y-1/2">
                <SearchIcon />
              </div>
              <input
                style={{
                  background:
                    "linear-gradient(0deg, #5B5B5B, #5B5B5B), linear-gradient(0deg, #7B7B7B, #7B7B7B)",
                }}
                className=" w-full rounded-[10px] py-3 pl-12 pr-4  focus:outline-none"
                type="text"
                placeholder="Search Songs"
              />
            </div>
            <div className="h-8 w-[0.5px] bg-grey"></div>
            <div className=" sm:hidden">
              <Tooltip message={btns}>
                <UserIcon />
              </Tooltip>
            </div>
            <RippleBtn classnames=" hidden sm:flex  items-center gap-3 bg-transparent p-2">
              <UserIcon />
              <div>Log In</div>
            </RippleBtn>
            <RippleBtn classnames="hidden sm:block bg-grey text-black px-4 py-3">
              Register
            </RippleBtn>
          </div>
        </div>
      </SectionLayout>
    </div>
  );
};

export default Navbar;
