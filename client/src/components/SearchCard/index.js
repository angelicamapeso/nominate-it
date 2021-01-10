import React from "react";
import Button from "../Button";
import "./style.css";

function SearchCard(props) {
  return (
    <div className="card flex-row my-3">
      <img
        className="card-image border-right"
        alt="Full Metal Jacket"
        src="https://upload.wikimedia.org/wikipedia/en/thumb/9/99/Full_Metal_Jacket_poster.jpg/220px-Full_Metal_Jacket_poster.jpg"
      />
      <div className="card-body p-0 d-flex flex-column justify-content-between">
        <p className="h5 p-3">Me And You And Everyone We Know (1978)</p>
        <Button
          className="stretched-link py-2 card-button"
          theme={props.pending ? "dark" : "grey"}
        >
          <i
            className={
              "fas mr-2 " +
              (props.pending ? "fa-times-circle" : "fa-plus-circle")
            }
          ></i>
          {props.pending ? "Remove" : "Nominate"}
        </Button>
      </div>
    </div>
  );
}

export default SearchCard;
