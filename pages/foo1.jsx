import React, { useEffect, useState } from 'react';

async function fetchData() {
  let response = await fetch('http://localhost:3099/users');
  let data = await response.json();
  return data;
}

export default function Foo() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadUsers = async () => {
      try {
        const data = await fetchData();
        setUsers(data);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    loadUsers();
  }, []); // 空依賴數組確保只在組件掛載時運行一次

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <ul>
      {users.map(user => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  );
}
