// Functions to format data

// takes an array of moves
// formats for bulk insert
export function formatBulkMovies(movies) {
  return movies.map(movie => ({
    updateOne: {
      filter: { imdbID: movie.imdbID },
      update: movie,
      upsert: true,
    },
  }));
}
