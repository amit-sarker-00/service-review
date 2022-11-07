import React from "react";
import "./Banner.css";
const Banner = ({ banner }) => {
  const { image, prev, next, id } = banner;
  return (
    <div id={`slide${id}`} className="carousel-item relative w-full">
      <div className="carousel-img">
        <img src={image} alt="" className="w-full" />
      </div>
      <div className="absolute flex justify-end transform -translate-y-1/2 left-24 sm:top-1/4 top-3">
        <h1 className="lg:text-6xl md:text-3xl text-lg font-bold text-white">
          WILDFIRE
        </h1>
      </div>
      <div className="absolute flex justify-end transform -translate-y-1/2 sm:left-24 text-center  top-1/3">
        <p className="md:text-xl text-sm sm:block  text-white">
          Wild animals are important for their beauty, economic, scientific
          <br /> and survival value. It helps to maintain the ecological ...
        </p>
      </div>
      <div className="absolute flex sm:block hidden justify-start transform -translate-y-1/2 w-2/5 left-24 top-1/2 ">
        <button className="btn btn-info md:mr-5">Collection</button>
        <button className="btn btn-outline btn-info">Details</button>
      </div>
      <div className="absolute flex sm:justify-end justify-center  transform -translate-y-1/2 left-5 right-5 bottom-0">
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
