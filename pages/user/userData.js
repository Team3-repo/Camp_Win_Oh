import React, { useEffect, useState } from 'react';

const UserData = () => {
  const [userDataList, setUserDataList] = useState([]);

  useEffect(() => {
    // 透過 fetch API 取得用戶資料
    const fetchUserData = async () => {
      try {
        const response = await fetch('http://localhost:3001/api/users');
        const data = await response.json();
        setUserDataList(data);
      } catch (error) {
        console.error('Failed to fetch user data:', error);
      }
    };

    fetchUserData();
  }, []);

  if (userDataList.length === 0) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <h2>User Information</h2>
      {userDataList.map((user) => (
        <div key={user.user_id} style={{ border: '1px solid #ddd', padding: '10px', margin: '10px 0' }}>
          <img src={user.avatar} alt="User Avatar" style={{ width: '100px', height: '100px', borderRadius: '50%' }} />
          <p><strong>User ID:</strong> {user.user_id}</p>
          <p><strong>User Name:</strong> {user.user_name}</p>
          <p><strong>Email:</strong> {user.email}</p>
          <p><strong>Address:</strong> {user.user_address}</p>
          <p><strong>Phone:</strong> {user.phone}</p>
          <p><strong>Birthday:</strong> {user.birthday}</p>
          <p><strong>Gender:</strong> {user.gender === 'male' ? 'Male' : 'Female'}</p>
        </div>
      ))}
    </div>
  );
};

export default UserData;
