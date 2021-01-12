import React from "react";
import { Link } from "react-router-dom";
import Button from "../Button";

function Nav() {
  return (
    <section className="bg-light">
      <div className="container-fluid px-lg-5 px-md-3">
        <nav className="navbar navbar-light px-0">
          <Link className="navbar-brand" to="/">
            Nominate it!
          </Link>
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" to="/nominations">
                <Button theme="dark">
                  <i className="fas fa-medal mr-2"></i>Nominations
                </Button>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </section>
  );
}

export default Nav;
