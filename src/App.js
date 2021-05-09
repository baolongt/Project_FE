import React from "react";
import "./App.css";
import SearchComponent from "./components/landing components/SearchComponent/SearchComponent";
import { Route, BrowserRouter } from "react-router-dom";
import Game from "./components/GameDetail/Game";
import TopGames from "./components/TopGame/TopGames";
import ErrorPage from "./components/ErrorPage/ErrorPage"
import Header from "./UI/Header";

function App() {
  return (
    <BrowserRouter>
      <Route path="/" exact component={SearchComponent} />
      <Route path="/top" exact component={TopGames} />
      <Route path="/info/:id" children={<Game />} />
      <Route path="/error" children={<ErrorPage/>}/>
      <Route path="/header" children={<Header/>}/>
    </BrowserRouter>
  );
}

export default App;
