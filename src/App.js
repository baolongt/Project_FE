import React from "react";
import "./App.css";
import SearchComponent from "./components/landing components/SearchComponent";
import { Route, BrowserRouter } from "react-router-dom";
import Game from "./components/GameDetail/Game";
// import API from "./API/HTTP";

// API.get("/app-ids?page=1&perPage=10").then((res) => console.log(res));

function App() {
  return (
    <>
      <BrowserRouter>
        <Route path="/" exact component={SearchComponent} />
        <Route path="/info" exact component={Game} />
      </BrowserRouter>
    </>
  );
}

export default App;
