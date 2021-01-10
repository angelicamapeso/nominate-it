import React from "react";
import { Link } from "react-router-dom";
import Button from "../Button";

function Nav() {
  return (
    <nav className="navbar navbar-light bg-light">
      <Link className="navbar-brand" to="/">
        Nominate it!
      </Link>
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link className="nav-link" to="/nominees">
            <Button theme="dark">
              <i className="fas fa-medal mr-2"></i>Nominees
            </Button>
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
