import React from "react";
import "./ApparelNav.css";
import Profile from "../Profile";

class ApparelNav extends React.Component {
  render() {
    return (
      <div className="nav">
        <div className="ma4">
          <h1
            className="font main_title"
            onClick={() => {
              this.props.onRouteChange("home");
            }}
          >
            {" "}
            THE DETECTOR{" "}
          </h1>
        </div>

        <div>
          <Profile id={this.props.id} />
        </div>

        <div className="button_corner">
          <button
            className="b signout pointer pa2 br3 shadow-5 grow "
            style={{ display: "flex", justifyContent: "flex-end" }}
            onClick={() => {
              this.props.onRouteChange("user");
            }}
          >
            Users List
          </button>

          <button
            className="b signout pointer pa2 br3 shadow-5 grow "
            style={{ display: "flex", justifyContent: "flex-end" }}
            onClick={() => {
              this.props.onRouteChange("demography");
            }}
          >
            Demography
          </button>

          <button
            className="b signout pointer pa2 br3 shadow-5 grow "
            style={{ display: "flex", justifyContent: "flex-end" }}
            onClick={() => {
              this.props.onRouteChange("signin");
            }}
          >
            Sign Out
          </button>
        </div>
      </div>
    );
  }
}

export default ApparelNav;
