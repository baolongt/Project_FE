import React from "react";
import SearchBar from "./SearchBar";
import SalePage from "./deal components/SalePage";
import "./landing.css";

const SearchComponent = () => {
  return (
    <>
      <h4 id="bigTitle">Find best deal for your game</h4>
      <div id="search">
        <SearchBar />
        <button id="btnSearch">Search</button>
        <SalePage />
      </div>
    </>
  );
};

export default SearchComponent;
