import React from "react";
import "./style.css";

function Button(props) {
  return (
    <button
      className={
        "btn " +
        (props.theme === "dark"
          ? "btn-dark-red"
          : props.theme === "light"
          ? "btn-light-red"
          : props.theme === "grey"
          ? "btn-grey"
          : "") +
        " " +
        props.className
      }
    >
      {props.children}
    </button>
  );
}

export default Button;
