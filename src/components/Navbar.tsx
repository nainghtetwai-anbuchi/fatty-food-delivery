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
      className={`fixed left-1/2 top-0 z-50 flex  h-[97px] w-full -translate-x-1/2 items-center bg-bgdark px-4  `}
    >
      <SectionLayout>
        <div className="flex items-center justify-between">
          <div className="flex text-[32px] font-bold">
            <span className="gradient-text">Song</span>
            <span className="text-grey">Link</span>
          </div>
          <div className="flex items-center gap-4">
            <div className="relative">
              <svg
                className="absolute left-4 top-1/2 -translate-y-1/2"
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M14.7502 14.75L11.4929 11.4928M11.4929 11.4928C12.0501 10.9356 12.492 10.2741 12.7936 9.54616C13.0951 8.81819 13.2503 8.03795 13.2503 7.25C13.2503 6.46205 13.0951 5.68181 12.7936 4.95384C12.492 4.22587 12.0501 3.56442 11.4929 3.00725C10.9357 2.45009 10.2743 2.00812 9.54631 1.70658C8.81834 1.40505 8.03811 1.24985 7.25015 1.24985C6.4622 1.24985 5.68197 1.40505 4.95399 1.70658C4.22602 2.00812 3.56457 2.45009 3.0074 3.00725C1.88216 4.1325 1.25 5.65866 1.25 7.25C1.25 8.84134 1.88216 10.3675 3.0074 11.4928C4.13265 12.618 5.65881 13.2502 7.25015 13.2502C8.84149 13.2502 10.3677 12.618 11.4929 11.4928Z"
                  stroke="#D7D7D7"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>

              <input
                style={{
                  background:
                    "linear-gradient(0deg, #5B5B5B, #5B5B5B), linear-gradient(0deg, #7B7B7B, #7B7B7B)",
                }}
                className="rounded-[10px] py-[5px] pl-12 pr-4  focus:outline-none"
                type="text"
                placeholder="Search Songs"
              />
            </div>
            <div className="h-8 w-[0.5px] bg-grey"></div>
            <div className="flex gap-1 text-grey">
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
                  d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
                />
              </svg>
              <div>Log In</div>
            </div>
          </div>
        </div>
      </SectionLayout>
    </div>
  );
};

export default Navbar;
