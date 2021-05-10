import React, { useState, useEffect } from "react";
import SaleComponent from "./SaleComponent";
import API from "../../../API/HTTP";
import "./SalePage.css";
import Loading from "../../resource/Loading";
const SalePage = () => {
  const [GameData, setGameData] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const [isShowedMore, setIsShowedMore] = useState(false);

  const isXLMatchMedia = () => {
    return window.matchMedia("(min-width: 1024px)").matches;
  };

  useEffect(() => {
    async function fetchData() {
      API.get("/sales/").then((res) => {
        if (!isLoaded) {
          setGameData(res.data.data);
          setIsLoaded(true);
        }
      });
    }
    if (!isLoaded) {
      fetchData();
    }
  }, [GameData, isLoaded]);

  return (
    <div className="sale">
      <p
        className="text-xl text-center mt-6 font-bold w-full
      md:text-3xl
      lg:text-5xl
      "
      >
        Highlights
      </p>
      {!isLoaded ? <Loading /> : <> </>}
      <div
        className="z-0 grid grid-cols-1 gap-10 mt-10
    md:grid-cols-2 md:mx-5 md:mt-14
    xl:grid-cols-3 xl:h-20
    "
      >
        {!isLoaded ? (
          <> </>
        ) : (
          GameData.slice(
            0,
            isShowedMore ? GameData.length : isXLMatchMedia() ? 9 : 8
          ).map((item, index) => {
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
        {isXLMatchMedia()}
        {isLoaded & !isShowedMore ? (
          <div className="col-start-1 col-end-3 md:col-span-2 xl:col-span-1 xl:col-start-2 flex justify-center">
            <button
              className="bg-transparent hover:bg-blue-500 text-white font-semibold
          hover:text-white py-2 px-4 border border-blue-500
           hover:border-transparent rounded"
              onClick={() => setIsShowedMore(true)}
            >
              Show more
            </button>
          </div>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};

export default SalePage;
