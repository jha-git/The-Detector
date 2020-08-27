import React from "react";
import ColorDetails from "./colordetail.component";
import "../Apparel/DetailsList.css";

const ColorDetailList = ({ colors }) => {
  const colorsList = colors.map((user, i) => {
    return (
      <ColorDetails key={i} hex={colors[i].w3c.hex} name={colors[i].w3c.name} />
    );
  });

  return (
    <div>
      <div className="app-details">
        <h2>Colors</h2>

        <div className="app-main-item">
          <h3>Hex</h3>
          <h3>Name</h3>
        </div>

        <div>{colorsList}</div>
      </div>
    </div>
  );
};
export default ColorDetailList;
