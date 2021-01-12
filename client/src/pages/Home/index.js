import React from "react";
import SearchMovies from "../../components/SearchMovies";
import PendingNominations from "../../components/PendingNominations";

function Home() {
  return (
    <>
      <section className="bg-light pt-3 pb-2">
        <div className="container-fluid px-lg-5 px-md-3">
          <h1>What's your top 5 movies?</h1>
        </div>
      </section>
      <section className="container-fluid p-0 d-flex flex-column flex-lg-row">
        <div className="container-fluid px-lg-5 px-md-3">
          <SearchMovies />
        </div>
        <div className="container-fluid p-0 my-3 px-lg-5">
          <PendingNominations />
        </div>
      </section>
    </>
  );
}

export default Home;
