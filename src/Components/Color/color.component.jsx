import React from "react";
import "../FaceRecognition.css";
import Clarifai from "clarifai";
import ColorDetailList from "./colordetaillist.component";

const app = new Clarifai.App({ apiKey: "API_KEY" });

class Color extends React.Component {
  constructor() {
    super();
    this.state = {
      input: "",
      imageUrl: "",
      result: [],
    };
  }

  Output = (data) => {
    const result = data.outputs[0].data.colors;
    this.setState({ result: result });
    console.log(result[0].w3c.hex);
  };

  onButtonSubmit = () => {
    this.setState({
      imageUrl: this.state.input,
    });
    app.models
      .predict("eeed0b6733a644cea07cf4c60f87ebb7", this.state.input)
      .then(
        (response) => {
          if (response) {
            this.props.onResponse(response);
          }
          this.Output(response);
          console.log(response);
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
      <div className="center general__home ">
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

        <div className="absolute img-apparel">
          <img
            className="br4 shadow-5 "
            id="imageFace"
            alt=""
            src={this.state.imageUrl}
          />
        </div>

        <ColorDetailList colors={this.state.result} />
      </div>
    );
  }
}
export default Color;
