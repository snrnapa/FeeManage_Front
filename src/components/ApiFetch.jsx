import React, { useState, useEffect } from "react";

const ApiFetch = () => {
  const [workers, setWorkers] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/", { method: "GET" })
      .then((res) => res.json())
      .then((data) => {
        setWorkers(data);
      });
  });
  return (
    <div>
      <th>id</th>
      <th>name</th>
      <th>dept/team</th>
      {workers.map((worker) => (
        <tr>
          <>
            <td>{worker.id}</td>
            <td>
              {worker.first_name} {worker.last_name}
            </td>
            <td>
              {worker.dept} / {worker.team}
            </td>
          </>
        </tr>
      ))}
    </div>
  );
};

export default ApiFetch;
