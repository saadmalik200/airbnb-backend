import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Context } from "../../context/Context";

import { BsMap } from "react-icons/bs";
import HostCard from "../becomehost/HostCard";
import Card from "./Card";
import axios from "axios";

const CardContainer = () => {
  const { state, login, dispatch } = useContext(Context);
  const [total, setTotal] = useState(0);
  useEffect(() => {
    async function getData() {
      const response = await axios.get("/houses/list");
      console.log("response from house list", response);
      if (response.data.success) {
        dispatch({ type: "HouseList", payload: response.data.houses });
        setTotal(response.data.total);
      }
    }

    getData();
  }, []);

  const navigate = useNavigate();

  const handleLoadMore = async () => {
    const response = await axios.get(
      "/houses/list?skip=" + state?.houses?.length
    );
    console.log("🚀 ~ getData ~ response", response);

    if (response.data.success) {
      dispatch({
        type: "addHouseList",
        payload: response.data.houses,
      });

      setTotal(response.data.total);
    }
  };

  console.log("houses", state.activeIconName);
  return (
    <div className="flex-col">
      <div className="flex justify-center gap-10 mb-[10rem] flex-wrap relative">
        {state.activeIconName
          ? state?.houses?.map((item, i) => {
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
          : state?.houses?.map((item, i) => (
              <div
                key={i}
                style={{ cursor: "pointer" }}
                onClick={() => navigate(`/home/${item?.id}`)}
              >
                <HostCard item={item} i={i} />
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
      {state?.houses?.length > 0 && state?.houses?.length < total ? (
        <button
          onClick={handleLoadMore}
          className="bg-black px-[19px]  py-[14px] w-[137.74px] z-40 rounded-full text-white h-[49.92px] float-right"
        >
          Load more
        </button>
      ) : (
        "No more products to load"
      )}
    </div>
  );
};

export default CardContainer;
