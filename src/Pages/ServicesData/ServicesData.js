import React, { useEffect } from "react";
import { StarIcon } from "@heroicons/react/24/solid";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";
const ServicesData = ({ sdata }) => {
  useEffect(() => {
    AOS.init();
  }, []);

  const { _id, image, details, rating, price, name } = sdata;
  return (
    <div>
      <div
        data-aos="fade-up"
        className="card card-compact  bg-base-100 shadow-xl p-6"
      >
        <figure>
          <img src={image} className="h-64" alt="Shoes" />
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

export default ServicesData;
