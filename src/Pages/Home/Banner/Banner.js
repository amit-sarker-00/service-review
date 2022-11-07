import React from "react";
import "./Banner.css";
const Banner = ({ banner }) => {
  const { image, prev, next, id } = banner;
  return (
    <div id={`slide${id}`} className="carousel-item relative w-full">
      <div className="carousel-img">
        <img src={image} alt="" className="w-full rounded-xl" />
      </div>
      <div className="absolute flex justify-end transform -translate-y-1/2 left-24 top-1/4">
        <h1 className="text-6xl font-bold text-white">WILDFIRE</h1>
      </div>
      <div className="absolute flex justify-end transform -translate-y-1/2 w-2/5 left-24 top-1/2">
        <p className="text-xl text-white">
          Wild animals are important for their beauty, economic, scientific and
          survival value. It helps to maintain the ecological balance of nature
          and...
        </p>
      </div>
      <div className="absolute flex justify-start transform -translate-y-1/2 w-2/5 left-24 top-3/4">
        <button className="btn btn-info mr-5">View</button>
        <button className="btn btn-outline btn-info">Details</button>
      </div>
      <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
        <a href={`#slide${prev}`} className="btn btn-circle mr-5 btn-info">
          ❮
        </a>
        <a href={`#slide${next}`} className="btn btn-circle btn-info">
          ❯
        </a>
      </div>
    </div>
  );
};

export default Banner;
