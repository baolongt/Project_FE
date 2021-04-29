import React from "react";
import SearchBar from "./SearchBar";
import SalePage from "./deal components/SalePage";

const SearchComponent = () => {
  return (
    <>
      <div className="text-5xl text-center mt-6 font-bold">
        Find best deal for your game
      </div>
      <div className="ml-60 w-8/12">
        <SearchBar />
        <SalePage />
      </div>
    </>
  );
};

export default SearchComponent;
