import { Router } from "express";
import { Movie, MovieList } from "../models/index.js";
import { formatBulkMovies } from "../utils/formatter.js";

const router = Router();

router.get("/", async (req, res) => {
  try {
    const result = await MovieList.find({}).populate("movie_data");
    res.send(result);
  } catch (err) {
    console.log(err);
    res.status(500).send({ error: err.message });
  }
});

router.post("/", async (req, res) => {
  const bulkMovieResult = await Movie.bulkWrite(
    formatBulkMovies(req.body.movies)
  );
  // Stripping movie info to insert as list
  const movieIDs = req.body.movies.map(movie => movie.imdbID);
  const movieList = { ...req.body, movies: movieIDs };
  const movieListResult = await MovieList.create(movieList);
  await movieListResult.populate("movie_data").execPopulate();
  res.send({
    data: { movieList: movieListResult, bulkMovieInsert: bulkMovieResult },
  });
});

export default router;
