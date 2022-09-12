import React, { useEffect } from "react";
import { Hero, HomeAbout, Service, Experience, Slider } from "../components";

const Home = () => {
  return (
    <>
      <Hero />
      <HomeAbout />
      <Service />
      <Experience />
      <Slider />
    </>
  );
};

export default Home;
