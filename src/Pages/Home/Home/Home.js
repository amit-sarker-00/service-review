import React from "react";
import useTitle from "../../../Hooks/useTitle";
import Collection from "../Collection/Collection";
import Latests from "../Latests/Latests";
import Slide from "../Slide/Slide";

const Home = () => {
  useTitle("Home");
  return (
    <div>
      <Slide></Slide>
      <Collection></Collection>
      <Latests></Latests>
    </div>
  );
};

export default Home;
