import React, { Component } from "react";
import "./Header.css";

export default class Header extends Component {
  constructor() {
    super();

    this.spry = this.spry.bind(this);
  }
  spry() {
    console.log("there is no Cow Level");
  }
  render() {
    return (
      <div className="header-main">
        <header className="header-container fixed-top">
          <p>Start Bootstrap</p>

          <div className="nav-bar-res">
            <p onClick={this.spry}> menu</p>
          </div>

          <nav className="nav-bar">
            <div className="nav-links">SERVICES</div>
            <div className="nav-links">PORTFOLIO</div>
            <div className="nav-links">ABOUT</div>
            <div className="nav-links">TEAM</div>
            <div className="nav-links">CONTACT</div>
          </nav>
        </header>
        <div className="header-content">
          <p>Welcome To Our Studio!</p>
          <h1>IT'S NICE TO MEET YOU</h1>

          <div className="box">TELL ME MORE</div>
        </div>
      </div>
    );
  }
}
