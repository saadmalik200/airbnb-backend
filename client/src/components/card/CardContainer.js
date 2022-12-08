import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Context } from "../../context/Context";

import { BsMap } from "react-icons/bs";
import Card from "./Card";

const CardContainer = () => {
  const { state, login } = useContext(Context);
  const navigate = useNavigate();

  return (
    <div className="flex justify-center gap-10 mb-[10rem] flex-wrap relative">
      {state.activeIconName
        ? state.localData.map((item, i) => {
            return item.type === state.activeIconName ? (
              <div
                key={i}
                style={{ cursor: "pointer" }}
                onClick={() => navigate(`/home/${item?.id}`)}
              >
                <Card item={item} i={i} />
              </div>
            ) : (
              ""
            );
          })
        : state?.localData?.map((item, i) => (
            <div
              key={i}
              style={{ cursor: "pointer" }}
              onClick={() => navigate(`/home/${item?.id}`)}
            >
              <Card item={item} i={i} />
            </div>
          ))}

      {!login && (
        <button
          onClick={() => navigate("/map")}
          className="bg-black px-[19px]  py-[14px] w-[137.74px] z-40 rounded-full text-white h-[49.92px] fixed top-[calc(100vh-15.2vh)]"
        >
          <div className="flex items-center gap-3 h-[18.71px]">
            <p>Show map</p>
            <BsMap />
          </div>
        </button>
      )}
    </div>
  );
};

export default CardContainer;
