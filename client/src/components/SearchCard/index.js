import React from "react";
import Button from "../Button";
import "./style.css";

function SearchCard(props) {
  return (
    <div className="card flex-row my-3">
      <img
        className="card-image border-right"
        alt="Full Metal Jacket"
        src={
          props.movie.poster !== "N/A" ? props.movie.poster : "top-5-empty.png"
        }
      />
      <div className="card-body p-0 d-flex flex-column justify-content-between">
        <p className="h5 p-3">
          {props.movie.title} ({props.movie.year})
        </p>
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
