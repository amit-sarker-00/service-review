import React from "react";
import img1 from "../../../assets/slide/slide1.jpg";
import img2 from "../../../assets/slide/slide2.jpg";
import img3 from "../../../assets/slide/slide3.jpg";
import img4 from "../../../assets/slide/slide4.jpg";
import Banner from "../Banner/Banner";
const Slide = () => {
  const bannerData = [
    {
      image: img2,
      prev: 1,
      id: 2,
      next: 3,
    },
    {
      image: img3,
      prev: 2,
      id: 3,
      next: 4,
    },
    {
      image: img4,
      prev: 3,
      id: 4,
      next: 5,
    },
    {
      image: img1,
      prev: 4,
      id: 5,
      next: 6,
    },
  ];
  return (
    <div className="carousel w-full py-10">
      {bannerData.map((banner) => (
        <Banner key={banner.id} banner={banner}></Banner>
      ))}
    </div>
  );
};

export default Slide;
