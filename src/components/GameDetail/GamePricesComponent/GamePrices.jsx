import React, { useState } from "react";
import "./GamePrices.css";

const GamePrices = (props) => {
  const [priceOfCountries, setPriceOfCountries] = useState(
    props.gamePrices.data.price_countries
  );

  const [status, setStatus] = useState({
    isSortName: false,
    sortNameStatus: 0,
    isSortLowest: false,
    sortLowestStatus: 0,
    isSortConverted: false,
    sortConvertedStatus: 0,
  });

  const test = "only test";

  const highlightPercent = (string) => {
    const length = string.length;
    if (string.substr(length - 1) === "%") {
      return (
        <div>
          <span>{string.substr(0, length - 5)}</span>
          <span className="text-green-500">
            {string.substr(length - 4, length - 1)}
          </span>
        </div>
      );
    }
  };

  const filterByName = (type) => {
    if (type === 1) {
      return priceOfCountries.sort((el1, el2) => {
        if (el1.name < el2.name) {
          return -1;
        }
        if (el1.name > el2.name) {
          return 1;
        }
        return 0;
      });
    } else if (type === 2) {
      return priceOfCountries.sort((el1, el2) => {
        if (el1.name > el2.name) {
          return -1;
        }
        if (el1.name > el2.name) {
          return 1;
        }
        return 0;
      });
    }
  };
  const filterByLowestPrice = (type) => {
    if (type === 1) {
      return priceOfCountries.sort((el1, el2) => {
        if (el1.lowest_price < el2.lowest_price) {
          return -1;
        }
        if (el1.lowest_price > el2.lowest_price) {
          return 1;
        }
        return 0;
      });
    } else if (type === 2) {
      return priceOfCountries.sort((el1, el2) => {
        if (el1.lowest_price > el2.lowest_price) {
          return -1;
        }
        if (el1.lowest_price > el2.lowest_price) {
          return 1;
        }
        return 0;
      });
    }
  };
  const filterByConvertedPrice = (type) => {
    if (type === 1) {
      return priceOfCountries.sort((el1, el2) => {
        if (el1.converted_price < el2.converted_price) {
          return -1;
        }
        if (el1.converted_price > el2.converted_price) {
          return 1;
        }
        return 0;
      });
    } else if (type === 2) {
      return priceOfCountries.sort((el1, el2) => {
        if (el1.converted_price > el2.converted_price) {
          return -1;
        }
        if (el1.converted_price > el2.converted_price) {
          return 1;
        }
        return 0;
      });
    }
  };

  const sortHandler = (event) => {
    const id = event.target.id;
    if (id === "currency") {
      let type = status.sortNameStatus;
      if (type === 0 || type === 2) {
        filterByName(1);
        setStatus({
          isSortName: true,
          sortNameStatus: 1,
          isSortLowest: false,
          sortLowestStatus: 0,
          isSortConverted: false,
          sortConvertedStatus: 0,
        });
      } else if (type === 1) {
        filterByName(2);
        setStatus({
          isSortName: true,
          sortNameStatus: 2,
          isSortLowest: false,
          sortLowestStatus: 0,
          isSortConverted: false,
          sortConvertedStatus: 0,
        });
      }
    } else if (id === "lowestPrice") {
      let type = status.sortLowestStatus;
      if (type === 0 || type === 2) {
        filterByLowestPrice(1);
        setStatus({
          isSortName: false,
          sortNameStatus: 0,
          isSortLowest: true,
          sortLowestStatus: 1,
          isSortConverted: false,
          sortConvertedStatus: 0,
        });
      } else if (type === 1) {
        filterByLowestPrice(2);
        setStatus({
          isSortName: false,
          sortNameStatus: 0,
          isSortLowest: true,
          sortLowestStatus: 2,
          isSortConverted: false,
          sortConvertedStatus: 0,
        });
      }
    } else if (id === "convertedPrice") {
      let type = status.sortConvertedStatus;
      if (type === 0 || type === 2) {
        filterByConvertedPrice(1);
        setStatus({
          isSortName: false,
          sortNameStatus: 0,
          isSortLowest: false,
          sortLowestStatus: 0,
          isSortConverted: true,
          sortConvertedStatus: 1,
        });
      } else if (type === 1) {
        filterByConvertedPrice(2);
        setStatus({
          isSortName: false,
          sortNameStatus: 0,
          isSortLowest: false,
          sortLowestStatus: 0,
          isSortConverted: true,
          sortConvertedStatus: 2,
        });
      }
    }
    setPriceOfCountries([...priceOfCountries]);
  };

  return (
    <div className="container bg-gray-700 mx-auto my-2 pt-2 pb-2 md:my-8 md:pt-4 md:pb-8 ">
      {test}
      <h1 className="text-center text-bold mb-3 text-3xl sm:mb-5 sm:text-5xl md:mb-6 md:text-6xl">
        Store Prices
      </h1>
      <div className="xl:mx-16">
        <table className="table-auto border-collapse text-left">
          <thead>
            <tr>
              <th className="border-b-2 text-xs w-screen sm:text-base sm:pb-2 md:text-xl">
                <span>Currency</span>
                <div
                  className="float-right cursor-pointer ml-2 inline-block -space-y-3 sm:-space-y-4 md:-space-y-5"
                  onClick={sortHandler}
                >
                  <i
                    id="currency"
                    className={`fas fa-sort-up ${
                      status.sortNameStatus === 2 ? "hidden" : ""
                    }`}
                  ></i>
                  <i
                    id="currency"
                    className={`fas fa-sort-down ${
                      status.isSortName ? "inline" : "block"
                    }
                    ${status.sortNameStatus === 1 ? "hidden" : ""}`}
                  ></i>
                </div>
              </th>
              <th className="border-b-2 text-xs text-center w-screen hidden sm:text-base sm:table-cell sm:pb-2 md:text-xl">
                <span>Lowest Price</span>
                <div
                  className="float-right cursor-pointer ml-2 inline-block -space-y-3 sm:-space-y-4 md:-space-y-5"
                  onClick={sortHandler}
                >
                  <i
                    id="lowestPrice"
                    className={`fas fa-sort-up ${
                      status.sortLowestStatus === 2 ? "hidden" : ""
                    }`}
                  ></i>
                  <i
                    id="lowestPrice"
                    className={`fas fa-sort-down ${
                      status.isSortLowest ? "inline" : "block"
                    }
                    ${status.sortLowestStatus === 1 ? "hidden" : ""}`}
                  ></i>
                </div>
              </th>
              <th className="border-b-2 text-xs text-center w-screen sm:text-base sm:pb-2 md:text-xl">
                <span>Current Price</span>
              </th>
              <th className="border-b-2 text-xs w-screen text-center sm:text-base sm:pb-2 md:text-xl">
                <span>Converted Price</span>
                <div
                  className="float-right cursor-pointer ml-2 inline-block -space-y-3 sm:-space-y-4 md:-space-y-5"
                  onClick={sortHandler}
                >
                  <i
                    id="convertedPrice"
                    className={`fas fa-sort-up ${
                      status.sortConvertedStatus === 2 ? "hidden" : ""
                    }`}
                  ></i>
                  <i
                    id="convertedPrice"
                    className={`fas fa-sort-down ${
                      status.isSortConverted ? "inline" : "block"
                    }
                    ${status.sortConvertedStatus === 1 ? "hidden" : ""}`}
                  ></i>
                </div>
              </th>
            </tr>
          </thead>
          <tbody>
            {priceOfCountries.map((el) => {
              return (
                <tr key={el.id}>
                  <td className="border-b text-xs sm:text-base sm:pb-2 md:text-lg">
                    {el.name}
                  </td>
                  <td className="border-b text-xs text-center hidden sm:table-cell sm:text-base sm:pb-1 md:text-lg">
                    {el.lowest_price.substr(el.lowest_price.length - 1) === "%"
                      ? el.lowest_price.substr(0, el.lowest_price.length - 8)
                      : el.lowest_price}
                  </td>
                  <td className="border-b text-xs text-center sm:text-base sm:pb-1 md:text-lg">
                    {highlightPercent(el.current_price)}
                  </td>
                  <td className="border-b text-xs text-center sm:text-base sm:pb-1 md:text-lg">
                    {el.converted_price}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};
export default GamePrices;
