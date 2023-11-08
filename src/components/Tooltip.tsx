import React, { ReactNode, useEffect, useState } from "react";

export const Tooltip = ({
  message,
  children,
}: {
  message: ReactNode;
  children: ReactNode;
}) => {
  const [show, setShow] = useState(false);

  //   useEffect(() => {
  //     let timeoutId: NodeJS.Timeout;
  //     if (show) {
  //       timeoutId = setTimeout(() => setShow(false), 1000);
  //     }
  //     return () => {
  //       if (timeoutId) {
  //         clearTimeout(timeoutId);
  //       }
  //     };
  //   }, [show]);

  return (
    <div className="group relative flex flex-col items-center">
      <span
        className="flex justify-center"
        onClick={() => setShow((prev) => !prev)}
      >
        {children}
      </span>
      <div
        className={`absolute bottom-0 right-0 flex translate-y-full flex-col items-end whitespace-nowrap  ${
          !show ? "hidden" : null
        }`}
      >
        <div className=" -mb-2 mr-2 h-4 w-4 rotate-45 bg-gray-600" />
        <div className="whitespace-no-wrap relative z-10 rounded-md bg-gray-600  p-4 text-xs leading-none text-white shadow-lg">
          {message}
        </div>
      </div>
    </div>
  );
};
