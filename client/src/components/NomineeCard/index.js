import React from "react";
import Button from "../Button";
import "./style.css";

function NomineeCard() {
  return (
    <li className="d-flex flex-row mb-3">
      <img
        className="card-image nominee-image border"
        alt="Full Metal Jacket"
        src="https://upload.wikimedia.org/wikipedia/en/thumb/9/99/Full_Metal_Jacket_poster.jpg/220px-Full_Metal_Jacket_poster.jpg"
      />
      <div className="card flex-grow-1 nominee-card">
        <div className="card-body p-0 d-flex flex-row justify-content-between">
          <p className="h6 p-3">Me and You and Everyone We Know (1978)</p>
          <Button theme="dark" className="remove-button stretched-link">
            <i className="fas fa-times-circle"></i>
          </Button>
        </div>
      </div>
    </li>
  );
}

export default NomineeCard;
