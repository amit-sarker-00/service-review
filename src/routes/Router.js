import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import AddService from "../Pages/AddService/AddService";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import AddReview from "../Pages/MyReviews/AddReview";
import MyReviews from "../Pages/MyReviews/MyReviews";
import UpdateReview from "../Pages/MyReviews/UpdateReview";
import Register from "../Pages/Register/Register";
import ServiceDetails from "../Pages/ServiceDetails/ServiceDetails";
import Services from "../Pages/Services/Services";
import Blogs from "../Shared/Blogs/Blogs";
import ErrorPage from "../Shared/ErrorPage/ErrorPage";
import PrivateRoute from "./PrivateRoute";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      { path: "/", element: <Home></Home> },
      { path: "/home", element: <Home></Home> },
      {
        path: "/services",
        element: <Services></Services>,
        loader: () =>
          fetch(
            "https://b6a11-service-review-server-side-amit-sarker-00.vercel.app/services"
          ),
      },
      { path: "/blogs", element: <Blogs></Blogs> },
      { path: "/login", element: <Login></Login> },
      { path: "/register", element: <Register></Register> },
      {
        path: "/updateReview/:id",
        element: <UpdateReview></UpdateReview>,
        loader: ({ params }) =>
          fetch(
            `https://b6a11-service-review-server-side-amit-sarker-00.vercel.app/updateReview/${params.id}`
          ),
      },
      {
        path: "/addService",
        element: (
          <PrivateRoute>
            <AddService></AddService>
          </PrivateRoute>
        ),
      },
      {
        path: "/addReview/:id",
        element: (
          <PrivateRoute>
            <AddReview></AddReview>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(
            `https://b6a11-service-review-server-side-amit-sarker-00.vercel.app/services/${params.id}`
          ),
      },
      {
        path: "/myReviews",
        element: (
          <PrivateRoute>
            <MyReviews></MyReviews>
          </PrivateRoute>
        ),
      },
      {
        path: "/service/:id",
        element: <ServiceDetails></ServiceDetails>,
        loader: ({ params }) =>
          fetch(
            `https://b6a11-service-review-server-side-amit-sarker-00.vercel.app/services/${params.id}`
          ),
      },
    ],
  },
  { path: "*", element: <ErrorPage></ErrorPage> },
]);
