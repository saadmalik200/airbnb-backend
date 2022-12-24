import React, { useContext, useEffect, useState } from "react";
import { AiOutlineWifi } from "react-icons/ai";
import { AiOutlineCar } from "react-icons/ai";
import { SlScreenDesktop } from "react-icons/sl";
import { BsWater } from "react-icons/bs";
import { MdOutlineYard } from "react-icons/md";
import { TbToolsKitchen } from "react-icons/tb";
import { GiDesk } from "react-icons/gi";
import { MdOutlinePets } from "react-icons/md";
import { MdBalcony } from "react-icons/md";
import { CiAlarmOff } from "react-icons/ci";
import { DatePickerProvider } from "@bcad1591/react-date-picker";
import FormCalender from "../form/FormCalender";
import { Context } from "../../../context/Context";

const PlaceOffers = () => {
  const [placeoffer, setPlaceOffer] = useState(false);
  const { dispatch } = useContext(Context);

  return (
    <div>
      <div className="py-[48px]">
        <h2
          style={{ lineHeight: "26px" }}
          className="pb-[24px] text-[22px] font-[500] "
        >
          What this place offers
        </h2>
        <div style={{ lineHeight: "26px" }} className="flex gap-[15rem] ">
          <div>
            <div className="flex items-center gap-[12px] pb-[16px]">
              <BsWater />
              <p>Waterfront</p>
            </div>
            <div className="flex items-center gap-[12px] pb-[16px]">
              <AiOutlineWifi />
              <p>Wifi</p>
            </div>
            <div className="flex items-center gap-[12px] pb-[16px]">
              <AiOutlineCar />
              <p>Free parking on premises</p>
            </div>

            <div className="flex items-center gap-[12px] pb-[16px]">
              <SlScreenDesktop />
              <p>TV with standard cable</p>
            </div>
            <div className="flex items-center gap-[12px] pb-[16px]">
              <MdOutlineYard />
              <p>Shared backyard</p>
            </div>
          </div>
          <div>
            <div className="flex items-center gap-[12px] pb-[16px]">
              <TbToolsKitchen />
              <p>Kitchen</p>
            </div>
            <div className="flex items-center gap-[12px] pb-[16px]">
              <GiDesk />
              <p>Dedicated workspace</p>
            </div>
            <div className="flex items-center gap-[12px] pb-[16px]">
              <MdOutlinePets />
              <p>Pets allowed</p>
            </div>

            <div className="flex items-center gap-[12px] pb-[16px]">
              <MdBalcony />
              <p>Patio or balcony</p>
            </div>
            <div className="flex items-center gap-[12px] pb-[16px]">
              <CiAlarmOff />
              <p style={{ textDecoration: "line-through" }}>
                Carbon monoxide alarm
              </p>
            </div>
          </div>
        </div>
        <div className="border-2 border-black py-[13px] rounded-[1rem] px-[23px] w-fit">
          <button>Show all 39 amenities</button>
        </div>
      </div>
      <div className="border-2 rounded-[1rem]  top-[14rem] right-[-27rem]">
        <DatePickerProvider>
          <FormCalender />
        </DatePickerProvider>
      </div>
    </div>
  );
};

export default PlaceOffers;
