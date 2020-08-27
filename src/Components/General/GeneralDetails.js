import React from "react";
import "../Apparel/ApparelDetails.css";

const GeneralDetails = ({ name, pre_value }) => {
  return (
    <div className="Apparelcontainer">
      <div className="Apparelitems">
        <h3>{name}</h3>
        <h3>{pre_value}</h3>
      </div>
    </div>
  );
};

export default GeneralDetails;
