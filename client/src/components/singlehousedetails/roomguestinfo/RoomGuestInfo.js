import React from "react";

import { BsDot } from "react-icons/bs";
import { FaMedal } from "react-icons/fa";

const RoomGuestInfo = ({ filteredHome }) => {
  return (
    <div className="w-[653.33px] h-[128px] pt-[48px] pb-[24px] flex justify-between">
      <div className="flex flex-col">
        <div>
          <h1
            className="text-[22px] font-[400] height-[26px]"
            style={{ lineHeight: "32px" }}
          >
            {filteredHome?.name}
          </h1>
        </div>
        <div className="flex justify-between h-[26px] ">
          <div className="text-[14px] flex items-center">
            <div className="flex gap-2 items-center">
              <p className="flex items-center justify-center">
                {filteredHome?.guests} guests
              </p>
            </div>
            <div className="flex flex-row justify-center items-start">
              <BsDot />
            </div>
            <div className="flex gap-1">
              <p>{filteredHome?.bedrooms} bedroom</p>
            </div>
            <div className="flex flex-row justify-center items-start">
              <BsDot />
            </div>
            <div className="flex items-center gap-2">
              <p>{filteredHome?.beds} bed</p>
            </div>
            <div className="flex flex-row justify-center items-start">
              <BsDot />
            </div>
            <div>
              <p>{filteredHome?.bath} baths</p>
            </div>
          </div>
        </div>
      </div>
      <div className="width-[56px]">
        {filteredHome?.hostgender === "f" ? (
          <img
            src={`https://randomuser.me/api/portraits/women/${filteredHome?.id}.jpg`}
            alt="host"
            style={{ width: "50px", height: "50px", borderRadius: "50%" }}
          />
        ) : (
          <img
            src={`https://randomuser.me/api/portraits/men/${filteredHome?.id}.jpg`}
            alt="host"
            style={{ width: "50px", height: "50px", borderRadius: "50%" }}
          />
        )}

        {filteredHome?.superhost && (
          <FaMedal
            style={{
              color: "red",
              position: "relative",
              top: "-10px",
              right: "-30px",
            }}
          />
        )}
      </div>
    </div>
  );
};

export default RoomGuestInfo;
