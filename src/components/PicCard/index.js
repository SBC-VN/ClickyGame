import React from "react";
import "./style.css";

function PicCard(props) {
  console.log("clicker",props.cardClick);
  return (
      props.show ?
      <div className="img-container" onClick={() => props.cardClick(props.id)}>
        <img alt={props.name} src={props.image} />
      </div>
      : <span></span>
  );
}

export default PicCard;