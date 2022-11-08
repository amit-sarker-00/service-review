import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import MyReview from "./MyReview";

const MyReviews = () => {
  const [datas, setDatas] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/myReviews")
      .then((res) => res.json())
      .then((data) => {
        setDatas(data);
      });
  }, []);
  return (
    <div className="my-10 max-w-screen-xl mx-auto">
      <div className="my-6">
        <h1 className="text-xl md:text-3xl lg:text-5xl text-center font-bold">
          My Reviews
        </h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 ">
        {datas.map((data) => (
          <MyReview key={data._id} data={data}></MyReview>
        ))}
      </div>
    </div>
  );
};

export default MyReviews;
