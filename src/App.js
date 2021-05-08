import React from "react";
import "./App.css";
import SearchComponent from "./components/landing components/SearchComponent/SearchComponent";
import { Route, BrowserRouter } from "react-router-dom";
import Game from "./components/GameDetail/Game";

function App() {
  return (
      <DataProvider>
        <BrowserRouter>
          <Route path="/" exact component={SearchComponent} />
          <Route path="/top" exact component={TopGames} />
          <Route path="/info/:id" children={<Game />} />
        </BrowserRouter>
      </DataProvider>
    </>
  );
}

export default App;
