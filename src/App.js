import React from "react";
import "./App.css";
import SearchComponent from "./components/landing components/SearchComponent/SearchComponent";
import { Route, BrowserRouter, Switch } from "react-router-dom";
import Game from "./components/GameDetail/Game";
import TopGames from "./components/TopGame/TopGames";
import ErrorPage from "./components/ErrorPage/ErrorPage";
import NotFoundPage from "./components/ErrorPage/NotFoundPage";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={SearchComponent} />
        <Route path="/top" exact component={TopGames} />
        <Route path="/info/:id" children={<Game />} />
        <Route path="/error" exact component={ErrorPage} />
        <Route component={NotFoundPage} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
