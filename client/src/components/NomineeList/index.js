import React from "react";
import NomineeCard from "../NomineeCard";
import "./style.css";

function NomineeList() {
  return (
    <ol className="px-5 px-lg-0 py-3 nominees">
      <NomineeCard pending={true} />
      <NomineeCard pending={true} />
      <NomineeCard pending={true} />
      <NomineeCard pending={true} />
      <NomineeCard pending={true} />
    </ol>
  );
}

export default NomineeList;
