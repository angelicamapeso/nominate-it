import React from "react";
import Button from "../Button";
import "./style.css";

function SearchForm() {
  return (
    <form>
      <div className="input-group">
        <input type="text" className="form-control" id="movie-search" />
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
