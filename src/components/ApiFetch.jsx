import React, { useState, useEffect } from 'react'

const ApiFetch = () => {
    const [worker, setWorker] = useState([]);

    useEffect(() => {
        fetch("http://localhost:8080/",{method: "GET"})
            .then((res) => res.json())
            .then((date) => {
                setWorker(date);
            });


    })
  return (
    <div>
        <ul>
            <li>{worker.id}</li>
            <li>{worker.first_name}</li>
        </ul>
    </div>
  )
}

export default ApiFetch