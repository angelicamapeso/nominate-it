import React from "react";
import { useMediaQuery } from "react-responsive";
import { usePending } from "../../utils/PendingContext";
import Button from "../Button";
import "./style.css";

function NomineeToggle(props) {
  const isLarge = useMediaQuery({ query: "(min-width: 992px)" });
  const { sendPending } = usePending();

  const title = (
    <div
      className="d-flex flex-row justify-content-between align-items-center flex-grow-1"
      id="pending-title"
    >
      <p className="h4 mb-0">
        <span id="pending-count">{props.count}</span> of 5 Nominations
      </p>
    </div>
  );

  const toggler = (
    <Button
      className="flex-grow-1"
      id="pending-title"
      theme="dark"
      type="button"
      data-toggle="collapse"
      data-target={"#" + props.target}
      aria-expanded="false"
      aria-controls={props.target}
    >
      <p className="h6 d-flex flex-row justify-content-between align-items-center mb-0">
        <span>
          <span id="pending-count">{props.count}</span> of 5 Nominations
        </span>
        <i className="fas fa-pen"></i>
      </p>
    </Button>
  );

  return (
    <>
      {isLarge ? title : toggler}
      <Button
        theme="light"
        className="p-3"
        id="send-nominations"
        onClick={() => sendPending()}
      >
        <i className="fas fa-paper-plane"></i>
      </Button>
    </>
  );
}

export default NomineeToggle;
