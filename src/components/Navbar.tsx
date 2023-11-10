import React, { useState } from "react";
import RippleBtn from "./RippleBtn";
import SectionLayout from "./SectionLayout";
import SearchIcon from "../icons/search-icon.svg";
import UserIcon from "../icons/user.svg";
import { Tooltip } from "./Tooltip";
import ChevronDown from "../icons/chevron_down_arrow.svg";
import LogoutIcon from "../icons/log_out.svg";

const Navbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [showProfile, setShowProfile] = useState(false);

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
            {isLoggedIn ? (
              <div className="relative">
                <RippleBtn classnames="bg-transparent p-2">
                  <div
                    onClick={() => setShowProfile((pre) => !pre)}
                    className="flex items-center gap-3 "
                  >
                    <div className="h-6 w-6 rounded-full bg-[url('/ed-sheerean.png')] bg-cover" />
                    <div>
                      <span>Ed Sheeran</span>'s Account
                    </div>
                    <div className={`${showProfile && "rotate-180"}`}>
                      <ChevronDown />
                    </div>
                  </div>
                </RippleBtn>
                {showProfile && (
                  <div className="absolute -bottom-6 right-0 w-[400px] translate-y-full rounded-[10px] border border-grey bg-bgdark p-6">
                    <div className="flex items-center gap-4">
                      <div className="h-16 w-16 rounded-full bg-[url('/ed-sheerean.png')] bg-cover  " />
                      <div>
                        <div className="mb-2">Ed Sheeran</div>
                        <RippleBtn classnames="bg-grey border border-primary-matte px-3 py-1 text-primary-matte font-medium">
                          Edit Profile
                        </RippleBtn>
                      </div>
                    </div>
                    <div className="underlined my-6 h-[2px] w-full"></div>
                    <RippleBtn classnames="p-2 flex gap-4 w-fit">
                      <LogoutIcon />
                      <span>Log Out</span>
                    </RippleBtn>
                  </div>
                )}
              </div>
            ) : (
              <>
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
              </>
            )}
          </div>
        </div>
      </SectionLayout>
    </div>
  );
};

export default Navbar;
