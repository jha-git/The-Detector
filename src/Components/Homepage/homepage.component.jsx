import React from "react";
import "./homepage.styles.scss";

const Homepage = () => {
  return (
    <div className="homepage">
      <h1 className="font homepage__font">THE DETECTOR</h1>

      <div className="homepage__details">
        <h2 className="homepage__title">
          Endless possibilities with computer vision AI
        </h2>

        <p className="homepage__description">
          Gather valuable business insights from images, data and text using
          machine learning, image recognition and computer vision. Use data to
          drive business operations and enhance the customer experience. From
          improving the digital experience to monitoring physical spaces, the
          practical possibilities of computer vision AI are endless.
        </p>
      </div>
    </div>
  );
};

export default Homepage;
