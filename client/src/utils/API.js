import { formatOMDBMovie, formatToSend } from "./formatter";
const API_KEY = process.env.REACT_APP_API_KEY;

export function searchOMDB(title) {
  const url = `https://www.omdbapi.com/?s=${title}&type=movie&apikey=${API_KEY}`;
  return fetch(url)
    .then(response => response.json())
    .then(result => {
      if (result.Response !== "False") {
        return {
          movies: result.Search.map(movie => formatOMDBMovie(movie)),
          totalResults: result.Search.length,
        };
      } else {
        return { err: result.Error };
      }
    });
}

export function sendNominations(nominations) {
  const toSend = formatToSend(nominations);
  return fetch("/api", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ movies: toSend }),
  }).then(result => result.json());
}

export function getNominations() {
  return fetch("/api").then(result => result.json());
}
