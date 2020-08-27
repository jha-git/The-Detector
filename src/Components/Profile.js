import React from "react";
import "./Profile.css";

const Profile = ({ id }) => {
  return (
    <div>
      <img
        className=" floatRight profile br-100 pointer shadow-5 grow "
        alt="Profile"
        src={`https://robohash.org/${id}`}
        style={{ height: "150px", width: "150px" }}
      />
    </div>
  );
};

export default Profile;
