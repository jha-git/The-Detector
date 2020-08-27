import React from "react";

const Card = ({ id, name, email, entries }) => {
  return (
    <div className="br4 ma2 solid grow dib bg-light-blue pd1">
      <img alt="Robot" src={`https://robohash.org/${id}`} />

      <div className="center">
        <h3 className="f3">{name}</h3>
        <p>{email}</p>
        <p>Score:{entries}</p>
      </div>
    </div>
  );
};

export default Card;
