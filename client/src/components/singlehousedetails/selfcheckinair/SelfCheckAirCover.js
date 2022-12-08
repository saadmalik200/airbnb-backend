import React from "react";
import { BsFillDoorOpenFill } from "react-icons/bs";
import { BsHeart } from "react-icons/bs";
import { BsCalendarDate } from "react-icons/bs";
import { BsTranslate } from "react-icons/bs";
import { RiArrowDropRightLine } from "react-icons/ri";

const SelfCheckAirCover = ({ filteredHome }) => {
  return (
    <div className="w-[653.33px]">
      <div className="border-t-2 border-b-2 py-[32px]">
        <div className="flex gap-[16px] mb-[24px]">
          <BsFillDoorOpenFill className="text-[2rem] mt-1" />
          <div>
            <p
              className="font-[700]"
              style={{ lineHeight: "20px", marginBottom: "4px" }}
            >
              Self check-in
            </p>
            <p
              className="text-gray-500 text-[14px]"
              style={{ lineHeight: "20px" }}
            >
              Check yourself in with the smartlock.
            </p>
          </div>
        </div>
        <div className="flex gap-[1.5rem] mb-[24px]">
          <BsHeart className="text-[2rem] mt-1" />
          <div className="self-start">
            <p
              className="font-[700]"
              style={{ lineHeight: "20px", marginBottom: "4px" }}
            >
              Highly rated Host
            </p>
            <p
              className="text-gray-500 text-[14px]"
              style={{ lineHeight: "20px" }}
            >
              {filteredHome?.host} has received {filteredHome?.rating}-star
              ratings from 95% of recent guests.
            </p>
          </div>
        </div>
        <div className="flex gap-[1.5rem]  ">
          <BsCalendarDate className="text-[2rem] mt-1" />
          <div className="self-start">
            <p
              className="font-[700]"
              style={{ lineHeight: "20px", marginBottom: "4px" }}
            >
              Free cancellation before Nov 29.
            </p>
          </div>
        </div>
      </div>

      <div className="py-[32px] border-b-2">
        <div className="mb-[16px] h-[31px]">
          <img
            style={{ height: "26px" }}
            src={
              "https://a0.muscache.com/im/pictures/54e427bb-9cb7-4a81-94cf-78f19156faad.jpg"
            }
            alt=""
          />
        </div>
        <div style={{ lineHeight: "20px" }}>
          <p className="mb-[16px] font-[400]">
            Every booking includes free protection from Host cancellations,
            listing inaccuracies, and other issues like trouble checking in.
          </p>
          <p className="font-[500]" style={{ textDecoration: "underline" }}>
            Learn more
          </p>
        </div>
      </div>
      <div>
        <div className="flex gap-[16px] items-center pt-[32px]">
          <BsTranslate />
          <p>
            Some info is shown in its original language.{" "}
            <span
              className="font-[600]"
              style={{ textDecoration: "underline" }}
            >
              Translate
            </span>{" "}
          </p>
        </div>
        <div className="pt-[32px] border-b-2 pb-[48px]">
          <p>{filteredHome?.description}</p>
          <div className="flex mt-[16px] items-center gap-[2px]">
            <p className="font-[600] " style={{ textDecoration: "underline" }}>
              Show more
            </p>
            <RiArrowDropRightLine className="text-[3rem]" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SelfCheckAirCover;
