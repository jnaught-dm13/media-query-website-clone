import React, { Component } from "react";
import "./App.css";
import Header from "./Components/Header/Header";
import Services from "./Components/Services/Services";
class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Services />
      </div>
    );
  }
}

export default App;
