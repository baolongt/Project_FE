import React from "react";
import "./App.css";
import SearchComponent from "./components/landing components/SearchComponent";
import { Route, BrowserRouter } from "react-router-dom";
import Game from "./components/GameDetail/Game";
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
