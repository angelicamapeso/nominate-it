import React from "react";
import "./style.css";

function NomineeList(props) {
  return (
    <ol className={"nominees " + props.className}>
      {props.cards.map((card, index) => (
        <li key={index} className="d-flex flex-row mb-3">
          {card}
        </li>
      ))}
    </ol>
  );
}

export default NomineeList;
