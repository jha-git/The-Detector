import React from "react";
import Box from "./Box";

const BoxList = ({ boxes, height, width }) => {
  const allFaces = boxes.map((user, i) => {
    return (
      <Box
        key={i}
        clari={boxes[i].region_info.bounding_box}
        name={boxes[i].data.concepts[0].name}
        //pre_value={boxes[i].data.concepts[0].value}
        height={height}
        width={width}
      />
    );
  });
  return <div>{allFaces}</div>;
};

export default BoxList;
