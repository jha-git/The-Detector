import React from "react";
import "./SignIn.css";

class SignIn extends React.Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
    };
  }

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
        email: this.state.email,
        password: this.state.password,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.userdata[0].id) {
          this.props.onLoadUser(data.userdata[0]);
          this.props.allData(data.alldata);
          console.log(data.alldata);
          this.props.onRouteChange("home");
        }
      })

      .catch((err) => {
        console.log("Error!");
      });

    /*.then(user=>{
			if(user.id){
				this.props.onLoadUser(user);
				this.props.onRouteChange('home');
			}
		})*/
  };

  render() {
    return (
      <div>
        <div className=" title">
          <h1 className="font"> THE DETECTOR</h1>
        </div>

        <div className="signin__container">
          <h1>Sign In</h1>
          <div>
            <label>Email</label>
            <input
              onChange={this.onEmail}
              className="input pd4 ma2"
              type="email"
            />
          </div>

          <div className="mt4">
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
              style={{ padding: "8px 14px", margin: "20px 0px" }}
            >
              {" "}
              Sign In{" "}
            </button>
          </div>

          <div>
            <button
              className="detect b pointer pa2 br3 shadow-5 grow"
              type="submit"
              onClick={() => this.props.onRouteChange("register")}
            >
              Register
            </button>
          </div>
        </div>
      </div>
    );
  }
}
export default SignIn;
