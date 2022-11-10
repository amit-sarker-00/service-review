import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ServiceCollection from "./ServiceCollection";

const Collection = () => {
  const [datas, setDatas] = useState([]);
  useEffect(() => {
    fetch(
      "https://b6a11-service-review-server-side-amit-sarker-00.vercel.app/homeService"
    )
      .then((res) => res.json())
      .then((data) => {
        setDatas(data);
      });
  }, []);
  return (
    <div className="my-20">
      <div className="text-center my-20">
        <p className=" text-red-500 font-bold "> services</p>
        <h1 className="text-xl md:text-3xl lg:text-5xl font-bold my-3">
          MY Services Type
        </h1>
        <small>
          A community service essay is an essay that describes the volunteer
          work
          <br /> you did and the impact it had on you and your community.
        </small>
      </div>
      <div className="grid grid-cols-1 mb-20 md:grid-cols-2 lg:grid-cols-3 gap-3">
        {datas.map((data) => (
          <ServiceCollection key={data._id} data={data}></ServiceCollection>
        ))}
      </div>
      <div className="text-center">
        <button className="btn rounded-none">
          <Link to="/services">View All</Link>
        </button>
      </div>
    </div>
  );
};

export default Collection;
