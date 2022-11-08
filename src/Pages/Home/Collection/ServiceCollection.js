import { StarIcon } from "@heroicons/react/24/solid";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { PhotoProvider, PhotoView } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";
import { Link } from "react-router-dom";
const ServiceCollection = ({ data }) => {
  useEffect(() => {
    AOS.init();
  }, []);
  const { image, name, details, rating, price, _id } = data;

  return (
    <div>
      <div
        data-aos="fade-down"
        data-aos-duration="2000"
        className="card card-compact shadow-xl p-6"
      >
        <figure>
          <PhotoProvider>
            <PhotoView src={image}>
              <img src={image} className="h-64" alt="Shoes" />
            </PhotoView>
          </PhotoProvider>
        </figure>
        <div className="card-body p-0">
          <h2 className="card-title">{name}</h2>
          <div>
            <small>{details.substring(0, 100) + "..."}</small>
          </div>
          <div className="card-actions justify-between items-center">
            <p className="text-orange-600 font-bold ">Price : ${price}</p>
            <div className="flex items-center justify-center">
              <p className="">{rating}</p>
              <StarIcon className="h-4 w-5 text-warning"></StarIcon>
            </div>
          </div>
          <div>
            <Link to={`/service/${_id}`}>
              <button className="btn rounded-none w-full mt-4">
                View Details
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceCollection;
