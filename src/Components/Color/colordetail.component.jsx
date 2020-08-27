import React from "react";
import "../Apparel/ApparelDetails.css";

const ColorDetail = ({ name, hex }) => {
  return (
    <div className="Apparelcontainer">
      <div className="Apparelitems">
        <h3>{hex}</h3>
        <h3>{name}</h3>
      </div>
    </div>
  );
};

export default ColorDetail;
