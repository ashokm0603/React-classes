import React from "react";

import "./cardstyle.css";
import CountItems from "./CountItems";
const Card = (props) => {
  return (
    <div>
      <div className="card-items">
        <img src={props.imageAddress} alt="" />
        <CountItems />
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Provident,
          tempora perspiciatis sapiente rem
        </p>
      </div>
    </div>
  );
};
export default Card;
