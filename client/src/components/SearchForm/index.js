import React, { useRef } from "react";
import Button from "../Button";
import "./style.css";
import { searchOMDB } from "../../utils/API";
import { usePending } from "../../utils/PendingContext";

function SearchForm(props) {
  const { markPendingOnSearch } = usePending();
  const searchRef = useRef();

  const onSubmit = e => {
    e.preventDefault();
    const searchTerm = searchRef.current.value.trim();
    if (searchTerm) {
      searchOMDB(searchTerm).then(result => {
        if (!result.err) {
          props.setSearch({
            ...result,
            movies: result.movies.map(movie => markPendingOnSearch(movie)),
            searchTerm,
          });
        } else {
          props.setSearch({ ...result });
        }
        searchRef.current.value = "";
      });
    } else {
      props.setSearch({
        err: "Please enter a movie title to start your search.",
        searchTerm: "",
      });
    }
  };

  return (
    <form onSubmit={onSubmit}>
      <div className="input-group">
        <input
          type="text"
          className="form-control"
          ref={searchRef}
          id="movie-search"
          placeholder="Search movie titles"
        />
        <div className="input-group-append">
          <Button className="border">
            <i className="fas fa-search"></i>
          </Button>
        </div>
      </div>
    </form>
  );
}

export default SearchForm;
