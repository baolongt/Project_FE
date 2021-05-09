import React from "react";
import { useParams } from "react-router";
import SearchBar from "./SearchBar";
import SalePage from "../DealComponents/SalePage";
import Header from "../../../UI/Header";
const SearchComponent = () => {
  let { id } = useParams();
  console.log(id);
  return (
    <>
      <Header/>
      <p
        className="text-xl text-center mt-6 font-bold w-full
      md:text-3xl
      lg:text-5xl
      "
      >
        Find best deal for your game
      </p>
      <SearchBar />
      <SalePage />
    </>
  );
};

export default SearchComponent;
