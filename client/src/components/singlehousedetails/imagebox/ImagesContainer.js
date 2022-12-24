import React from "react";

const ImagesContainer = ({ filteredHome }) => {
  return (
    <div className="w-[1120px] pt-[24px] mx-auto">
      <div className="container grid grid-cols-4 gap-4 ">
        <img
          style={{
            borderTopLeftRadius: "15px",
            borderBottomLeftRadius: "15px",
          }}
          src={filteredHome?.images[0]}
          alt="1"
          className="w-full h-[497px] col-span-2 row-span-2 rounded shadow-sm  lg:col-start-1 lg:row-start-1"
        />

        <img className="w-full h-full" src={filteredHome?.images[1]} alt="2" />
        <img
          style={{
            borderTopRightRadius: "15px",
          }}
          className="w-full h-full"
          src={filteredHome?.images[2]}
          alt="3"
        />
        <img className="w-full h-full" src={filteredHome?.images[3]} alt="4" />
        <img
          style={{
            borderBottomRightRadius: "15px",
          }}
          className="w-full h-full"
          src={filteredHome?.images[4]}
          alt="5"
        />
      </div>
    </div>
  );
};

export default ImagesContainer;
