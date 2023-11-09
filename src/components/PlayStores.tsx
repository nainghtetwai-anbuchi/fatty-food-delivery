import React from "react";
import SectionLayout from "./SectionLayout";
import StoreIcon from "./StoreIcon";
import GooglePlayIcon from "../icons/google-play-icon.svg";
import AppStoreIcon from "../icons/app-store-icon.svg";
const PlayStores = () => {
  return (
    <>
      <SectionLayout>
        <div className="flex flex-col items-center justify-between gap-6 rounded-[10px] bg-black p-8 md:flex-row">
          <div>
            <div className="mb-2 font-medium">
              Best Ways To Listen To Music!
            </div>
            <div className="text-grey-dark">
              Don't forget to install
              <span className="mx-1 text-primary-dark">
                SongLink Music Application{" "}
              </span>{" "}
              on your mobile phone.
            </div>
          </div>
          <div className=" flex  flex-col items-center justify-center gap-2  sm:flex-row sm:justify-start sm:gap-4">
            <StoreIcon storeName="App Store">
              <AppStoreIcon />
            </StoreIcon>
            <StoreIcon storeName="Play Store">
              <GooglePlayIcon />
            </StoreIcon>
          </div>
        </div>
      </SectionLayout>
    </>
  );
};

export default PlayStores;
