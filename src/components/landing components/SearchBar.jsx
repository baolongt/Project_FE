import React from "react";

const SearchBar = () => {
  return (
    <div className="grid-cols-10 grid text-center mt-6 h-20 w-9/12">
      <input
        className="col-start-1 col-span-8"
        type="text"
        placeholder="Find game"
      />
      <button className="col-start-9 col-span-2">Search</button>
    </div>
  );
};

export default SearchBar;
