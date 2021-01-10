import React from "react";
import { useMediaQuery } from "react-responsive";
import Button from "../../components/Button";
import "./style.css";

function PendingNominees() {
  const isLarge = useMediaQuery({ query: "(min-width: 992px)" });

  const title = !isLarge ? (
    <Button
      className="flex-grow-1"
      id="pending-title"
      theme="dark"
      type="button"
      data-toggle="collapse"
      data-target="#nomineeList"
      aria-expanded="false"
      aria-controls="nomineeList"
    >
      <p className="h6 d-flex flex-row justify-content-between align-items-center mb-0">
        <span>
          <span id="pending-count">5</span> of 5 Nominations
        </span>
        <i className="fas fa-pen"></i>
      </p>
    </Button>
  ) : (
    <div
      className="d-flex flex-row justify-content-between align-items-center flex-grow-1"
      id="pending-title"
    >
      <p className="h4 mb-0">
        <span id="pending-count">5</span> of 5 Nominations
      </p>
    </div>
  );

  return (
    <section className="d-flex flex-column" id="nominee-section">
      <div className="d-flex flex-row">
        {title}
        <Button theme="light" className="p-3" id="send-nominations">
          <i className="fas fa-paper-plane"></i>
        </Button>
      </div>
      <div className={"collapse" + (isLarge ? "show" : "")} id="nomineeList">
        <ol>
          <li>List of items</li>
          <li>List of items</li>
          <li>List of items</li>
          <li>List of items</li>
          <li>List of items</li>
        </ol>
      </div>
    </section>
  );
}

export default PendingNominees;
