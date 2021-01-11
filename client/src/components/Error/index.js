import React from "react";

function Error(props) {
  return (
    <div
      className={
        "alert alert-danger " +
        (props.dismissible ? `alert-dismissible fade show` : "")
      }
      role="alert"
    >
      {props.children}
      {props.dismissible ? (
        <button
          type="button"
          class="close"
          data-dismiss="alert"
          aria-label="Close"
        >
          <span aria-hidden="true">&times;</span>
        </button>
      ) : (
        ""
      )}
    </div>
  );
}

export default Error;
