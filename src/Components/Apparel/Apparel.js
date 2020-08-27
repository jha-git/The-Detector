import React from "react";
import "../FaceRecognition.css";
import Clarifai from "clarifai";
import BoxList from "./BoxList";
import DetailsList from "./DetailsList";
import "./Apparel.css";

const app = new Clarifai.App({ apiKey: "API_KEY" });

class Apparel extends React.Component {
  constructor() {
    super();
    this.state = {
      input: "",
      imageUrl: "",
      result: [],
      height: 0,
      width: 0,
    };
  }

  FaceBox = (data) => {
    const result = data.outputs[0].data.regions;
    this.setState({ result: result });

    const image = document.getElementById("imageFace");
    const height = Number(image.height);
    const width = Number(image.width);

    this.setState({
      height: height,
      width: width,
    });
  };

  onButtonSubmit = () => {
    this.setState({
      imageUrl: this.state.input,
    });
    app.models
      .predict("72c523807f93e18b431676fb9a58e6ad", this.state.input)
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
      <div className="center apparel__home">
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
          <BoxList
            height={this.state.height}
            width={this.state.width}
            boxes={this.state.result}
          />
        </div>

        <DetailsList id="apparel_detail" apparels={this.state.result} />
      </div>
    );
  }
}
export default Apparel;
