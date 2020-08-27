import React from "react";
import "../FaceRecognition.css";
import Clarifai from "clarifai";
import BoxList from "./BoxList";
import Details from "./Details";

const app = new Clarifai.App({ apiKey: "API_KEY" });

class FaceRec extends React.Component {
  constructor() {
    super();
    this.state = {
      input: "",
      imageUrl: "",
      result: [],
      height: 0,
      width: 0,
      age: 0,
      age_prob: 0,
      gender: "",
      gender_prob: "",
      multicultural: "",
      multicultural_prob: "",
    };
  }

  FaceBox = (data) => {
    const result = data.outputs[0].data.regions;

    const age = data.rawData.outputs[0].data.regions[0].data.concepts[0].name;
    const age_prob =
      data.rawData.outputs[0].data.regions[0].data.concepts[0].value;

    const gender =
      data.rawData.outputs[0].data.regions[0].data.concepts[20].name;
    const gender_prob =
      data.rawData.outputs[0].data.regions[0].data.concepts[20].value;

    const multicultural =
      data.rawData.outputs[0].data.regions[0].data.concepts[22].name;
    const multicultural_prob =
      data.rawData.outputs[0].data.regions[0].data.concepts[22].value;

    console.log(age);
    console.log(age_prob);

    console.log(gender);
    console.log(gender_prob);

    console.log(multicultural);
    console.log(multicultural_prob);

    this.setState({ result: result });
    const image = document.getElementById("imageFace");
    const height = Number(image.height);
    const width = Number(image.width);

    this.setState({
      height: height,
      width: width,
      age: age,
      age_prob: age_prob,
      gender: gender,
      gender_prob: gender_prob,
      multicultural: multicultural,
      multicultural_prob: multicultural_prob,
    });
  };

  onButtonSubmit = () => {
    this.setState({
      imageUrl: this.state.input,
    });
    app.models
      .predict("c0c0ac362b03416da06ab3fa36fb58e3", this.state.input)
      .then(
        (response) => {
          if (response) {
            this.props.onResponse(response);
            console.log(response);
          }
          this.FaceBox(response);
        },
        function (err) {
          // there was an error
        }
      );
  };

  onInputChange = (event) => {
    this.setState({ input: event.target.value });
  };

  render() {
    return (
      <div className="center facerec__home ">
        <div className="center section pa3 br3 shadow-5 center ">
          <input
            onChange={this.onInputChange}
            placeholder="Image Link..."
            type="text"
          />
          <button
            onClick={this.onButtonSubmit}
            className="detect b pointer pa2 br3 shadow-5 grow"
            type="submit"
          >
            Detect
          </button>
        </div>
        <div className="cente">
          <div className="absolute ">
            <img
              className="br4 shadow-5"
              id="imageFace"
              alt=""
              src={this.state.imageUrl}
            />
            <BoxList
              height={this.state.height}
              width={this.state.width}
              boxes={this.state.result}
            />
          </div>
        </div>
        <Details
          age={this.state.age}
          age_prob={this.state.age_prob}
          gender={this.state.gender}
          gender_prob={this.state.gender_prob}
          multicultural={this.state.multicultural}
          multicultural_prob={this.state.multicultural_prob}
        />
      </div>
    );
  }
}
export default FaceRec;
