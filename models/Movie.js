import mongoose from "mongoose";
const { Schema } = mongoose;

const movieSchema = new Schema({
  imdbID: {
    type: String,
    unique: true,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  year: {
    type: String,
    required: true,
  },
  rated: {
    type: String,
    required: true,
  },
  genre: {
    type: [String],
  },
  plot: {
    type: String,
  },
  poster: {
    type: String,
    required: true,
  },
});

const Movie = mongoose.model("Movie", movieSchema);
export default Movie;
