import React from "react";
import { BsFillStarFill } from "react-icons/bs";
import { BsDot } from "react-icons/bs";
const Reviews = ({ filteredHome }) => {
  return (
    <div className="py-[48px]">
      <div className="flex items-center text-[22px] mb-[16px]">
        <div className="flex gap-2 items-center">
          <BsFillStarFill />
          <p className="flex items-center justify-center font-[500]">
            {filteredHome?.rating}
          </p>
        </div>
        <div className="flex flex-row justify-center items-start">
          <BsDot />
        </div>
        <div
          className="flex gap-1 font-[500]"
          style={{ textDecoration: "underline" }}
        >
          <p>{filteredHome?.num_reviews} reviews</p>
        </div>
      </div>

      <div className="w-[1120px]">
        <img style={{ width: "1120px" }} src="/1.png" alt="1" />
      </div>

      <div className="w-[1120px] ml-[-5rem]">
        <img style={{ width: "1120px" }} src="/2.png" />
      </div>
    </div>
  );
};

export default Reviews;
