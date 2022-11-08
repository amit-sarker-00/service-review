import React, { useEffect, useState } from "react";
import Latest from "./Latest";

const Latests = () => {
  const [latests, setLatests] = useState([]);
  useEffect(() => {
    fetch("latest.json")
      .then((res) => res.json())
      .then((data) => {
        setLatests(data);
      });
  }, []);
  return (
    <div>
      <div className="text-center my-20">
        <p className="text-red-500 font-bold">latest</p>
        <h1 className="text-xl md:text-3xl lg:text-5xl font-bold my-3">
          MY LATEST SHOTS
        </h1>
        <small>
          A photograph is a gift of science which is always close to heart.
          <br /> Because it contains memories of people near &far.
        </small>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 my-20">
        {latests.map((latest) => (
          <Latest key={latest.id} latest={latest}></Latest>
        ))}
      </div>
    </div>
  );
};

export default Latests;
