import React, { useContext } from "react";
import { Map, Overlay, ZoomControl } from "pigeon-maps";
import { useState } from "react";
import { Context } from "../../context/Context";
import { maptiler } from "pigeon-maps/providers";
import MapCard from "./MapCard";
import Header from "../header/Header";
import { AiOutlineUnorderedList } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

export default function MyMap({ height }) {
  const { state } = useContext(Context);
  const maptilerProvider = maptiler("f6khKvLbJmOPDaKF2XFD", "streets");
  const [center] = useState([47.41, 13.6997]);

  const [showCard, setShowCard] = useState(false);
  const [item, setItem] = useState();

  const navigate = useNavigate();

  return (
    <div style={{ position: "relative" }}>
      <Header />
      <Map
        provider={maptilerProvider}
        dprs={[1, 2]}
        height={height}
        defaultCenter={center}
        defaultZoom={5}
      >
        {state?.localData?.map((item, idx) => (
          <Overlay
            key={idx}
            width={25}
            anchor={[+item?.latlong[0], +item?.latlong[1]]}
          >
            <div
              onClick={() => {
                setItem(item);
                setShowCard(true);
              }}
              key={idx}
              className={`bg-white
            px-3  py-[1.5px] rounded-full text-[15px] font-bold
              text-gray-700            `}
            >
              <p>€ {item.price} </p>
            </div>
          </Overlay>
        ))}
        <Overlay anchor={[+item?.latlong[0], +item?.latlong[1]]}>
          {showCard && (
            <div className="relative">
              <p
                style={{
                  width: "5.5rem",
                  padding: "0.5rem",
                  position: "absolute",
                  top: "0rem",
                  left: "0rem",
                  textAlign: "center",
                }}
                className={`${
                  showCard ? "bg-black" : "bg-white"
                }  px-3  py-[1.5px] rounded-full text-[15px] font-bold  ${
                  showCard ? "text-white" : "text-gray-700"
                }`}
              >
                {" "}
                € {item.price}
              </p>
              <div
                style={{
                  position: "absolute",
                  top: "5rem",
                  left: "-14rem",
                  zIndex: "999",
                }}
              >
                <MapCard
                  showCard={showCard}
                  setShowCard={setShowCard}
                  item={item}
                />
              </div>
            </div>
          )}
        </Overlay>

        <ZoomControl />
        <button
          onClick={() => navigate("/")}
          className="bg-black px-[19px]  py-[14px] w-[137.74px]  rounded-full text-white h-[49.92px] absolute top-[calc(100vh-32.5vh)]  left-[46vw]"
        >
          <div className="flex items-center gap-3 h-[18.71px]">
            <p>Show list</p>
            <AiOutlineUnorderedList />
          </div>
        </button>
      </Map>
    </div>
  );
}
