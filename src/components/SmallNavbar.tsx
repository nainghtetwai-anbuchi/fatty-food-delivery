import React from "react";
import MainLayout from "./MainLayout";
import SectionLayout from "./SectionLayout";
import NavLink from "./NavLink";

const SmallNavbar = () => {
  return (
    <div className="text-grey-dark mt-[97px] flex h-[64px] items-center bg-black">
      <SectionLayout>
        <div className="flex ">
          <div className="flex gap-4">
            <NavLink name="All" isActive={true} />
            <NavLink name="Trending Now" isActive={false} />
            <NavLink name="New Songs" isActive={false} />
            <NavLink name="Artists" isActive={false} />
            <NavLink name="Albums" isActive={false} />
          </div>
          <div className="text-grey ml-auto flex items-center justify-center gap-2 font-semibold">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="h-6 w-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
              />
            </svg>
            <span>My Favourites</span>
          </div>
        </div>
      </SectionLayout>
    </div>
  );
};

export default SmallNavbar;
