import React, { Component } from "react";
import logo from "./logo.png";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} alt="logo" />
          <h1>Blaklið Íslands</h1>
          <strong>Styrktaraðilar</strong>
          <p>Pálmatré S:5539313</p>
        </header>
      </div>
    );
  }
}

export default App;
