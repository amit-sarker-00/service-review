import React from "react";
import Collection from "../Collection/Collection";
import Latests from "../Latests/Latests";
import Slide from "../Slide/Slide";

const Home = () => {
  return (
    <div>
      <Slide></Slide>
      <Collection></Collection>
      <Latests></Latests>
    </div>
  );
};

export default Home;
