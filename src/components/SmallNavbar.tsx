import React from "react";
import SectionLayout from "./SectionLayout";
import NavLink from "./NavLink";
import HeartIcon from "../icons/heart-icon.svg";

interface Props {
  scrollToSection: (sectionId: string) => void;
}

const SmallNavbar = ({ scrollToSection }: Props) => {
  return (
    <div className=" fixed top-0 mt-[97px] flex h-[64px] w-full items-center bg-black px-4 text-grey-dark">
      <SectionLayout>
        <div className="flex">
          <div className=" flex-1 border border-red-500 sm:hidden">
            <select
              name=""
              id=""
              className="w-[90%] min-w-[110px] max-w-[200px] "
            >
              <option className="w-full" value="">
                All
              </option>
              <option className="w-full" value="">
                Trending Now
              </option>
              <option className="w-full" value="">
                Songs
              </option>
              <option className="w-full" value="">
                Artists
              </option>
            </select>
          </div>

          <div className="hidden gap-4 sm:flex">
            <div onClick={() => scrollToSection("hero")}>
              <NavLink name="All" isActive={true} />
            </div>
            <div onClick={() => scrollToSection("trendingnow")}>
              <NavLink name="Trending Now" isActive={false} />
            </div>
            <div onClick={() => scrollToSection("newsongs")}>
              <NavLink name="New Songs" isActive={false} />
            </div>
            <NavLink name="Artists" isActive={false} />
            <NavLink name="Albums" isActive={false} />
          </div>
          <div className="ml-auto  flex items-center justify-center gap-2  font-semibold text-grey">
            <div className="h-6 w-6">
              <HeartIcon />
            </div>
            <div>My Favourites</div>
          </div>
        </div>
      </SectionLayout>
    </div>
  );
};

export default SmallNavbar;
