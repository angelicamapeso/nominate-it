import React, { useState, useEffect } from "react";
import Error from "../Error";
import SearchTitle from "../SearchTitle";
import SearchCard from "../SearchCard";
import SearchForm from "../SearchForm";

function SearchMovies() {
  const [search, setSearch] = useState({
    movies: [],
    totalResults: 0,
    searchTerm: "",
  });

  useEffect(() => {
    console.log(search);
  }, [search]);

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
            ? search.movies.map(movie => (
                <div className="col-6 d-flex">
                  <SearchCard movie={movie} />
                </div>
              ))
            : ""}
        </div>
      </div>
    </div>
  );
}

export default SearchMovies;
