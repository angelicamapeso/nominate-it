import React from "react";
import Button from "../Button";
import "./style.css";

function SearchCard() {
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
          className="w-100 align-self-end stretched-link py-2 card-button"
          theme="grey"
        >
          <i className="fas fa-plus-circle mr-2"></i>Nominate
        </Button>
      </div>
    </div>
  );
}

export default SearchCard;
