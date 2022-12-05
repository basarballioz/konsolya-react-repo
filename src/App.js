import React from "react";
import "./App.scss";
import Navbar from "./components/Navbar/Navbar";
import { MainCarousel } from "./components/Carousel/Carousel";

function App() {
  return (
    <>
      <Navbar />
      <MainCarousel />
    </>
  );
}

export default App;
