import React from "react";
import { Link } from "react-router-dom";
import useTitle from "../../Hooks/useTitle";

const ErrorPage = () => {
  useTitle("error");
  return (
    <div>
      <section className="flex items-center h-full p-16  dark:text-gray-100">
        <div className="container flex flex-col items-center justify-center px-5 mx-auto my-8">
          <div className="max-w-md text-center">
            <h2 className="mb-8 font-extrabold text-9xl dark:text-gray-600">
              <span className="sr-only">Error</span>404
            </h2>
            <p className="text-2xl font-bold md:text-3xl text-black">
              Sorry, we couldn't find this page.
            </p>
            <p className="mt-4 mb-8 font-bold dark:text-red-500">
              Looks like You lost your way!
            </p>
            <Link
              to="/"
              className="px-8 py-3 font-semibold rounded dark:bg-violet-400 dark:text-gray-900"
            >
              Back to homepage
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ErrorPage;
