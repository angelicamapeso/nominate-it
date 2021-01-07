import { Router } from "express";
import axios from "axios";

import { getBaseURL } from "../utils/getter.js";

const router = Router();

router.get("/", async (req, res) => {
  try {
    const movieLists = await axios.get(`${getBaseURL()}/api`);
    const movies = JSON.stringify(movieLists.data);
    res.send(movies);
  } catch (err) {
    console.log(err);
    res.status(500).send({ error: err.message });
  }
});

export default router;
