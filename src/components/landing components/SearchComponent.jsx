import React from "react";
import SearchBar from "./SearchBar";
import SalePage from "./deal components/SalePage";
const SearchComponent = () => {
  return (
    <>
      <p
        className="text-xl text-center mt-6 font-bold w-full
      md:text-3xl
      lg:text-5xl
      "
      >
        Find best deal for your game
      </p>
      <SearchBar />
      <p
        className="text-xl text-center mt-6 font-bold w-full
      md:text-3xl
      lg:text-5xl
      "
      >
        Highlights
      </p>
      <SalePage />
    </>
  );
};

export default SearchComponent;
