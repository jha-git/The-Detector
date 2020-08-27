import React from "react";
import Card from "./Card";

const CardList = ({ Robots }) => {
  const Users = Robots.map((user, i) => {
    return (
      <Card
        key={i}
        id={Robots[i].id}
        name={Robots[i].name}
        email={Robots[i].email}
        entries={Robots[i].entries}
      />
    );
  });
  return <div className="card">{Users}</div>;
};

export default CardList;
