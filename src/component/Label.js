import React, { useEffect, useState } from "react";

export default function Label({ setYear, setType }) {
  const [val1, setVal1] = useState("5/results");
  const [val2, setVal2] = useState(2020);
  const HandleSubmit = async () => {
    setYear(val2);
    setType(val1);

    console.log("val1: " + val1 + " ||| val2: " + val2);
  };

  const handleChangeV = async (e) => {
    setVal1(e.target.value);
  };

  const handleChange = async (e) => {
    setVal2(e.target.value);
  };

  // useEffect(() => {
  //   val2 != null ? setYear(val2) : setYear(2020);
  //   val1 != null ? setType(val1) : setType("5/results");
  //   console.log("val1: " + val1 + " ||| val2: " + val2);
  // }, [val1, val2]);

  return (
    <div className=" lg:py-8 py-4">
      <div className="flex flex-row justify-between items-center align-middle gap-5 w-full  h-12 my-auto ">
        <div className="mt-1 relative rounded-md shadow-sm transition duration-150 ease-in-out h-full">
          <select
            class="w-full border bg-white rounded px-10 py-2 outline-none text-black capitalize"
            onChange={handleChangeV}
            value={val1}
          >
            <option class="py-1" value="5/qualifying">
              qualifying
            </option>
            <option class="py-1" value="5/results">
              results
            </option>
            <option class="py-1" value="/drivers">
              drivers
            </option>
          </select>
        </div>

        <div className="mt-1 relative rounded-md shadow-sm transition duration-150 ease-in-out h-full">
          <select
            className="w-full border bg-white rounded px-10 py-2 outline-none text-black"
            onChange={handleChange}
            value={val2}
          >
            {/* const numbers = Array.from({ length: 61 }, (_, i) => 1960 + i) */}

            {Array.from({ length: 61 }, (_, i) => 2020 - i).map((cc, key) => {
              return (
                <option className="py-1" value={cc} key={key}>
                  {cc}
                </option>
              );
            })}
          </select>
        </div>
        <button
          className="button-big text-black bg-green-400 px-6 py-2 transition duration-150 ease-in-out rounded-md shadow-sm  hover:bg-green-200 h-full"
          onClick={HandleSubmit}
        >
          Submit
        </button>
      </div>
    </div>
  );
}
