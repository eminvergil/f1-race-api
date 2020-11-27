import React, { useState, useEffect } from "react";

import Driver from "./Drivers";
import FetchData from "./FetchData";
import Qual from "./Qual";
import Results from "./Results";

export default function Stock({ type, year }) {
  // const [val, setVal] = useState([]);
  // const [type, setType] = useState("5/results");
  // const [year, setYear] = useState(2019);

  const { data, error, loading } = FetchData({ type, year });

  return (
    <div>
      <div className="flex flex-row gap-6 text-2xl">
        <p>{year}</p>
      </div>

      {!loading && console.log(data.MRData)}

      {error && <p>fetching data gives error</p>}
      {loading && <p>loading</p>}

      {!loading && type === "5/results" && data.MRData.RaceTable && (
        <Results data={data.MRData.RaceTable.Races[0].Results} />
      )}
      {/* RaceTable.Races[0].QualifyingResults */}
      {!loading && type === "5/qualifying" && data.MRData.RaceTable && (
        <Qual data={data.MRData.RaceTable.Races} />
      )}

      {!loading && type === "/drivers" && data.MRData.DriverTable && (
        <Driver data={data.MRData.DriverTable.Drivers} />
      )}
    </div>
  );
}
