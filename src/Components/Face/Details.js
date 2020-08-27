import React from "react";
import "./Details.css";

const Details = ({
  age,
  age_prob,
  gender,
  gender_prob,
  multicultural,
  multicultural_prob,
}) => {
  return (
    <div className="details ">
      <div className="container">
        <div className="items main-item">
          <h2>Demographies</h2>
        </div>

        <div className="main-item">
          <div className="items">
            <h3>Age-Appearance</h3>
            <h3>Probability</h3>
          </div>

          <div className="items">
            <h3>{age}</h3>
            <h3>{age_prob}</h3>
          </div>
        </div>

        <div className="main-item">
          <div className="items">
            <h3>Gender-Appearance</h3>
            <h3>Probability</h3>
          </div>

          <div className="items">
            <h3>{gender}</h3>
            <h3>{gender_prob}</h3>
          </div>
        </div>

        <div className="main-item">
          <div className="items">
            <h3>Multicultural</h3>
            <h3>Probability</h3>
          </div>

          <div className="items">
            <h3>{multicultural}</h3>
            <h3>{multicultural_prob}</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
