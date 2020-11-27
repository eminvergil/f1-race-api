import React from "react";

export default function Results({ data }) {
  return (
    <div className="max-w-6xl w-full lg:py-8 py-4">
      <table class="table-auto gap-4">
        <thead>
          <tr>
            <th>Pos</th>
            <th>No</th>
            <th>Driver</th>
            <th>Constructor</th>
            <th>Laps</th>
            <th>Grid</th>
            <th>Time</th>
            <th>Status</th>
            <th>Points</th>
          </tr>
        </thead>
        <tbody>
          {data.map((rc, key) => {
            return (
              <tr key={key}>
                <td className="py-2 px-4" key={rc.number}>
                  {rc.position}
                </td>
                <td className="py-2 px-4">{rc.number && rc.number}</td>
                <td className="py-2 px-4">
                  {rc.Driver && rc.Driver.familyName}
                </td>
                <td className="py-2 px-4">
                  {rc.Constructor && rc.Constructor.name}
                </td>
                <td className="py-2 px-4">{rc.laps && rc.laps}</td>
                <td className="py-2 px-4">{rc.grid && rc.grid}</td>
                <td className="py-2 px-4">{rc.Time && rc.Time.time}</td>
                <td className="py-2 px-4">{rc.status && rc.status}</td>
                <td className="py-2 px-4">{rc.status && rc.points}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
