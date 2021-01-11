import React from "react";
import SearchMovies from "../../components/SearchMovies";
import PendingNominees from "../../components/PendingNominees";
import { PendingProvider } from "../../utils/PendingContext";

function Home() {
  return (
    <>
      <section className="bg-light pt-3 pb-2">
        <div className="container-fluid px-lg-5 px-md-3">
          <h1>What's your top 5 movies?</h1>
        </div>
      </section>
      <section className="container-fluid p-0 d-flex flex-column flex-lg-row">
        <PendingProvider>
          <div className="container-fluid px-lg-5 px-md-3">
            <SearchMovies />
          </div>
          <div className="container-fluid p-0 my-3 px-lg-5">
            <PendingNominees />
          </div>
        </PendingProvider>
      </section>
    </>
  );
}

export default Home;
