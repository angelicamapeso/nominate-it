import React from "react";
import { useMediaQuery } from "react-responsive";
import NomineeList from "../NomineeList";
import NomineeToggle from "../NomineeToggle";
import Error from "../Error";
import { usePending } from "../../utils/PendingContext";
import "./style.css";

function PendingNominees() {
  const isLarge = useMediaQuery({ query: "(min-width: 992px)" });
  const { errMessage, pending, setErrMessage } = usePending();

  const error = errMessage ? (
    <Error dismissible={true} onClick={() => setErrMessage("")}>
      {errMessage}
    </Error>
  ) : (
    <></>
  );
  return (
    <section
      className="d-flex flex-column justify-content-end"
      id="nominee-section"
    >
      {error}
      <div className="d-flex flex-row">
        <NomineeToggle target="nomineeList" count={pending.length} />
      </div>
      <div className={"collapse " + (isLarge ? "show" : "")} id="nomineeList">
        <NomineeList />
      </div>
    </section>
  );
}

export default PendingNominees;
