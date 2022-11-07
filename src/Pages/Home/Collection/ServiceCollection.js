import { StarIcon } from "@heroicons/react/24/solid";
import React from "react";

const ServiceCollection = ({ data }) => {
  const { image, name, details, rating, price } = data;
  return (
    <div>
      <div className="card card-compact shadow-xl p-6">
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
            <button className="btn rounded-none w-full mt-4">Details</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceCollection;
