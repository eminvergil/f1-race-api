import React, { useState } from "react";
import Label from "./component/Label";
import Stock from "./component/Stock";

function App() {
  const [type, setType] = useState("5/results");
  const [year, setYear] = useState(2020);

  return (
    <div className="h-full flex flex-col justify-center items-center  bg-gray-900 text-gray-100 ggg">
      <h1 className="text-2xl uppercase py-8">f1 search info</h1>
      <Label setType={setType} setYear={setYear} />
      <Stock type={type} year={year} />
    </div>
  );
}

export default App;
