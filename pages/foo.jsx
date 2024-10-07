
import React from 'react'



const users = fetchData();

async function fetchData() {
  let response = await fetch('http://localhost:3099/users');
  let data = await response.json();
  return data;
}


export default function foo() {
  return (
    <ul>
      {users.map(user => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  );
}



// const users = [
//   { id: 1, name: 'Alice' },
//   { id: 2, name: 'Bob' },
//   { id: 3, name: 'Charlie' }
// ];