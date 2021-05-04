import React from "react";
import "./App.css";
import SearchComponent from "./components/landing components/SearchComponent";
import { Route, BrowserRouter } from "react-router-dom";
import Game from "./components/GameDetail/Game";
import TopGames from "./components/TopGame/TopGames";
import DataProvider from "./API/DataProvider";

function App() {
  return (
    <>
      <DataProvider>
        <BrowserRouter>
          <Route path="/" exact component={SearchComponent} />
          <Route path="/info" exact component={Game} />
          <Route path="/top" exact component={TopGames} />
        </BrowserRouter>
      </DataProvider>
    </>
  );
}

export default App;
