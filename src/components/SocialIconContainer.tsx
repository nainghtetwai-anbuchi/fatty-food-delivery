import React from "react";

interface Props {
  children: React.ReactNode;
  bg_color: string;
}

const SocialIconContainer = ({ children, bg_color }: Props) => {
  return (
    <div
      className="flex h-[52px] w-[52px] items-center justify-center rounded-full"
      style={{
        background: bg_color,
      }}
    >
      {children}
    </div>
  );
};

export default SocialIconContainer;
