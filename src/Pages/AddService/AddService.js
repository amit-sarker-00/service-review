import React from "react";
import Swal from "sweetalert2";
import useTitle from "../../Hooks/useTitle";

const AddService = () => {
  useTitle("AddService");

  const handelAddService = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const image = form.image.value;
    const details = form.details.value;
    const rating = form.rating.value;
    const price = form.price.value;

    console.log(name, image, details, price, rating);
    const addService = {
      name: name,
      image: image,
      details: details,
      rating: rating,
      price: price,
    };
    fetch(
      "https://b6a11-service-review-server-side-amit-sarker-00.vercel.app/addService",
      {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(addService),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          Swal.fire("Service added successfully");
        }
      });
  };
  return (
    <div>
      <div>
        <h1 className="text-xl md:text-3xl lg:text-5xl text-center font-bold my-5 text-red-500">
          Add Services
        </h1>
      </div>
      <div className="w-full px-6 py-4 my-10 overflow-hidden bg-white shadow-md sm:max-w-md sm:rounded-lg mx-auto">
        <form onSubmit={handelAddService}>
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
                placeholder="Service Name"
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
              Image
            </label>
            <div className="flex flex-col items-start">
              <input
                type="text"
                name="image"
                placeholder="image"
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
              Details
            </label>
            <div className="flex flex-col items-start">
              <textarea
                name="details"
                rows="4"
                className="block p-2 w-full text-sm text-gray-900 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500     dark:focus:border-blue-500"
                placeholder="details"
                required
              ></textarea>
            </div>
            <div className="mt-4">
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700 undefined"
              >
                Price
              </label>
              <div className="flex flex-col items-start">
                <input
                  type="text"
                  name="price"
                  placeholder="price"
                  required
                  className="block w-full mt-1 p-2 border  rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                />
              </div>
            </div>
            <div className="mt-4">
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700 undefined"
              >
                Rating
              </label>
              <div className="flex flex-col items-start">
                <input
                  type="text"
                  name="rating"
                  placeholder="rating"
                  required
                  className="block w-full mt-1 p-2 border  rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                />
              </div>
            </div>
          </div>

          <div className="flex items-center justify-end mt-4">
            <button
              type="submit"
              className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-purple-700 rounded-md hover:bg-purple-600 focus:outline-none focus:bg-purple-600"
            >
              Add
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddService;
