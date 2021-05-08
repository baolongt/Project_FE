import React, { useState, useEffect } from "react";
import SaleComponent from "./SaleComponent";
import API from "../../../API/HTTP";
// import SampleData from "./SaleList.json";
const SalePage = () => {
  const [GameData, setGameData] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    async function fetchData() {
      API.get("/sales/").then((res) => {
        if (!isLoaded) {
          setGameData(res.data.data);
          setIsLoaded(true);
        }
      });
    }
    fetchData();
  }, [GameData, isLoaded]);
  return (
    <div
      className="grid grid-cols-1 gap-10 mt-10
    md:grid-cols-2 md:mx-5 md:mt-14
    xl:grid-cols-3 xl:h-20
    "
    >
      {!isLoaded ? (
        <p>Loading...</p>
      ) : (
        GameData.map((item, index) => {
          return (
            <SaleComponent
              key={index}
              id={item.appid}
              imageUrl={item.header_image}
              name={item.name}
              discount={item.discount_percentage}
              price={
                parseInt(item.current_price) +
                parseInt(item.current_price) *
                  (1 - -parseInt(item.discount_percentage) / 100)
              }
              salePrice={parseInt(item.current_price)}
            />
          );
        })
      )}
    </div>
  );
};

export default SalePage;
