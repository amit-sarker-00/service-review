import React, { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import useTitle from "../../Hooks/useTitle";

const AddReview = () => {
  const { user } = useContext(AuthContext);
  useTitle("AddReview");
  const handelAddReview = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const image = form.image.value;
    const description = form.description.value;
    const ServiceName = form.ServiceName.value;
    const email = form.email.value;

    console.log(name, image, description);
    const addReview = {
      name: name,
      image: image,
      description: description,
      ServiceName: ServiceName,
      email: email,
    };
    fetch("http://localhost:5000/myReviews", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(addReview),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        form.reset();
      });
  };
  return (
    <div>
      <div className="my-6">
        <h1 className="text-xl md:text-3xl lg:text-5xl font-bold text-center ">
          Add Review
        </h1>
      </div>
      <div className="w-full px-6 py-4 my-10 overflow-hidden bg-white shadow-md sm:max-w-md sm:rounded-lg mx-auto">
        <form onSubmit={handelAddReview}>
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
                placeholder="your Name"
                readOnly
                defaultValue={user?.displayName}
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
                defaultValue={user?.email}
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
              Add
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddReview;
