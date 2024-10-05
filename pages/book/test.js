import React, { useEffect, useState } from 'react';

const Btest = () => {
    // set status
    const [data, setData] = useState([])

    // create path
    useEffect(() => {
      fetch('http://localhost:3001/api/book')
        .then((res) => res.json())
        .then((data) => setData(data))
        .catch((error) => console.log(error))
    }, [])

  return (
    <div>
    <h2>Booking Types</h2>
    <div>
      <thead>
        <th>Name</th>
        <th>Phone</th>
        <th>Email</th>
      </thead>
      <tbody>
        {data.map((d, i) => (
          <tr key={i}>
            <td>{d.id}</td>
            <td>{d.name}</td>
            <td>{d.email}</td>
          </tr>
        ))}
      </tbody>
    </div>
  </div>
  );
};

export default Btest;
