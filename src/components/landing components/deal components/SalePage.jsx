import React from "react";
import SaleComponent from "./SaleComponent";
import jsonFile from "./picture/gameList.json";
let data = JSON.parse(JSON.stringify(jsonFile)).games;
let counter = 0;
const SalePage = () => {
  return (
    <div className="grid grid-cols-2 gap-4">
      {data.map((item) => {
        return (
          <SaleComponent
            imageUrl={item.imageUrl}
            name={item.name}
            key={++counter}
          />
        );
      })}
    </div>
  );
};

export default SalePage;
