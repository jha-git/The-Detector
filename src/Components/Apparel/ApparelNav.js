import React from "react";
/*import Tilt from 'react-tilt';
import Logo from './Logo.png'*/
import "./ApparelNav.css";
import Profile from "../Profile";

class ApparelNav extends React.Component {
  render() {
    return (
      <div className="nav">
        {/*<div className='ma4'>
							<Tilt className="Tilt br4 shadow-5" options={{ max : 75}} style={{ height: 100, width: 150 }} >
						 <div className="Tilt-inner"> <img src={Logo} alt='Logo'/> 
						 </div>
						 </Tilt> 
							</div>*/}
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
