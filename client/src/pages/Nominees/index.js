import React, { useState, useEffect } from "react";
import NomineeList from "../../components/NomineeList";
import NomineeCard from "../../components/NomineeCard";
import { getNominees } from "../../utils/API";

function Nominees() {
  const [nominees, setNominees] = useState([]);

  useEffect(() => {
    getNominees().then(response => {
      console.log(response);
      setNominees(response);
    });
  }, []);

  return (
    <>
      <section className="bg-light pt-3 pb-2">
        <div className="container-fluid px-lg-5 px-md-3">
          <h1>Nominees</h1>
        </div>
      </section>
      <div className="container-fluid px-lg-5 px-md-3">
        <div className="row">
          <div className="col">
            <div className="card">
              <div className="card-body">
                <NomineeList className="pl-0 mb-0 d-flex flex-row flex-wrap">
                  {nominees.length > 0 ? (
                    nominees[0].movies.map(nominee => (
                      <NomineeCard movie={nominee} />
                    ))
                  ) : (
                    <></>
                  )}
                </NomineeList>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Nominees;
