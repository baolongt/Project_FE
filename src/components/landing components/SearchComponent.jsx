import React, { Component } from "react";
import SearchBar from "./SearchBar";
import "./landing.css";
class SearchComponent extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <h4 id="bigTitle">Find best deal for your game</h4>
        <div id="search">
          <SearchBar />
          <button id="btnSearch">Search</button>
        </div>
      </React.Fragment>
    );
  }
}

export default SearchComponent;
