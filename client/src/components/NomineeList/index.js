import React from "react";
import "./style.css";

function NomineeList(props) {
  return <ol className={"nominees " + props.className}>{props.children}</ol>;
}

export default NomineeList;
