import React from "react";
import NomineeCard from "../NomineeCard";
import { usePending } from "../../utils/PendingContext";
import "./style.css";

function NomineeList() {
  const { pending, removePending } = usePending();
  return (
    <ol className="px-5 px-lg-0 py-3 nominees">
      {pending.map(movie => (
        <NomineeCard
          key={movie.imdbID}
          movie={movie}
          removePending={() => removePending(movie.imdbID)}
        />
      ))}
    </ol>
  );
}

export default NomineeList;
