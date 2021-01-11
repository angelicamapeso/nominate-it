export function formatOMDBMovie(movie) {
  return {
    title: movie.Title,
    year: movie.Year,
    imdbID: movie.imdbID,
    poster: movie.Poster,
  };
}

// need to make a deep copy of nominees
// since removing the pending property
export function formatToSend(nominees) {
  const toSend = [];
  for (const nominee of nominees) {
    const toFormat = { ...nominee };
    delete toFormat.pending;
    toSend.push(toFormat);
  }
  return toSend;
}
