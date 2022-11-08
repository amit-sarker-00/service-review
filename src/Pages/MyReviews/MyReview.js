import React, { useContext } from "react";
import { StarIcon } from "@heroicons/react/24/solid";
import useTitle from "../../Hooks/useTitle";
import { AuthContext } from "../../AuthProvider/AuthProvider";

const MyReview = ({ data }) => {
  const { user } = useContext(AuthContext);
  useTitle("MyReview");
  const { image, description, ServiceName, name, email } = data;
  if (user?.email === email) {
    <h1>hello kuddus</h1>;
  } else {
    <h1>nothing here</h1>;
  }
  return (
    <div>
      <div className="flex text-center mx-auto h-auto md:h-80 my-10 flex-col max-w-lg p-6 space-y-6 overflow-hidden rounded-lg shadow-md dark:bg-gray-900 dark:text-gray-100">
        <div className="flex item-center justify-between">
          <div className="flex space-x-3">
            <img
              alt=""
              src={image}
              className=" w-12 h-12 rounded-full shadow"
            />
            <div className="flex flex-col space-y-1">
              <p className="text-sm font-semibold">{name}</p>
              <span className="">4 hours ago</span>
            </div>
          </div>
          <div className="flex items-center">
            <StarIcon className="w-4 h-4 text-warning"></StarIcon>
            <StarIcon className="w-4 h-4 text-warning"></StarIcon>
            <StarIcon className="w-4 h-4 text-warning"></StarIcon>
            <StarIcon className="w-4 h-4 text-warning"></StarIcon>
            <StarIcon className="w-4 h-4 text-warning"></StarIcon>
          </div>
        </div>
        <div>
          <h2 className="mb-1 text-xl font-semibold">{ServiceName}</h2>
          <p className="text">{description}</p>
        </div>
        <div className="flex items-center justify-around">
          <button className="btn btn-outline btn-info rounded">Delete</button>
          <button className="btn  btn-info rounded">Edit Review</button>
        </div>
      </div>
    </div>
  );
};

export default MyReview;
