import React from "react";
import "./Navigation.css";
import Profile from "../Profile";

class Navigation extends React.Component {
  render() {
    return (
      <div className="nav">
        <div
          className="ma4"
          onClick={() => {
            this.props.onRouteChange("home");
          }}
        >
          <h1 className="font main_title"> THE DETECTOR</h1>
        </div>

        <div>
          <Profile id={this.props.id} />
        </div>

        <div className="button_corner">
          <p
            className="b signout pointer pa2 br3 shadow-5 grow "
            style={{ display: "flex", justifyContent: "flex-end" }}
            onClick={() => {
              this.props.onRouteChange("general");
            }}
          >
            Generals
          </p>

          <p
            className="b signout pointer pa2 br3 shadow-5 grow "
            style={{ display: "flex", justifyContent: "flex-end" }}
            onClick={() => {
              this.props.onRouteChange("apparel");
            }}
          >
            Apparels
          </p>

          <p
            className="b signout pointer pa2 br3 shadow-5 grow "
            style={{ display: "flex", justifyContent: "flex-end" }}
            onClick={() => {
              this.props.onRouteChange("signin");
            }}
          >
            Sign Out
          </p>
        </div>
      </div>
    );
  }
}

export default Navigation;
