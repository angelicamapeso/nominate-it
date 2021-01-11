const API_KEY = process.env.REACT_APP_API_KEY;

export function searchOMDB(title) {
  const url = `http://www.omdbapi.com/?s=${title}&type=movie&apikey=${API_KEY}`;
  return fetch(url)
    .then(response => response.json())
    .then(result =>
      result.Search.map(movie => ({
        title: movie.Title,
        year: movie.Year,
        imdbID: movie.imdbID,
        poster: movie.Poster,
      }))
    );
}
