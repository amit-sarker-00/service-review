import React from "react";
import { useLoaderData } from "react-router-dom";
import useTitle from "../../Hooks/useTitle";
import ServicesData from "../ServicesData/ServicesData";

const Services = () => {
  useTitle("Services");
  const services = useLoaderData();
  return (
    <div>
      <div>
        <h1 className="text-center text-xl md:text-3xl lg:text-5xl mt-6">
          MY SERVICES
        </h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 my-20 lg:grid-cols-3 gap-3 max-w-screen-xl	mx-auto">
        {services.map((sdata) => (
          <ServicesData key={sdata._id} sdata={sdata}></ServicesData>
        ))}
      </div>
    </div>
  );
};

export default Services;
