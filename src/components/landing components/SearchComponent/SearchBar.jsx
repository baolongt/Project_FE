import React, { useState, useEffect } from "react";
import searchIcon from "../../resource/svg/search.svg";
import "./Button.css";
import API from "../../../API/HTTP";
import ResultComponent from "../Result/ResultComponent";
import { Redirect } from "react-router-dom";

const handleSubmit = (searchValue) => {
  return searchValue.length > 0 ? <Redirect to="/info" /> : "";
};

const SearchBar = () => {
  const [searchedData, setSearchedData] = useState([]);
  const [searchValue, setSearchValue] = useState("");

  useEffect(() => {
    if (searchValue.length === 0 && searchedData.length !== 0) {
      setSearchedData([]);
    }
    if (searchValue.length === 0) {
      return;
    }
    const getData = () => {
      API.get("/app-ids?query=" + searchValue)
        .then((res) => res.data)
        .then((data) => {
          setSearchedData(data.data);
        });
    };
    const timer = setTimeout(() => {
      getData();
    }, 500);
    return () => {
      clearTimeout(timer);
    };
  }, [searchValue]);

  useEffect(() => {}, [searchedData]);

  return (
    <>
      <div
        className="p-8
    "
      >
        <div
          className="bg-white flex items-center rounded-full shadow-xl
        lg:w-11/12 lg:ml-12
        xl:w-7/12 xl:ml-72
      "
        >
          <input
            className="rounded-l-full w-full py-4 px-6 text-gray-700 leading-tight focus:outline-none
          xl:text-xl
          "
            type="text"
            placeholder="Find game"
            value={searchValue}
            onChange={(event) => {
              setSearchValue(event.target.value);
            }}
            onSubmit={handleSubmit(searchValue)}
          />
          <div className="p-4">
            <button
              className="bg-yellow-400 text-white rounded-full p-2
           hover:bg-yellow-300 focus:outline-none w-12 h-12 flex items-center justify-center"
              onClick={handleSubmit}
            >
              <img src={searchIcon} className="" alt="svg" />
            </button>
          </div>
        </div>
      </div>
      <div
        className={
          searchedData.length === 0
            ? "hidden "
            : "visible bg-white -mt-9 mx-20 lg:mx-32 xl:mx-96"
        }
      >
        <div className="pt-1 pb-1 pr-1 z-1">
          {searchedData.map((data, index) => {
            return (
              <ResultComponent
                key={index}
                id={data.appid}
                name={data.name}
                imageUrl={data.header_image}
                discount={data.discount_percentage}
                price={data.current_price}
              />
            );
          })}
        </div>
      </div>
    </>
  );
};

export default SearchBar;
