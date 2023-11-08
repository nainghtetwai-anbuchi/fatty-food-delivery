import React from "react";
import SectionLayout from "./SectionLayout";
import StoreIcon from "./StoreIcon";
import GooglePlayIcon from "../icons/google-play-icon.svg";
import AppStoreIcon from "../icons/app-store-icon.svg";
const PlayStores = () => {
  return (
    <>
      <SectionLayout>
        <div className="flex justify-between bg-black p-8">
          <div>
            <div className="mb-2 font-medium">
              Best Ways To Listen To Music!
            </div>
            <div className="text-grey-dark">
              Don't forget to install
              <span className="mx-2 text-primary-dark">
                SongLink Music Application{" "}
              </span>{" "}
              on your mobile phone.
            </div>
          </div>
          <div className="flex gap-4">
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
