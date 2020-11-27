import React from "react";

export default function Qual({ data }) {
  return (
    <div className="max-w-6xl w-full lg:py-8 py-4">
      <table class="table-auto gap-4">
        <thead>
          <tr>
            <th>Pos</th>
            <th>No</th>
            <th>Driver</th>
            <th>Constructor</th>
            <th>Q1</th>
            <th>Q2</th>
            <th>Q3</th>
          </tr>
        </thead>
        <tbody>
          {console.log(data[0].QualifyingResults)}
          {data &&
            data[0].QualifyingResults.map((rc, key) => {
              return (
                <tr key={key}>
                  <td className="py-2 px-4" key={rc.number}>
                    {rc && rc.position}
                  </td>
                  <td className="py-2 px-4">{rc.number && rc.number}</td>
                  <td className="py-2 px-4">
                    {rc.Driver && rc.Driver.familyName}
                  </td>
                  <td className="py-2 px-4">
                    {rc.Constructor && rc.Constructor.name}
                  </td>
                  <td className="py-2 px-4">{rc && rc.Q1}</td>
                  <td className="py-2 px-4">{rc && rc.Q2}</td>
                  <td className="py-2 px-4">{rc && rc.Q3}</td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
}
