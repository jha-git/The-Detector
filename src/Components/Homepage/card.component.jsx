import React from "react";

import "./card.styles.scss";

class Card extends React.Component {
  onRouteChange = (route) => {
    this.props.onRouteChange(route);
  };

  render() {
    return (
      <div
        className="cardh"
        onClick={() => {
          this.props.routeChange(this.props.route);
        }}
      >
        <div className="cardh__imagebox">
          <img src={this.props.imageUrl} alt="phones" />
          <div className="cardh__title">
            <h4> {this.props.title} </h4>
          </div>
        </div>

        <div className="cardh__details">
          <p>{this.props.description}</p>
        </div>
      </div>
    );
  }
}

export default Card;

// const Card =({title,imageUrl,description, route,...otherStateProps})=>(
//     <div className='card' onClick={()=>{this.props.onRouteChange(route)}} >
//         <div className='card__imagebox'>

//             <img src={imageUrl} alt='phones'/>
//             <div className='card__title'>
//                 <h4> {title}  </h4>
//             </div>
//         </div>

//         <div className='card__details'>
//             <p>{description}</p>
//         </div>
//     </div>

//     );
