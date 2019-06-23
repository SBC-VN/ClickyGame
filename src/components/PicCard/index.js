import React from "react";
import "./style.css";

function PicCard(props) {
  return (
      <div className="img-container">
        <img alt={props.name} src={props.image} 
             onClick={() => props.cardClick(props.id)}/>
      </div>
  );
}

export default PicCard;