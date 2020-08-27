import React from "react";
import "../FaceRecognition.css";
import Clarifai from "clarifai";
import GeneralDetailsList from "./GeneralDetailsList";

const app = new Clarifai.App({ apiKey: "API_KEY" });

class General extends React.Component {
  constructor() {
    super();
    this.state = {
      input: "",
      imageUrl: "",
      result: [],
    };
  }

  Output = (data) => {
    const result = data.outputs[0].data.concepts;
    this.setState({ result: result });
  };

  onButtonSubmit = () => {
    this.setState({
      imageUrl: this.state.input,
    });
    app.models
      .predict("aaa03c23b3724a16a56b629203edc62c", this.state.input)
      .then(
        (response) => {
          if (response) {
            //this.props.onResponse(response);
          }
          this.Output(response);
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

        <GeneralDetailsList general={this.state.result} />
      </div>
    );
  }
}
export default General;
