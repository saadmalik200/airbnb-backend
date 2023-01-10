import * as React from "react";

import Box from "@mui/joy/Box";
import Card from "@mui/joy/Card";
import Typography from "@mui/joy/Typography";

import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

import Carousel from "react-material-ui-carousel";
import { Context } from "../../context/Context";
import { useContext, useEffect, useState } from "react";
import GeoData from "../card/Geolocation";

import { BsFillStarFill } from "react-icons/bs";

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return (Math.random() * (max - min) + min).toFixed(2); // The maximum is exclusive and the minimum is inclusive
}

export default function ContainerResponsive({ item, i }) {
  const { state } = useContext(Context);
  const [latLng, setLatLng] = useState({
    lat: 0,
    lng: 0,
  });

  useEffect(() => {
    async function getData() {
      const response = await fetch(
        `http://api.openweathermap.org/geo/1.0/zip?zip=${Number(
          item.zipcode
        )},${item.country}&appid=b78c4b5cbf9921ae49e185f48f94ed7f`
      );
      const data = await response.json();
      console.log("here is the api result", data);
      setLatLng({ lat: data.lat, lng: data.lon });
    }
    getData();
  }, []);

  console.log(state.distance);
  return (
    <Box sx={{ height: 399.61, width: 315.39, resize: 0 }}>
      <GeoData lat={+latLng.lat} lng={+latLng.lng} />
      <Card
        sx={(theme) => ({
          padding: 0,
          width: 315.39,
          height: 399.61,
          gridColumn: "span 2",

          overflow: "hidden",

          transition: "transform 0.3s, border 0.3s",
          "&:hover": {
            borderColor: theme.vars.palette.primary.outlinedHoverBorder,
            transform: "translateY(-2px)",
          },
        })}
      >
        <Box
          sx={{
            padding: 0,
            display: "flex",
            flexDirection: "column",
            width: 315.39,
          }}
        >
          <Carousel
            interval={null}
            sx={{
              height: 299.61,
              position: "relative",
            }}
            indicatorContainerProps={{
              style: {
                marginTop: "-30px", // 5
                textAlign: "center", // 4
                zIndex: "1",
              },
            }}
            indicatorIconButtonProps={{
              style: {
                padding: "2px", // 1
                height: "2px",
                marginRight: "10px",
                width: "2px",
                color: "white", // 3
              },
            }}
          >
            <div
              style={{
                height: "299.61px",
                width: "315.39px",
                zIndex: "-1",
              }}
            >
              <img
                key={i}
                alt={i}
                src={item.img1}
                style={{
                  width: "100%",
                  height: "100%",
                  borderRadius: "15px",
                  zIndex: "-5",
                  marginBottom: "12px",
                }}
              />
            </div>
          </Carousel>
        </Box>

        <Box
          sx={{
            display: "flex",
            gap: 0,
            mt: "12px",
            fontSize: "15px",
            lineHeight: "21px",
          }}
        >
          <div>
            <FavoriteBorderIcon
              className="hover:fill-red-400"
              style={{
                color: "white",
                fill: "red",
                position: "absolute",
                right: "1.5rem",
                top: "1.5rem",
                fontSize: "2rem",
                zIndex: "5",
              }}
            />

            <Typography style={{ display: "flex" }} level="h2" fontWeight="lg">
              <p className="w-[26rem]">
                {item.city.slice(0, 15)} {item.country}{" "}
              </p>
              <div className="flex gap-2 items-center">
                <BsFillStarFill />
                <p>{getRandomInt(4, 5)}</p>
              </div>
            </Typography>
            <Typography sx={{ color: "gray" }} level="body2">
              {state.distance[i]} kilometer away
            </Typography>
            <Typography sx={{ color: "gray" }} level="body2">
              {item.firstDate}-{item.secondDate}
            </Typography>
            <Typography style={{ marginTop: 6 }} level="body2">
              <strong>€ {item.price}</strong> night
            </Typography>
          </div>
        </Box>
      </Card>
    </Box>
  );
}
