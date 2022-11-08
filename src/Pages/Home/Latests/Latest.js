import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
const Latest = ({ latest }) => {
  useEffect(() => {
    AOS.init();
  }, []);
  const { img } = latest;
  return (
    <div>
      <div
        data-aos="fade-up"
        className="card card-compact   bg-base-100 shadow-xl p-6"
      >
        <figure>
          <img src={img} className="h-64" alt="Shoes" />
        </figure>
      </div>
    </div>
  );
};

export default Latest;
