import React from "react";
import YoutubeIcon from "../icons/youtube_icon.svg";
import FbIcon from "../icons/fb-whole-icon.svg";
import ViberIcon from "../icons/viber-icon.svg";
import TelegramIcon from "../icons/telegram-icon.svg";
import SectionLayout from "./SectionLayout";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="bg-black text-grey">
      <SectionLayout>
        <div className="flex h-[228px] flex-col items-center justify-evenly px-2 ">
          <div className="text-xs ">Follow us on</div>
          <div className="flex gap-4">
            <a href={"https://google.com"} target="_blank">
              <FbIcon />
            </a>
            <a href={"https://google.com"} target="_blank">
              <ViberIcon />
            </a>
            <a href={"https://google.com"} target="_blank">
              <TelegramIcon />
            </a>
            <a href={"https://google.com"} target="_blank">
              <YoutubeIcon />
            </a>
          </div>
          <div className="flex h-[24px] w-full max-w-[1040px] items-end justify-center gap-2 ">
            <div className=" flex h-full w-full items-center self-stretch">
              <div className="h-[0.5px] w-full bg-grey"></div>
            </div>
            <div className="whitespace-nowrap">
              Copyright &#169; All Rights reserved. World Records.com
            </div>
            <div className=" flex h-full w-full items-center self-stretch">
              <div className="h-[0.5px] w-full bg-grey"></div>
            </div>
          </div>
        </div>
      </SectionLayout>
    </div>
  );
};

export default Footer;
