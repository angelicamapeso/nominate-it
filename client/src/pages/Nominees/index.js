import React, { useState, useEffect } from "react";
import { getNominees } from "../../utils/API";

function Nominees() {
  const [nominees, setNominees] = useState([]);

  useEffect(() => {
    getNominees().then(response => {
      console.log(response);
      setNominees(response);
    });
  }, []);
  return <h2>Nominee page</h2>;
}

export default Nominees;
