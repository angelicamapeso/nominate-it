import React, { useEffect, useState } from "react";

const PendingContext = React.createContext();

export function PendingProvider(props) {
  // list of pending nominees
  const [pending, setPending] = useState([]);

  useEffect(() => {
    console.log(pending);
  }, [pending]);

  // add pending
  const addPending = movie => {
    setPending([...pending, movie]);
  };

  // remove pending
  const removePending = imdbID => {
    const changedPending = pending.filter(movie => movie.imdbID !== imdbID);
    setPending(changedPending);
  };

  // to mark searches as pending
  const markPendingOnSearch = movie => {
    const movieCopy = { ...movie };
    const foundPending = pending.find(
      pending => pending.imdbID === movie.imdbID
    );
    foundPending ? (movieCopy.pending = true) : (movieCopy.pending = false);
    return movieCopy;
  };

  return (
    <PendingContext.Provider
      value={{ pending, addPending, removePending, markPendingOnSearch }}
      {...props}
    />
  );
}

export function usePending() {
  const context = React.useContext(PendingContext);
  if (!context) {
    throw new Error(
      "usePending must be called from a descendent of PendingProvider."
    );
  }

  return context;
}
