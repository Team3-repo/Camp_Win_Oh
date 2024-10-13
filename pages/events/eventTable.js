import React, { useEffect, useState } from 'react';

export default function UserEvents() {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [userId, setUserId] = useState(null);

  // 從 LocalStorage 使用者資訊
  const checkLoginStatus = () => {
    const user = localStorage.getItem('user');
    if (user) {
      const parsedUser = JSON.parse(user);
      setUserId(parsedUser.user_id || null);
    } else {
      setUserId(null);
    }
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      checkLoginStatus();
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    if (userId) {
      console.log(`Fetching events for user: ${userId}`);
      fetch(`http://localhost:3005/events/api/user-events/${userId}`)
        .then((response) => {
          if (!response.ok) {
            throw new Error(`API error: ${response.status}`);
          }
          return response.json();
        })
        .then((data) => {
          setEvents(data);
          setLoading(false);
        })
        .catch((error) => {
          console.error('Error fetching events:', error);
          setLoading(false);
        });
    } else {
      setLoading(false); // 未登入不顯示
    }
  }, [userId]);

  if (loading) {
    return <p className="loading-message">活動載入中...</p>;
  }

  if (!userId) {
    return <p className="not-logged-message">請先登入後再查看您的活動</p>;
  }

  return (
    <div className="event-table-container">
      <h2 className="table-title">我的活動</h2>
      <table className="event-table">
        <thead>
          <tr>
            <th>活動編號</th>
            <th>活動名稱</th>
            <th>活動開始</th>
            <th>活動結束</th>
            <th>加入日期</th>
            <th>是否為主辦人</th>
          </tr>
        </thead>
        <tbody>
          {events.length > 0 ? (
            events.map((event) => (
              <tr key={event.event_id}>
                <td>{event.event_id}</td>
                <td>{event.event_title}</td>
                <td>{event.start_date}</td>
                <td>{event.end_date}</td>
                <td>{new Date(event.join_date).toLocaleString()}</td>
                <td>{event.is_organizer ? '主辦人' : ''}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="4">尚未參加或創建任何活動</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}
