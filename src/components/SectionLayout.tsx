import React from "react";

interface Props {
  children: React.ReactNode;
}

const SectionLayout = ({ children }: Props) => {
  return <div className="mx-auto w-full max-w-[1200px]">{children}</div>;
};

export default SectionLayout;
