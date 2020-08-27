import React from "react";
import "./SProfile.css";

const SProfile = ({ id, routeChangeHome }) => {
  return (
    <div>
      <div div="corner_nav">
        <button
          className="hidden_button pointer"
          onClick={routeChangeHome}
        ></button>

        <img
          className=" floatRight sprofile br-100 pointer shadow-5 grow "
          alt="Profile"
          src={`https://robohash.org/${id}`}
          style={{ height: "60px", width: "60px" }}
        />
      </div>

      <h1 className="floatRight text">Hi!</h1>
    </div>
  );
};

export default SProfile;
