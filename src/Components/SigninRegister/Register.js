import React from "react";
import "./SignIn.css";

class Register extends React.Component {
  constructor() {
    super();
    this.state = {
      name: "",
      email: "",
      password: "",
    };
  }

  onName = (event) => {
    this.setState({
      name: event.target.value,
    });
  };

  onEmail = (event) => {
    this.setState({
      email: event.target.value,
    });
  };

  onPassword = (event) => {
    this.setState({
      password: event.target.value,
    });
  };
  onPushButton = () => {
    fetch("API_URL", {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: this.state.name,
        email: this.state.email,
        password: this.state.password,
      }),
    })
      .then((response) => response.json())
      .then((user) => {
        if (user) {
          this.props.onLoadUser(user);
          this.props.onRouteChange("home");
        }
      });
  };
  render() {
    return (
      <div className="">
        <div className=" title">
          <h1 className="font"> THE DETECTOR</h1>
        </div>
        <div className="signin__container">
          <h1>Register</h1>
          <div>
            <label>Name</label>
            <input
              onChange={this.onName}
              className="input pd4 ma2"
              type="text"
            />
          </div>

          <div>
            <label>Email</label>
            <input
              onChange={this.onEmail}
              className="input pd4 ma2"
              type="email"
            />
          </div>

          <div>
            <label>Password</label>
            <input
              onChange={this.onPassword}
              className="input pd4 ma2 "
              type="Password"
            />
          </div>

          <div>
            <button
              onClick={this.onPushButton}
              className="detect b pointer pa2 br3 shadow-5 grow"
              type="submit"
              style={{ margin: "20px 0px" }}
            >
              Register
            </button>
          </div>

          <div>
            <button
              className="detect b pointer pa2 br3 shadow-5 grow"
              type="submit"
              style={{ padding: "8px 14px" }}
              onClick={() => this.props.onRouteChange("signin")}
            >
              {" "}
              Sign In{" "}
            </button>
          </div>
        </div>
      </div>
    );
  }
}
export default Register;
