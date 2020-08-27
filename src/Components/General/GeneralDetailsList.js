import React from "react";
import GeneralDetails from "./GeneralDetails";
import "../Apparel/DetailsList.css";

const GeneralDetailsList = ({ general }) => {
  const generalsList = general.map((user, i) => {
    return (
      <GeneralDetails
        key={i}
        name={general[i].name}
        pre_value={general[i].value}
      />
    );
  });

  return (
    <div>
      <div className="app-details">
        <h2>Generals</h2>

        <div className="app-main-item">
          <h3>Predicted</h3>
          <h3>Probability</h3>
        </div>

        <div>{generalsList}</div>
      </div>
    </div>
  );
};
export default GeneralDetailsList;
