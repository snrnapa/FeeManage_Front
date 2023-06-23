import React, { useState, useEffect } from "react";

const Fee = () => {
  const [fees, setFee] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/fee?id=1", { method: "GET" })
      .then(res => res.json())
      .then(data => {
        setFee(data)
    })
    
},[]);

  return (
    <div>
      <th>id</th>
      <th>round_trip</th>
      <th>total_fee</th>
      {fees.map((fee) => (
        <tr>
          <>
            <td>{fee.id}</td>
            <td>
              {fee.round_trip}
            </td>
            {fee.total_fee}
            <td>

            </td>
          </>
        </tr>
      ))}
    </div>
  );
};

export default Fee;
