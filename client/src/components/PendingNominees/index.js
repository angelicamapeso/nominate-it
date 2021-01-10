import React from "react";
import { useMediaQuery } from "react-responsive";
import Button from "../../components/Button";
import "./style.css";

function PendingNominees() {
  const isLarge = useMediaQuery({ query: "(min-width: 992px)" });

  const editButton = !isLarge ? (
    <Button
      theme="dark"
      id="pending-edit"
      type="button"
      data-toggle="collapse"
      data-target="#nomineeList"
      aria-expanded="false"
      aria-controls="nomineeList"
    >
      <i className="fas fa-pen"></i>
    </Button>
  ) : (
    <></>
  );

  return (
    <section className="d-flex flex-column" id="nominee-section">
      <div className="d-flex flex-row">
        <div
          className="d-flex flex-row justify-content-between flex-grow-1"
          id="pending-title"
        >
          <h2>
            <span id="pending-count">5</span> of 5 Nominations
          </h2>
        </div>
        {editButton}
        <Button theme="light">
          <i className="fas fa-paper-plane"></i>
        </Button>
      </div>
      <div className={"collapse" + (isLarge ? "show" : "")} id="nomineeList">
        <ul>
          <li>List of items</li>
          <li>List of items</li>
          <li>List of items</li>
          <li>List of items</li>
          <li>List of items</li>
        </ul>
      </div>
    </section>
  );
}

export default PendingNominees;
