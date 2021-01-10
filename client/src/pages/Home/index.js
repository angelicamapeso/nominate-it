import React from "react";
import SearchCard from "../../components/SearchCard";
import SearchForm from "../../components/SearchForm";
import PendingNominees from "../../components/PendingNominees";

function Home() {
  return (
    <>
      <section className="bg-light pt-3 pb-2">
        <div className="container-fluid px-5">
          <h1>What's your top 5 movies?</h1>
        </div>
      </section>
      <section className="container-fluid p-0 d-flex flex-column flex-lg-row">
        <div className="container-fluid px-5">
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
                  <SearchCard />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container-fluid p-0 my-3 px-lg-5">
          <PendingNominees />
        </div>
      </section>
    </>
  );
}

export default Home;
