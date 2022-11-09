import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";

const UpdateReview = () => {
  const updateReview = useLoaderData();
  //   const [update, setUpdate] = useState(updateReview);
  const { itemName, _id, email, name, ServiceName, image, description } =
    updateReview;
  //   const handelUpdateReview = (event) => {
  //     event.preventDefault();
  //     fetch(`http://localhost:5000/update/${_id}`, {
  //       method: "PUT",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify(update),
  //     })
  //       .then((res) => res.json())
  //       .then((data) => {
  //         console.log(data);
  //       });
  //   };
  //   const handelInputChange = (event) => {
  //     // const value = event.target.value;
  //     // const name = event.target.name;
  //     // const newUser = { ...update };
  //     // newUser[name] = value;
  //     // setUpdate(newUser);
  //   };
  return (
    <div>
      <div className="text-xl md:text-3xl text-center  font-bold">
        Update {itemName} Review
      </div>
      <div className="w-full px-6 py-4 my-10 overflow-hidden bg-white shadow-md sm:max-w-md sm:rounded-lg mx-auto">
        <form>
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700 undefined"
            >
              Name
            </label>
            <div className="flex flex-col items-start">
              <input
                type="text"
                name="name"
                defaultValue={name}
                placeholder="your Name"
                required
                className="block w-full mt-1 p-2 border rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              />
            </div>
          </div>
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700 undefined"
            >
              ServiceName
            </label>
            <div className="flex flex-col items-start">
              <input
                type="text"
                name="ServiceName"
                placeholder="ServiceName"
                defaultValue={ServiceName}
                required
                className="block w-full mt-1 p-2 border rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              />
            </div>
          </div>

          <div className="mt-4">
            <label
              htmlFor="image"
              className="block text-sm font-medium text-gray-700 undefined"
            >
              Your Image
            </label>
            <div className="flex flex-col items-start">
              <input
                type="text"
                name="image"
                placeholder="your image"
                defaultValue={image}
                required
                className="block w-full mt-1 p-2  border rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              />
            </div>
          </div>
          <div className="mt-4">
            <label
              htmlFor="image"
              className="block text-sm font-medium text-gray-700 undefined"
            >
              Your Email
            </label>
            <div className="flex flex-col items-start">
              <input
                type="email"
                name="email"
                placeholder="your email"
                defaultValue={email}
                required
                className="block w-full mt-1 p-2  border rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              />
            </div>
          </div>
          <div className="mt-4">
            <label
              htmlFor="details"
              className="block text-sm font-medium text-gray-700 undefined"
            >
              Description
            </label>
            <div className="flex flex-col items-start">
              <textarea
                name="description"
                rows="4"
                defaultValue={description}
                className="block p-2 w-full text-sm text-gray-900 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500     dark:focus:border-blue-500"
                placeholder="description"
                required
              ></textarea>
            </div>
          </div>

          <div className="flex items-center justify-end mt-4">
            <button
              type="submit"
              className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-purple-700 rounded-md hover:bg-purple-600 focus:outline-none focus:bg-purple-600"
            >
              Update
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateReview;