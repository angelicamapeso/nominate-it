import mongoose from "mongoose";
const { Schema } = mongoose;

const movieListSchema = new Schema(
  {
    // movies saved with imdbID
    movieIDs: {
      type: [String],
      validate: [
        movies => movies.length === 5,
        "Movie list must have 5 movies.",
      ],
    },
  },
  { id: false }
);

movieListSchema.virtual("movies", {
  ref: "Movie",
  localField: "movieIDs",
  foreignField: "imdbID",
});

movieListSchema.set("toObject", { virtuals: true });
movieListSchema.set("toJSON", { virtuals: true });

const MovieList = mongoose.model("MovieList", movieListSchema);
export default MovieList;
