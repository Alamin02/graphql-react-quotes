import React from 'react';
import './App.scss';
import Navbar from "./components/Navbar";
import QuoteList from "./components/QuoteList";
import { Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="container">
        <Switch>
          <Route exact path="/" component={QuoteList} />
        </Switch>
      </div>
    </div>
  );
}

export default App;
