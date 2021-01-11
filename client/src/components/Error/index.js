import React from "react";

function Error(props) {
  return (
    <div className="alert alert-danger" role="alert">
      {props.children}
    </div>
  );
}

export default Error;
