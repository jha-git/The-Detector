import React, { Component } from "react";
// import {Switch,Route} from 'react-router-dom';

import Homepage from "./Components/Homepage/homepage.component";
import Navigation from "./Components/Navigation/Navigation";
import FaceRec from "./Components/Face/FaceRecognition";
import UserInfo from "./Components/UserInfo";
import SignIn from "./Components/SigninRegister/SignIn";
import Register from "./Components/SigninRegister/Register";
import Robots from "./Components/Robots/Robots";
import Apparel from "./Components/Apparel/Apparel";
import General from "./Components/General/General";
import ApparelNav from "./Components/Apparel/ApparelNav";
import Footer from "./Components/Footer/footer.component";
import Cardlist from "./Components/Homepage/cardlist.component";
import Color from "./Components/Color/color.component";
import Pattern from "./Components/Pattern/pattern.component";

import "./App.css";
import Particles from "react-particles-js";

const params = {
  particles: {
    number: {
      value: 100,
      density: {
        enable: false,
      },
    },
    size: {
      value: 5,
      random: true,
    },
    move: {
      direction: "bottom",
      out_mode: "out",
    },
    line_linked: {
      enable: false,
    },
  },
  interactivity: {
    events: {
      onclick: {
        enable: true,
        mode: "remove",
      },
    },
    modes: {
      remove: {
        particles_nb: 10,
      },
    },
  },
};

class App extends Component {
  constructor() {
    super();
    this.state = {
      route: "signin",
      Robots: [],
      user: {
        id: "",
        name: "",
        email: "",
        password: "",
        entries: 0,
        joined: "",
      },
    };
  }

  allData = (Robots) => {
    this.setState({ Robots: Robots });
  };

  onRouteChange = (event) => {
    if (event === "demography") {
      this.setState({ route: "demography" });
    } else if (event === "register") {
      this.setState({ route: "register" });
    } else if (event === "signin") {
      this.setState({ route: "signin" });
    } else if (event === "apparel") {
      this.setState({ route: "apparel" });
    } else if (event === "general") {
      this.setState({ route: "general" });
    } else if (event === "color") {
      this.setState({ route: "color" });
    } else if (event === "pattern") {
      this.setState({ route: "pattern" });
    } else if (event === "home") {
      this.setState({ route: "home" });
    } else {
      this.setState({ route: "userList" });
    }
  };

  onLoadUser = (data) => {
    this.setState({
      user: {
        id: data.id,
        name: data.name,
        email: data.email,
        password: data.password,
        entries: data.entries,
        joined: data.joined,
      },
    });
  };

  onResponse = (response) => {
    fetch("API_URL", {
      method: "put",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        id: this.state.user.id,
      }),
    })
      .then((response) => response.json())
      .then((entry) => {
        this.setState(
          Object.assign(this.state.user, {
            entries: entry,
          })
        );
      });
  };

  render() {
    return (
      <div className="App ">
        <Particles className="particles" params={params} />
        {this.state.route === "demography" ? (
          <div>
            <Navigation
              onRouteChange={this.onRouteChange}
              id={this.state.user.id}
            />
            <UserInfo
              name={this.state.user.name}
              entries={this.state.user.entries}
            />
            <p>
              The Detector will detect Faces, Age, Gender and Multicultural
              Appearance in your picture.
            </p>
            <FaceRec onResponse={this.onResponse} />
            <Footer />
          </div>
        ) : this.state.route === "signin" ? (
          <div className="contain">
            <SignIn
              onLoadUser={this.onLoadUser}
              onRouteChange={this.onRouteChange}
              allData={this.allData}
            />
          </div>
        ) : this.state.route === "register" ? (
          <Register
            onLoadUser={this.onLoadUser}
            onRouteChange={this.onRouteChange}
          />
        ) : this.state.route === "apparel" ? (
          <div>
            <ApparelNav
              onRouteChange={this.onRouteChange}
              id={this.state.user.id}
            />
            <UserInfo
              name={this.state.user.name}
              entries={this.state.user.entries}
            />
            <p>The Detector will detect Apparels in your picture.</p>
            <Apparel onResponse={this.onResponse} />
            <Footer />
          </div>
        ) : this.state.route === "general" ? (
          <div>
            <ApparelNav
              onRouteChange={this.onRouteChange}
              id={this.state.user.id}
            />

            <UserInfo
              name={this.state.user.name}
              entries={this.state.user.entries}
            />
            <General />
            <Footer />
          </div>
        ) : this.state.route === "home" ? (
          <div>
            <Homepage />
            <Cardlist onRouteChange={this.onRouteChange} />
            <Footer />
          </div>
        ) : this.state.route === "color" ? (
          <div>
            <ApparelNav
              onRouteChange={this.onRouteChange}
              id={this.state.user.id}
            />

            <UserInfo
              name={this.state.user.name}
              entries={this.state.user.entries}
            />
            <Color onResponse={this.onResponse} />
            <Footer />
          </div>
        ) : this.state.route === "pattern" ? (
          <div>
            <ApparelNav
              onRouteChange={this.onRouteChange}
              id={this.state.user.id}
            />
            <UserInfo
              name={this.state.user.name}
              entries={this.state.user.entries}
            />
            <Pattern onResponse={this.onResponse} />
            <Footer />
          </div>
        ) : (
          <div>
            <Robots
              onRouteChange={this.onRouteChange}
              id={this.state.user.id}
              Robots={this.state.Robots}
            />
            <Footer />
          </div>
        )}
      </div>
    );
  }
}

export default App;
