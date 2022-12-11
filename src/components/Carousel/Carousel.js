import Carousel from "react-material-ui-carousel";

function Slide(data) {
  return (
    <div className="carousel-container">
      <img
        style={{ width: "100%"}}
        src={data.item.image}
        alt={data.item.name}
      />
    </div>
  );
}

export function MainCarousel() {
  var sliders = [
    {
      name: "item-2",
      description: "Hello World!",
      image: "https://www.tbcrecruiting.com/Images/slider-img.jpg",
    },
    {
      name: "item-1",
      description: "Hello World!",
      image: "https://www.tbcrecruiting.com/Images/slider-img.jpg",
    },
  ];

  return (
    <Carousel
      fullHeightHover={false}
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
              opacity: "0.9",
            },
          },
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
          backgroundColor: "black",
          top: "calc(50% - 20px) !important",
          color: "white",
          transition: "200ms",
          cursor: "pointer",
          opacity: 0.4,
          "&:hover": {
            opacity: "0.6 !important",
          },
        },
        next: {
          right: "10px",
        },
        prev: {
          left: "10px",
        },
      }}
      navButtonsProps={{
        className: "nav-button-container",
      }}
      indicatorContainerProps={{
        className: "indicator-container",
        style: {
          position: "absolute",
          bottom: "10px",
          zIndex: "100",
        },
      }}
    >
      {sliders.map((item, i) => (
        <Slide key={i} item={item} />
      ))}
    </Carousel>
  );
}
