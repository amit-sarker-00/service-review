import React, { useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { StarIcon } from "@heroicons/react/24/solid";
import useTitle from "../../Hooks/useTitle";
import ServiceReview from "./ServiceReview";

const ServiceDetails = () => {
  useTitle("ServiceDetails");
  const [datas, setDatas] = useState([]);
  const ServiceDetail = useLoaderData();
  const { _id, name, details, image, rating, price } = ServiceDetail;
  useEffect(() => {
    fetch(`http://localhost:5000/reviews/${name}`)
      .then((res) => res.json())
      .then((data) => setDatas(data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="max-w-screen-xl	mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 my-10">
        <div className="">
          <h1 className="text-xl md:text-3xl lg:text-5xl text-center mb-10 font-bold">
            Service Details
          </h1>
          <div>
            <div className="flex h-auto md:h-96 flex-col items-center bg-white rounded-lg border shadow-md md:flex-row md:max-w-xl  dark:border-gray-700">
              <img
                className="object-cover w-full  rounded-t-lg md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
                style={{ height: "100%" }}
                src={image}
                alt=""
              />
              <div className="flex flex-col justify-between p-4 leading-normal">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-black">
                  {name}
                </h5>
                <p className="mb-3 font-normal">{details}</p>
                <div className="flex items-center justify-between">
                  <p className="text-red-500 font-bold">Price : ${price}</p>
                  <div className="flex items-center justify-between">
                    <p>{rating}</p>
                    <StarIcon className="h-4 w-4 text-warning"></StarIcon>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <h1 className="text-xl md:text-3xl lg:text-5xl text-center font-bold">
            review section
          </h1>
          <div>
            <Link
              to={`/addReview/${_id}`}
              className="text-xl btn btn-info rounded my-4"
            >
              Add Reviews
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {datas.map((data) => (
              <ServiceReview key={data._id} data={data}></ServiceReview>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetails;
