import { Router } from "express";
import { MovieList } from "../models/index.js";

const router = Router();

router.get("/", async (req, res) => {
  const result = await MovieList.find({}).populate("movie_data");
  res.send(result);
});

export default router;
