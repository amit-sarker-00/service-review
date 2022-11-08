import React from "react";
import CountUp from "react-countup";
import { FaAward, FaCamera, FaHeart, FaJenkins } from "react-icons/fa";

const Count = () => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 items-center justify-center mb-20 border py-10 shadow">
      <div className="mx-auto ">
        <FaCamera className=" text-2xl md:text-4xl lg:text-7xl"></FaCamera>
        <div className="flex gap-1 items-center ">
          <CountUp
            end={3}
            duration={2}
            className="text-2xl md:text-4xl lg:text-6xl font-bold"
          />
          <h1 className="text-2xl md:text-4xl lg:text-6xl font-bold">K</h1>
        </div>
        <p>WILD SHOTS</p>
      </div>
      <div>
        <FaHeart className="text-2xl md:text-4xl lg:text-7xl"></FaHeart>
        <div className="flex gap-1 items-center ">
          <CountUp
            end={7}
            duration={4}
            className="text-2xl md:text-4xl lg:text-6xl font-bold"
          />
          <h1 className="text-6xl font-bold">K</h1>
        </div>
        <p>WEDDING SHOTS</p>
      </div>
      <div>
        <FaJenkins className="text-2xl md:text-4xl lg:text-7xl"></FaJenkins>
        <div className="flex gap-1 items-center ">
          <CountUp
            end={9}
            duration={4}
            className="text-2xl md:text-4xl lg:text-6xl font-bold"
          />
          <h1 className="text-6xl font-bold">K</h1>
        </div>
        <p>FAMILY SHOTS</p>
      </div>
      <div>
        <FaAward className="text-2xl md:text-4xl lg:text-7xl "></FaAward>
        <div className="flex gap-1 items-center ">
          <CountUp
            end={30}
            duration={4}
            className="text-2xl md:text-4xl lg:text-6xl font-bold"
          />
        </div>
        <p>AWARD OWN</p>
      </div>
    </div>
  );
};

export default Count;
