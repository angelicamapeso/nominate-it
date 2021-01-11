import React, { useRef } from "react";
import Button from "../Button";
import "./style.css";
import { searchOMDB } from "../../utils/API";

function SearchForm(props) {
  const searchRef = useRef();

  const onSubmit = e => {
    e.preventDefault();
    const searchTerm = searchRef.current.value;
    searchOMDB(searchTerm).then(movies => {
      props.setSearch({ ...movies, searchTerm });
      searchRef.current.value = "";
    });
  };

  return (
    <form onSubmit={onSubmit}>
      <div className="input-group">
        <input
          type="text"
          className="form-control"
          ref={searchRef}
          id="movie-search"
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
