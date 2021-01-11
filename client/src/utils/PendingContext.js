import React, { useEffect, useState } from "react";
import { sendNominees } from "./API.js";

const PendingContext = React.createContext();

export function PendingProvider(props) {
  // list of pending nominees
  const [pending, setPending] = useState([]);
  const [errMessage, setErrMessage] = useState("");
  const [statusMessage, setStatusMessage] = useState("");
  const [justSent, setJustSent] = useState({});

  useEffect(() => {
    // console.log(pending);
    if (pending.length === 5) {
      setStatusMessage(
        "You now have 5 nominations! Whenever you're ready, you can send them in."
      );
    } else {
      setStatusMessage("");
    }
  }, [pending]);

  useEffect(() => {
    if (justSent.data) {
      setStatusMessage("Success! Your nominations have been submitted.");
      setJustSent({});
    }
  }, [justSent]);

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

  // send pending
  const sendPending = () => {
    if (pending.length === 5) {
      sendNominees(pending)
        .then(response => {
          if (response.data) {
            setPending([]);
            setJustSent({ data: response.data });
          } else if (response.error) {
            setErrMessage(
              "Sorry! Something went wrong. Please try again later."
            );
          }
        })
        .catch(() => {
          setErrMessage("Sorry! Something went wrong. Please try again later.");
        });
    } else {
      setErrMessage("You must have exactly 5 nominations to send them in!");
    }
  };

  return (
    <PendingContext.Provider
      value={{
        pending,
        errMessage,
        statusMessage,
        setErrMessage,
        addPending,
        removePending,
        sendPending,
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
