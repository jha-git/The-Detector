import React from "react";
import CardList from "./CardList";
import SearchBox from "./SearchBox";
import Title from "./Title.js";
import SProfile from "./SProfile.js";
import "./Robots.css";

class Robots extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      search: "",
      Robots: this.props.Robots,
      user: {
        id: "",
        name: "",
        email: "",
        password: "",
        joined: "",
      },
    };
  }

  userData = (users) => {
    this.setState({
      user: {
        id: users.id,
        name: users.name,
        email: users.email,
      },
    });
  };

  routeChanging = () => {
    this.props.onRouteChange("signin");
    console.log(this.state.Robots);
  };
  routeChangeHome = () => {
    this.props.onRouteChange("home");
  };

  onChangeSearch = (event) => {
    this.setState({ search: event.target.value });
  };

  render() {
    const Filter = this.state.Robots.filter((Robots) => {
      return Robots.name
        .toLowerCase()
        .includes(this.state.search.toLowerCase());
    });

    return (
      <div className="tc robots">
        <SProfile id={this.props.id} routeChangeHome={this.routeChangeHome} />
        <div className="fix br4 ma2 dib">
          <Title />
          <SearchBox
            onChangeSearch={this.onChangeSearch}
            routeChanging={this.routeChanging}
          />
        </div>
        <br />
        <CardList Robots={Filter} />
      </div>
    );
  }
}

export default Robots;
