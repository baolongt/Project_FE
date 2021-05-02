import React from "react";
import "./SaleComponent.css";

const SaleComponent = (props) => {
  return (
    <div
      className="relative cursor-pointer 
    transition md:duration-500 md:ease-in-out 
    transform md:hover:-translate-y-1 md:hover:scale-110"
    >
      <img className="w-full" src={props.imageUrl} alt={props.name} />
      <div
        className="w-full h-14 bg-black grid grid-cols-10 gap-1
        2xl:h-16
      "
      >
        <p
          className="col-span-6 mt-2 ml-3 text-sm font-bold
          2xl:text-lg
        "
        >
          {props.name}
        </p>
        <div className="col-span-4 grid grid-cols-4 gap-1">
          <div
            className="col-start-3 col-span-2 line-through text-opacity-80 text-gray-500 text-xs text-left font-bold mt-2
            lg:-ml-2
            2xl:text-base 2xl:mt-2
          "
          >
            {props.price}
          </div>
          {/* <div
            className="sale col-span-2 bg-sale-green text-center 
          -mt-2 mb-3 mx-1 text-sm font-bold 
          sm:text-base sm:mx-6
          md:mx-1
          lg:mx-3
          xl:mx-4
          2xl:mx-6 2xl:-mt-5 2xl:mb-4 2xl:text-xl
          "
          >
            -{props.discount}%
          </div> */}
          <div
            className="col-span-2 text-center font-bold text-sm
          "
          >
            <p
              className="sale bg-sale-green w-4/5 -mt-4
            sm:w-2/4
            md:w-9/12 md:-mt-3 md:ml-2
            lg:w-8/12 
            xl:h-7 xl:text-xl xl:-mt-5 xl:ml-5
            "
            >
              -{props.discount}%
            </p>
          </div>
          <div
            className="col-start-3 col-span-2 text-sm text-left font-bold
            lg:text-base lg:-mt-1 lg:-ml-2
            2xl:text-xl 2xl:-mt-2
          "
          >
            {props.salePrice}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SaleComponent;
