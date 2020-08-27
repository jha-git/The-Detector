import React from "react";
import "./Box.css";

const Box = ({ clari, height, width, name, pre_value }) => {
  const leftCol = clari.left_col * width;
  const topRow = clari.top_row * height;
  const rightCol = width - clari.right_col * width;
  const bottomRow = height - clari.bottom_row * height;
  return (
    <div
      className="bounding-box"
      style={{ top: topRow, right: rightCol, bottom: bottomRow, left: leftCol }}
    >
      <span className="corner-name">{name}</span>
      {/*<span className='corner-prediction'>{pre_value}</span>*/}
    </div>
  );
};

export default Box;
