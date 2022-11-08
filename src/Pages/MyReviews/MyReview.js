import React, { useState } from "react";
import { StarIcon } from "@heroicons/react/24/solid";
import useTitle from "../../Hooks/useTitle";
import Swal from "sweetalert2";

const MyReview = ({ data }) => {
  const [reviews, setReviews] = useState([]);
  useTitle("MyReview");
  const { image, description, ServiceName, name, _id } = data;
  const handelDelete = (id) => {
    const toast = Swal.fire({
      title: "Are you sure?",
      text: "You want to delete this!",
      icon: "warning",
      confirmButtonColor: "#3085d6",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire("Deleted!", "Your file has been deleted.", "success");
      }
    });
    if (toast) {
      fetch(`http://localhost:5000/reviewDelete/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deleteCount > 0) {
            const remaining = reviews.filter((review) => review._id !== id);
            setReviews(remaining);
          }
        });
    }
  };
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
          <button
            onClick={() => handelDelete(_id)}
            className="btn btn-outline btn-info rounded"
          >
            Delete
          </button>
          <button className="btn  btn-info rounded">Edit Review</button>
        </div>
      </div>
    </div>
  );
};

export default MyReview;
