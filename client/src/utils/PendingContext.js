import React, { useEffect, useState } from "react";

const PendingContext = React.createContext();

export function PendingProvider(props) {
  // list of pending nominees
  const [pending, setPending] = useState([]);
  const [errMessage, setErrMessage] = useState("");

  useEffect(() => {
    console.log(pending);
  }, [pending]);

  // add pending
  const addPending = movie => {
    if (pending.length >= 5) {
      setErrMessage(
        "Your nomination list is full! Remove a movie from your nomination list to add another."
      );
    } else {
      setPending([...pending, movie]);
    }
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
      value={{
        pending,
        errMessage,
        setErrMessage,
        addPending,
        removePending,
        markPendingOnSearch,
      }}
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
