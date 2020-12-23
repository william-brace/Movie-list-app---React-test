import React, { Component } from "react";
import "./App.css";
import MovieList from "./components/movieList";


class App extends Component {
  state = {};
  render() {
    return (
      <main className="container">
        <MovieList />
      </main>
    );
  }
}

export default App;
