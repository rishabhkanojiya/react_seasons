import ReactDOM from "react-dom";
import React, { Component } from "react";
import SeasonDisp from "./SeasonDisp";
import Spinner from "./Spinner";

class App extends Component {
  state = { lat: null, errMsg: "" };

  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      position => {
        this.setState({ lat: position.coords.latitude });
      },
      err => {
        this.setState({ errMsg: err.message });
      }
    );
  }

  // helper method

  renderComp() {
    if (this.state.errMsg && !this.state.lat) {
      return <div>error : {this.state.errMsg}</div>;
    } else if (!this.state.errMsg && this.state.lat) {
      return <SeasonDisp lat={this.state.lat} />;
    } else {
      return <Spinner />;
    }
  }
  render() {
    return <div className="border red">{this.renderComp()}</div>;
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));
