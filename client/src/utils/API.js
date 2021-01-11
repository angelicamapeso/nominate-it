import { formatOMDBMovie } from "./formatter";
const API_KEY = process.env.REACT_APP_API_KEY;

export function searchOMDB(title) {
  const url = `http://www.omdbapi.com/?s=${title}&type=movie&apikey=${API_KEY}`;
  return fetch(url)
    .then(response => response.json())
    .then(result => {
      if (result.Response) {
        return {
          movies: result.Search.map(movie => formatOMDBMovie(movie)),
          totalResults: result.totalResults,
        };
      } else {
        return { err: result.Error };
      }
    });
}
