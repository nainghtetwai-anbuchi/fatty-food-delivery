import React from "react";

interface Props {
  children: React.ReactNode;
  storeName: string;
}

const StoreIcon = ({ children, storeName }: Props) => {
  return (
    <div
      style={{
        background:
          " linear-gradient(180deg, #353535 0%, #13100F 54.17%, #13100F 100%), linear-gradient(0deg, #AE4568, #AE4568)",
        border: "1px solid #AE4568",
      }}
      className="flex h-[58px] w-[180px] items-center justify-center gap-4 rounded-[10px] "
    >
      {children}
      <div className="flex flex-col">
        <div className="text-[8px]">Available on the</div>
        <div className="font-medium">{storeName}</div>
      </div>
    </div>
  );
};

export default StoreIcon;
