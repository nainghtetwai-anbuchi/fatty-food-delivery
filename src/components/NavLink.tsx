import Link from "next/link";
import React from "react";

interface Props {
  name: string;
  isActive: boolean;
}

const NavLink = ({ name, isActive }: Props) => {
  return (
    <div className="flex min-w-[85px] cursor-pointer flex-col items-center gap-1">
      <div className={`${isActive && "text-primary-light"}`}>{name}</div>
      <div className={`h-[2px] w-full ${isActive && "underlined"}`}></div>
    </div>
  );
};

export default NavLink;
