import React, { Component } from "react";
import "./services.css";
import img from "../images/header-bg.jpg";

export default class Services extends Component {
  render() {
    return (
      <div>
        <div className="services-main">
          <h1> SERVICES </h1>
          <p> Lorem ipsum dolor sit amet consectetur.</p>
        </div>
        <div className="services-content">
          <div className="service">
            <div className="services-img">
              <img src={img} alt="" />
            </div>
            <h1>E-Commerce</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima
              maxime quam architecto quo inventore harum ex magni, dicta
              impedit.
            </p>
          </div>
          <div className="service">
            <div className="services-img">
              <img src={img} alt="" />
            </div>
            <h1>Responsive Design</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima
              maxime quam architecto quo inventore harum ex magni, dicta
              impedit.
            </p>
          </div>
          <div className="service">
            <div className="services-img">
              <img src={img} alt="" />
            </div>
            <h1>Web Security</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima
              maxime quam architecto quo inventore harum ex magni, dicta
              impedit.
            </p>
          </div>
        </div>
      </div>
    );
  }
}
