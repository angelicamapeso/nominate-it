import { Router } from "express";
import { Movie, MovieList } from "../models/index.js";
import { formatBulkMovies, formatMovieListInsert } from "../utils/formatter.js";

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
  // expected req.body includes all movie info
  // under movies property
  const bulkMovieResult = await Movie.bulkWrite(
    formatBulkMovies(req.body.movies)
  );
  // Stripping movie info to insert as list
  const movieListResult = await MovieList.create(
    formatMovieListInsert(req.body)
  );
  await movieListResult.populate("movie_data").execPopulate();
  res.send({
    data: { movieList: movieListResult, bulkMovieInsert: bulkMovieResult },
  });
});

export default router;
