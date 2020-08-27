import React from "react";

const UserInfo = ({ name, entries }) => {
  return (
    <div>
      <h2 style={{ color: "white" }}>
        Hi {name.toUpperCase()}, Your current rank is ...
      </h2>
      <h1 style={{ color: "white" }}>{entries}</h1>
    </div>
  );
};

export default UserInfo;
