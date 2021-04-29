import React from "react";

const SaleComponent = (props) => {
  return (
    <div className="relative">
      <img className="w-full" src={props.imageUrl} alt={props.name} />
      <div className="w-full h-16 bg-black bg-opacity-80 grid grid-cols-3 gap-1">
        <p className="col-span-2 mt-2 ml-3">{props.name}</p>
        <div className="col-span-1 grid grid-cols-3 gap-1 mr-2">
          <div className="col-start-1 bg-green-400 text-lg text-center w-12 row-span-3 h-8 mt-5">
            -{props.discount}%
          </div>
          <div className="line-through text-xs row-span-1 col-span-2 text-right mr-4 mt-2">
            {props.price}
          </div>
          <div className="row-span-2 col-span-2 text-lg text-center mb-5">
            {props.salePrice}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SaleComponent;
