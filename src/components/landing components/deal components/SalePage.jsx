import React, { useState, useEffect } from "react";
import SaleComponent from "./SaleComponent";
import API from "../../../API/HTTP";
const SalePage = () => {
  const [GameDatas, setGameDatas] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    async function fetchData() {
      API.get("/sales/").then((res) => {
        if (!isLoaded) {
          setGameDatas(res.data.data);
        }
        console.log(GameDatas);
        setIsLoaded(true);
      });
    }
    fetchData();
  }, [GameDatas]);
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
        GameDatas.map((item) => {
          return (
            <SaleComponent
              imageUrl={item.header_image}
              name={item.name}
              discount={item.discount_percentage}
              price={800}
              salePrice={600}
            />
          );
        })
      )}
    </div>
  );
};

export default SalePage;
