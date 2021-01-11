import React from "react";
import { useMediaQuery } from "react-responsive";
import NomineeCard from "../NomineeCard";
import NomineeList from "../NomineeList";
import NomineeToggle from "../NomineeToggle";
import Alert from "../Alert";
import { usePending } from "../../utils/PendingContext";
import "./style.css";

function PendingNominees() {
  const isLarge = useMediaQuery({ query: "(min-width: 992px)" });
  const {
    errMessage,
    statusMessage,
    pending,
    removePending,
    setErrMessage,
  } = usePending();

  const error = errMessage ? (
    <Alert
      className={!isLarge ? "mb-0 rounded-0" : ""}
      dismissible={true}
      type="warning"
      onClick={() => setErrMessage("")}
    >
      {errMessage}
    </Alert>
  ) : (
    <></>
  );

  const status = statusMessage ? (
    <Alert className={!isLarge ? "mb-0 rounded-0" : ""} type="success">
      {statusMessage}
    </Alert>
  ) : (
    <></>
  );

  return (
    <section
      className="d-flex flex-column justify-content-end"
      id="nominee-section"
    >
      {status}
      {error}
      <div className="d-flex flex-row">
        <NomineeToggle target="nomineeList" count={pending.length} />
      </div>
      <div className={"collapse " + (isLarge ? "show" : "")} id="nomineeList">
        <NomineeList className="px-5 px-lg-0 py-3">
          {pending.map(movie => (
            <NomineeCard
              key={movie.imdbID}
              movie={movie}
              removePending={() => removePending(movie.imdbID)}
            />
          ))}
        </NomineeList>
      </div>
    </section>
  );
}

export default PendingNominees;
