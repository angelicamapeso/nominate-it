import React from "react";
import { useMediaQuery } from "react-responsive";
import NomineeList from "../NomineeList";
import NomineeToggle from "../NomineeToggle";
import "./style.css";

function PendingNominees() {
  const isLarge = useMediaQuery({ query: "(min-width: 992px)" });
  return (
    <section
      className="d-flex flex-column justify-content-end"
      id="nominee-section"
    >
      <div className="d-flex flex-row">
        <NomineeToggle target="nomineeList" />
      </div>
      <div className={"collapse " + (isLarge ? "show" : "")} id="nomineeList">
        <NomineeList />
      </div>
    </section>
  );
}

export default PendingNominees;
