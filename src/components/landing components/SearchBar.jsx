import React from "react";
import searchIcon from "../resource/svg/search.svg";
import "./Button.css";
const SearchBar = () => {
  return (
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
        />
        <div className="p-4">
          <button
            className="bg-yellow-400 text-white rounded-full p-2
           hover:bg-yellow-300 focus:outline-none w-12 h-12 flex items-center justify-center"
          >
            <img src={searchIcon} className="" alt="svg" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
