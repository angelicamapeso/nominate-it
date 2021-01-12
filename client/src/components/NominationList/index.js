import React from "react";
import "./style.css";

function NominationList(props) {
  return (
    <ol className={"nominations " + props.className}>
      {props.cards.map((card, index) => (
        <li key={index} className="d-flex flex-row mb-3">
          {card}
        </li>
      ))}
    </ol>
  );
}

export default NominationList;
