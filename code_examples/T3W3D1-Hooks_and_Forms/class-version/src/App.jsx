import React, { Component } from "react";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = { min: 15, seconds: 0 }
  }

  componentDidMount() {
    this.timeInterval = setInterval(() => {
      if (this.state.seconds === 0 && this.state.min === 0) {
      } else if (this.state.seconds === 0) {
        this.setState({ min: this.state.min - 1, seconds: 59 });
      } else {
        this.setState({ seconds: this.state.seconds - 1 });
      }
    }, 1000);
  }

  render() {
    return (
      <div>
        <h1>
          {this.state.min.toString().padStart(2,'0')}:{this.state.seconds.toString().padStart(2,'0')}
        </h1>
      </div>
    );
  }

  componentWillUnmount() {
    clearInterval(this.timeInterval);
  }
}
