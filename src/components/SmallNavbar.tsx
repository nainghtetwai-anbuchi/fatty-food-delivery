import React from "react";
import SectionLayout from "./SectionLayout";
import NavLink from "./NavLink";
import { useRouter } from "next/router";
import Link from "next/link";

const SmallNavbar = () => {
  const router = useRouter();
  console.log({ router });
  return (
    <div className="fixed top-0 z-10 mt-[97px] flex h-[64px] w-full items-center bg-black px-4 text-grey-dark">
      <SectionLayout>
        <div className="flex">
          {/* <div className=" flex-1 border border-red-500 sm:hidden">
            <select
              name=""
              id=""
              className="w-[90%] min-w-[110px] max-w-[200px] px-8"
            >
              <option className="" value="">
                All
              </option>
              <option value="">Trending Now</option>
              <option value="">New Songs</option>
              <option value="">Artists</option>
            </select>
          </div> */}

          <div className=" flex gap-4 text-xs xs:text-base">
            <Link href={"/"}>
              <NavLink name="All" isActive={true} />
            </Link>
            <Link href={"/trending-now"}>
              <NavLink name="Trending Now" isActive={false} />
            </Link>
            <Link href={"/new-songs"}>
              <NavLink name="New Songs" isActive={false} />
            </Link>
          </div>
        </div>
      </SectionLayout>
    </div>
  );
};

export default SmallNavbar;
