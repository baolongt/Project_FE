import React from "react";
import "./App.css";
import SearchComponent from "./components/landing components/SearchComponent";
import { Route, BrowserRouter } from "react-router-dom";
function App() {
  return (
    <>
      <BrowserRouter>
        <Route path="/" exact component={SearchComponent} />
      </BrowserRouter>
    </>
  );
}

export default App;
