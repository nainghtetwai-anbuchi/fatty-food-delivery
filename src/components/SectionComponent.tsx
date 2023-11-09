import React from "react";
import SectionLayout from "./SectionLayout";

interface Props {
  heading: React.ReactNode;
  children: React.ReactNode;
}

const SectionComponent = ({ children, heading }: Props) => {
  return (
    <SectionLayout>
      <div className="mb-6">{heading}</div>
      <div className="mb-[40px] grid grid-cols-1 place-items-center gap-6 gap-y-8 xs:grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
        {children}
      </div>
      {/* <div className="underlined h-[2px] w-full"></div> */}
    </SectionLayout>
  );
};

export default SectionComponent;
