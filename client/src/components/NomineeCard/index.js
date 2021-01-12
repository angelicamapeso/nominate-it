import React from "react";
import Button from "../Button";
import "./style.css";

function NomineeCard(props) {
  return (
    <div className="d-flex flex-row card flex-grow-1 nominee-card">
      <img
        className="card-image nominee-image border-right"
        alt="Full Metal Jacket"
        src={
          props.movie.poster !== "N/A" ? props.movie.poster : "/top-5-empty.png"
        }
      />
      <div className="card-body p-0 d-flex flex-row justify-content-between">
        <p className="h6 p-3">
          {props.movie.title} ({props.movie.year})
        </p>
        {props.movie.pending ? (
          <Button
            theme="dark"
            className="remove-button stretched-link"
            onClick={props.removePending}
          >
            <i className="fas fa-times-circle"></i>
          </Button>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}

export default NomineeCard;
