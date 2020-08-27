import React from "react";
import PatternDetail from "./patterndetail.component";
import "../Apparel/DetailsList.css";

const PatternDetailList = ({ pattern }) => {
  const patternList = pattern.map((user, i) => {
    return (
      <PatternDetail key={i} value={pattern[i].value} name={pattern[i].name} />
    );
  });

  return (
    <div>
      <div className="app-details">
        <h2>Patterns And Textures</h2>

        <div className="app-main-item">
          <h3>Pattern</h3>
          <h3>Probability</h3>
        </div>

        <div>{patternList}</div>
      </div>
    </div>
  );
};
export default PatternDetailList;
