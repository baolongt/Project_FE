import React from "react";
import SaleComponent from "./SaleComponent";
import { useDataContext } from "../../../API/DataProvider";

const SalePage = () => {
  const { gameData, isLoading } = useDataContext();
  // console.log(isLoading);
  // console.log(gameData);
  // if (gameData === undefined) {
  //   throw new Error("Data didn't fetch");
  // }
  return (
    <div
      className="grid grid-cols-1 gap-10 mt-10
    md:grid-cols-2 md:mx-5 md:mt-14
    xl:grid-cols-3 xl:h-20
    "
    >
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <SaleComponent
          imageUrl={gameData.header_image}
          name={gameData.name}
          discount={gameData.price_overview.discount_percent}
          price={gameData.price_overview.initial_formatted}
          salePrice={gameData.price_overview.final_formatted}
        />
      )}
    </div>
  );
};

export default SalePage;
