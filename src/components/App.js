import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Header from "./Header";
import SuperHeroesList from "./SuperHeroesList";

const App = () => {
  return (
    <div className="app">
      <BrowserRouter>
        <Header />
        <Route path="/" exact component={SuperHeroesList} />
        <Route path="/marvel" exact component={SuperHeroesList} />
        <Route path="/dc" exact component={SuperHeroesList} />
      </BrowserRouter>
    </div>
  );
};

export default App;
