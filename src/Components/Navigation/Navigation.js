import React from "react";
/*import Tilt from 'react-tilt';
import Logo from './Logo.png'*/
import "./Navigation.css";
import Profile from "../Profile";

class Navigation extends React.Component {
  render() {
    return (
      <div className="nav">
        {/*<div className='ma4'>
							<Tilt className="Tilt br4 shadow-5" options={{ max : 75}} style={{ height: 100, width: 150 }} >
						 <div className="Tilt-inner"> <img src={Logo} alt='Logo'/> 
						 </div>
						 </Tilt> 
							</div>*/}
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
          {/*<button className='b signout pointer pa2 br3 shadow-5 grow '
						 style={{display:'flex',justifyContent: 'flex-end'}}
						 onClick={()=>{this.props.onRouteChange('user')}}
						 >Users List</button>*/}

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
