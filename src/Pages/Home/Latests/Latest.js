import React from "react";

const Latest = ({ latest }) => {
  const { img } = latest;
  return (
    <div>
      <div className="card card-compact  bg-base-100 shadow-xl p-6">
        <figure>
          <img src={img} className="h-64" alt="Shoes" />
        </figure>
      </div>
    </div>
  );
};

export default Latest;
