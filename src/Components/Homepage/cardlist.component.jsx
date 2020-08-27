import React from "react";
import Card from "./card.component";
import "./cardlist.styles.scss";

import Image1 from "../assets/user-1.jpg";
import Image2 from "../assets/product2.jpg";
import Image3 from "../assets/product3.jpg";
import Image4 from "../assets/product4.png";
import Image5 from "../assets/product5.jpg";
import Image6 from "../assets/product6.jpg";

class Cardlist extends React.Component {
  constructor() {
    super();

    this.state = {
      sections: [
        {
          title: "Demography Analysis",
          imageUrl: Image1,
          description: "Predict the age, gender and cultural appearance",
          id: 1,
          route: "demography",
        },
        {
          title: "Apparels Detection",
          imageUrl: Image2,
          description:
            "Recognize clothing, accessories and fashion related items",
          id: 2,
          route: "apparel",
        },
        {
          title: "Generals",
          imageUrl: Image3,
          description:
            "Detect the general objects, concepts,scenes and lot more",
          id: 3,
          route: "general",
        },
        {
          title: "Face Detection",
          imageUrl: Image4,
          description: "Detect the presence and location of faces in image",
          id: 4,
          route: "demography",
        },
        {
          title: "Color Detection",
          imageUrl: Image5,
          description: "Detect the dominant color in the image",
          id: 5,
          route: "color",
        },
        {
          title: "Texture and Patterns",
          imageUrl: Image6,
          description: "Identify Texture and Patterns in the image",
          id: 6,
          route: "pattern",
        },
      ],
    };
  }

  routeChange = (route) => {
    this.props.onRouteChange(route);
  };

  render() {
    return (
      <div className="cardlist">
        {this.state.sections.map(({ id, ...otherStateProps }) => (
          <Card key={id} routeChange={this.routeChange} {...otherStateProps} />
        ))}
      </div>
    );
  }
}

export default Cardlist;
