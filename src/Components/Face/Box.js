import React from "react";

const Box = ({ clari, height, width }) => {
  const leftCol = clari.left_col * width;
  const topRow = clari.top_row * height;
  const rightCol = width - clari.right_col * width;
  const bottomRow = height - clari.bottom_row * height;
  return (
    <div
      className="bounding-box"
      style={{ top: topRow, right: rightCol, bottom: bottomRow, left: leftCol }}
    ></div>
  );
};

export default Box;
