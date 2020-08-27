import React from "react";
import "../Apparel/ApparelDetails.css";

const PatternDetail = ({ name, value }) => {
  return (
    <div className="Apparelcontainer">
      <div className="Apparelitems">
        <h3>{name}</h3>
        <h3>{value}</h3>
      </div>
    </div>
  );
};

export default PatternDetail;
