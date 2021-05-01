import React from "react";
import SaleComponent from "./SaleComponent";
import jsonFile from "./picture/gameList.json";
let data = JSON.parse(JSON.stringify(jsonFile)).games;
let counter = 0;
const SalePage = () => {
  return (
    <div
      className="grid grid-cols-1 gap-10 mt-8
    md:grid-cols-2 md:mx-5
    xl:grid-cols-3 xl:h-20
    "
    >
      {data.map((item) => {
        return (
          <SaleComponent
            imageUrl={item.imageUrl}
            name={item.name}
            key={++counter}
            discount={item.price_overview.discount_percent}
            price={item.price_overview.initial_formatted}
            salePrice={item.price_overview.final_formatted}
          />
        );
      })}
    </div>
  );
};

export default SalePage;
