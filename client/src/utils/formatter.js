export function formatOMDBMovie(movie) {
  return {
    title: movie.Title,
    year: movie.Year,
    imdbID: movie.imdbID,
    poster: movie.Poster,
  };
}
