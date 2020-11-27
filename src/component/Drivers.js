import React from "react";

export default function Driver({ data }) {
  return (
    <div className="max-w-6xl w-full lg:py-8 py-4">
      <table class="table-auto gap-4">
        <thead className="text-justify-left self-start  justify-self-start">
          <tr>
            <th>Driver Name</th>
            <th>Number</th>
            <th>Nationality</th>
            <th>DOB</th>
            <th>Information</th>
          </tr>
        </thead>
        <tbody>
          {data.map((rc, key) => {
            return (
              <tr key={key}>
                <td className="py-2 px-4">{rc && rc.familyName}</td>
                <td className="py-2 px-4" key={rc.permanentNumber}>
                  {rc.permanentNumber && rc.permanentNumber}
                </td>
                <td className="py-2 px-4">{rc && rc.nationality}</td>
                <td className="py-2 px-4">{rc && rc.dateOfBirth}</td>
                <td className="py-2 px-4">{rc && rc.url}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
