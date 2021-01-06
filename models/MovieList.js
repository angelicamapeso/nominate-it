import mongoose from "mongoose";
const { Schema } = mongoose;

const movieListSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  // movies saved with imdbID
  movies: {
    type: [String],
    validate: [movies => movies.length === 5, "Movie list must have 5 movies."],
  },
});

movieListSchema.virtual("movie_data", {
  ref: "Movie",
  localField: "movies",
  foreignField: "imdbID",
});

movieListSchema.set("toObject", { virtuals: true });
movieListSchema.set("toJSON", { virtuals: true });

const MovieList = mongoose.model("MovieList", movieListSchema);
export default MovieList;
