import React from "react";
import SearchCard from "../SearchCard";
import SearchForm from "../SearchForm";

function SearchMovies() {
  return (
    <div className="row">
      <div className="col">
        <div className="row mt-4">
          <div className="col">
            <SearchForm />
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
