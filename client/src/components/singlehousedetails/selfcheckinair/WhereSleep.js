import React from "react";
import { MdOutlineBedroomParent } from "react-icons/md";
import { MdOutlineBedroomChild } from "react-icons/md";

const WhereSleep = () => {
  return (
    <div className="py-[48px] border-b-2">
      <div>
        <p
          style={{ lineHeight: "26px" }}
          className="text-[22px] pb-[24px] font-[500]"
        >
          Where you'll sleep
        </p>
      </div>

      <div className="flex gap-[16px] ">
        <div className="p-[24px] border-2 rounded-[10px] w-[207.11px] h-[163px]">
          <div className="mb-[16px] flex gap-2 items-center">
            <MdOutlineBedroomParent className="text-[2.5rem]" />
            <MdOutlineBedroomChild className="text-[2.5rem]" />
          </div>
          <p className="mb-[8px] font-[500]">Bedroom 1</p>
          <p className="text-[14px] font-[300]">1 double bed, 1 single bed</p>
        </div>
        <div className="p-[24px] border-2 rounded-[10px] w-[207.11px] h-[163px]">
          <div className="mb-[16px] flex gap-2 items-center">
            <MdOutlineBedroomParent className="text-[2.5rem]" />
            <MdOutlineBedroomChild className="text-[2.5rem]" />
          </div>
          <p className="mb-[8px] font-[500]">Bedroom 2</p>
          <p className="text-[14px] font-[300]">1 double bed, 1 single bed</p>
        </div>
        <div className="p-[24px] border-2 rounded-[10px] w-[207.11px] h-[163px]">
          <div className="mb-[16px] flex gap-2 items-center">
            <MdOutlineBedroomParent className="text-[2.5rem]" />
            <MdOutlineBedroomParent className="text-[2.5rem]" />
            <MdOutlineBedroomChild className="text-[2.5rem]" />
            <MdOutlineBedroomChild className="text-[2.5rem]" />
          </div>
          <p className="mb-[8px] font-[500]">Bedroom 3</p>
          <p className="text-[14px] font-[300]">2 double beds, 2 single beds</p>
        </div>
      </div>
    </div>
  );
};

export default WhereSleep;
