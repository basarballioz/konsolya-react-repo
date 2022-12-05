import React from "react";
import Carousel from "react-material-ui-carousel";
import { Button } from "@mui/material";

function Slide(props) {
  return (
    <div>
      <img
        style={{ width: "100%", height: "100%" }}
        src={props.item.image}
        alt={props.item.name}
      />
    </div>
  );
}

export function MainCarousel() {
  var sliders = [
    {
      name: "item-2",
      description: "Hello World!",
      image:
        "https://jssors8.azureedge.net/demos/image-slider/img/px-beach-daylight-fun-1430675-image.jpg",
    },
    {
      name: "item-1",
      description: "Hello World!",
      image:
        "https://jssors8.azureedge.net/demos/image-slider/img/px-beach-daylight-fun-1430675-image.jpg",
    },
  ];

  return (
    <Carousel
      sx={{
        buttonWrapper: {
          position: "absolute",
          height: "100%",
          backgroundColor: "transparent",
          top: "calc(50% - 70px)",
          "&:hover": {
            "& $button": {
              backgroundColor: "black",
              filter: "brightness(120%)",
              opacity: "0.4",
            },
          },
        },
        fullHeightHoverWrapper: {
          height: "100%",
          top: "0",
        },
        buttonVisible: {
          opacity: "1",
        },
        buttonHidden: {
          opacity: "0",
        },
        button: {
          margin: "0 10px",
          position: "relative",
          backgroundColor: "#007fdb",
          top: "calc(50% - 20px) !important",
          color: "white",
          fontSize: "34px",
          transition: "200ms",
          cursor: "pointer",
          opacity: 1,
          "&:hover": {
            opacity: "0.6 !important",
          },
        },
        next: {
          right: 0,
        },
        prev: {
          left: 0,
        },
      }}
    >
      {sliders.map((item, i) => (
        <Slide key={i} item={item} />
      ))}
    </Carousel>
  );
}
