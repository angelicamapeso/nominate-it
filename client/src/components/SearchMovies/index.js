import React, { useState } from "react";
import Error from "../Error";
import SearchTitle from "../SearchTitle";
import SearchCard from "../SearchCard";
import SearchForm from "../SearchForm";
import { usePending } from "../../utils/PendingContext";

function SearchMovies() {
  const { addPending, removePending } = usePending();
  const [search, setSearch] = useState({
    movies: [],
    totalResults: 0,
    searchTerm: "",
  });

  const setNominate = (imdbID, nominateBool) => {
    const changedMovies = search.movies.map(movie => {
      if (movie.imdbID === imdbID) {
        nominateBool ? addPending(movie) : removePending(imdbID);
        movie.pending = nominateBool;
      }
      return movie;
    });
    setSearch({ ...search, movies: changedMovies });
  };

  return (
    <div className="row">
      <div className="col">
        <div className="row mt-4">
          <div className="col">
            <SearchForm setSearch={setSearch} />
          </div>
        </div>
        <div className="row mt-4">
          <div className="col">
            {search.err ? (
              <Error>{search.err}</Error>
            ) : (
              <SearchTitle
                totalResults={search.totalResults}
                searchTerm={search.searchTerm}
              />
            )}
          </div>
        </div>
        <div className="row">
          {search.movies
            ? search.movies.map((movie, index) => (
                <div className="col-6 d-flex" key={index}>
                  <SearchCard
                    movie={movie}
                    nominate={() => setNominate(movie.imdbID, true)}
                    unnominate={() => setNominate(movie.imdbID, false)}
                  />
                </div>
              ))
            : ""}
        </div>
      </div>
    </div>
  );
}

export default SearchMovies;
