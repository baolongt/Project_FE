import React from "react";

const SaleComponent = (props) => {
  return (
    <div className="relative">
      <img src={props.imageUrl} alt={props.name} />
      <div className="absolute inset-x-0 bottom-0 h-16 bg-black bg-opacity-50">
        hmm
      </div>
    </div>
  );
};

export default SaleComponent;
