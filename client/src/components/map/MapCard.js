import * as React from "react";

import Box from "@mui/joy/Box";
import Card from "@mui/joy/Card";
import Typography from "@mui/joy/Typography";

import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import Carousel from "react-material-ui-carousel";
import GeoData from "../card/Geolocation";

import { BsFillStarFill } from "react-icons/bs";

export default function ContainerResponsive({
  item,
  i,
  showCard,
  setShowCard,
}) {
  return (
    <Box sx={{ height: 288, width: 324, resize: 0 }}>
      <GeoData lat={item.latlong[0]} lng={item.latlong[1]} />
      <Card
        sx={(theme) => ({
          padding: 0,
          width: 324,
          height: 288,
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
            width: 324,
          }}
        >
          <Carousel
            interval={null}
            sx={{
              height: 210,
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
            {item?.images.map((image, i) => (
              <div
                key={i}
                style={{
                  height: "210px",
                  width: "324px",
                  zIndex: "-1",
                }}
              >
                <img
                  key={i}
                  src={image}
                  alt={i}
                  style={{
                    width: "100%",
                    height: "100%",
                    borderTopRightRadius: "15px",
                    borderTopLeftRadius: "15px",
                    zIndex: "-5",
                  }}
                />
              </div>
            ))}
          </Carousel>
        </Box>

        <Box
          sx={{
            display: "flex",
            gap: 0,

            fontSize: "15px",
            lineHeight: "21px",
            backgroundColor: "white",
            borderBottomRightRadius: "15px",
            borderBottomLeftRadius: "15px",
            padding: "16px",
          }}
        >
          <div>
            <FavoriteBorderIcon
              style={{
                color: "white",
                fill: "red",
                position: "absolute",
                right: "1.5rem",
                top: "1.5rem",
                fontSize: "2rem",
                zIndex: "999",
              }}
            />

            <div
              onClick={() => setShowCard(!showCard)}
              style={{
                backgroundColor: "gray",
                height: 24,
                width: 24,
                borderRadius: "50%",
                position: "absolute",
                left: "1.5rem",
                top: "1.5rem",
                fontSize: "2rem",
                color: "white",
                zIndex: "999",
                cursor: "pointer",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <p style={{ fontSize: "14px" }}>X</p>
            </div>

            <Typography style={{ display: "flex" }} level="h2">
              <p className="w-[24.5rem]">
                {item.city.slice(0, 15)} {item.country}{" "}
              </p>
              <div className="flex gap-2 items-center">
                <BsFillStarFill />
                <p>{item.rating}</p>
              </div>
            </Typography>

            <div className="flex items-center gap-2 ">
              <Typography style={{}} level="body2">
                € {item.price} night
              </Typography>
              <p>-</p>
              <Typography sx={{ color: "gray" }} level="body2">
                {item.date}
              </Typography>
            </div>
          </div>
        </Box>
      </Card>
    </Box>
  );
}
