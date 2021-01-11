import React, { useState, useEffect } from "react";
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
        <div className="row">
          <div className="col">
            <SearchCard />
          </div>
          <div className="col">
            <SearchCard pending={true} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default SearchMovies;
