import { Router } from "express";
import { Movie, MovieList } from "../models/index.js";

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
  // To ensure unique movie data
  const bulkMovies = req.body.movies.map(movie => ({
    updateOne: {
      filter: { imdbID: movie.imdbID },
      update: movie,
      upsert: true,
    },
  }));
  const bulkMovieResult = await Movie.bulkWrite(bulkMovies);
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
