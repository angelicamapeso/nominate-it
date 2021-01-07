import { Router } from "express";
import { Movie, MovieList } from "../models/index.js";
import {
  formatBulkMoviesInsert,
  formatMovieListInsert,
} from "../utils/formatter.js";

const router = Router();

router.get("/", async (req, res) => {
  try {
    const result = await MovieList.find({}).populate("movies");
    res.send(result);
  } catch (err) {
    console.log(err);
    res.status(500).send({ error: err.message });
  }
});

router.post("/", async (req, res) => {
  try {
    // expected req.body includes all movie info
    // under movies property
    const bulkMovieResult = await Movie.bulkWrite(
      formatBulkMoviesInsert(req.body.movies)
    );
    // Stripping movie info to insert as list
    const movieListResult = await MovieList.create(
      formatMovieListInsert(req.body)
    );
    await movieListResult.populate("movies").execPopulate();
    res.status(201).send({
      data: { movieList: movieListResult, bulkMovieInsert: bulkMovieResult },
    });
  } catch (err) {
    console.log(err);
    res.status(500).send({ error: err.message });
  }
});

export default router;
