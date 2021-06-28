import React, { Component } from "react";
import "./popup.css";

export default class Popup extends Component {
  render() {
    console.log(this.props);
		const {name, flag, region, capital, population} = this.props.country;
    return (
      <div className="pop-up">
        <div className="country-container">
          <div className="close" onClick={this.props.clickFunction}>
            X
          </div>
          <div className="country-info">
            <img
              className="country-flag"
              src={flag}
              alt=""
            />
							<h3>{name}</h3>
							<p>Region: {region}</p>
							<p>Capital: {capital}</p>
							<p>Population: {population}</p>
          </div>
        </div>
      </div>
    );
  }
}
