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
      <div className="mb-[40px] grid  grid-cols-3 place-items-center gap-6 gap-y-8 lg:grid-cols-4 xl:grid-cols-5">
        {children}
      </div>
    </SectionLayout>
  );
};

export default SectionComponent;
