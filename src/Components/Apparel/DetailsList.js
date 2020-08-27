import React from "react";
import ApparelDetails from "./ApparelDetails";
import "./DetailsList.css";

const DetailsList = ({ apparels }) => {
  const apparelsList = apparels.map((user, i) => {
    return (
      <ApparelDetails
        key={i}
        name={apparels[i].data.concepts[0].name}
        pre_value={apparels[i].data.concepts[0].value}
      />
    );
  });

  return (
    <div>
      <div className="app-details">
        <h2>Apparels</h2>

        <div className="app-main-item">
          <h3>Predicted</h3>
          <h3>Probability</h3>
        </div>

        <div>{apparelsList}</div>
      </div>
    </div>
  );
};
export default DetailsList;
