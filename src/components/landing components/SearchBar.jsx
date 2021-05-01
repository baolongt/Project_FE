import React from "react";

const SearchBar = () => {
  return (
    <div
      className="grid-cols-9 grid text-center mt-6 h-10
    lg:h-16
    xl:h-20
    "
    >
      <input
        className="col-start-3 col-end-7 rounded-l text-xs text-black
        lg:text-base
        xl:text-xl
        "
        type="text"
        placeholder="Find game"
      />
      <button
        className="col-start-7 col-end-8 bg-yellow-400 rounded-r text-xs
        lg:text-base
        xl:text-xl
        "
      >
        Search
      </button>
    </div>
  );
};

export default SearchBar;
