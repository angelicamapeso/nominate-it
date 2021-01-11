import React from "react";
import "./style.css";

function NomineeList(props) {
  return (
    <ol className={"px-5 px-lg-0 py-3 nominees " + props.className}>
      {props.children}
    </ol>
  );
}

export default NomineeList;
