import React, { useEffect, useState, useRef } from 'react'

const data1 = [
  {
    id: 1,
    name: 'Alice Chen',
    email: 'alice.chen@example.com',
  },
  {
    id: 2,
    name: 'Bob Wang',
    email: 'bob.wang@example.com',
  },
  {
    id: 3,
    name: 'Charlie Liu',
    email: 'charlie.liu@example.com',
  },
  {
    id: 4,
    name: 'David Yang',
    email: 'david.yang@example.com',
  },
  {
    id: 5,
    name: 'Eva Li',
    email: 'eva.li@example.com',
  },
  {
    id: 6,
    name: 'Frank Zhao',
    email: 'frank.zhao@example.com',
  },
  {
    id: 7,
    name: 'Grace Wu',
    email: 'grace.wu@example.com',
  },
  {
    id: 8,
    name: 'Henry Chang',
    email: 'henry.chang@example.com',
  },
  {
    id: 9,
    name: 'Ivy Huang',
    email: 'ivy.huang@example.com',
  },
  {
    id: 10,
    name: 'Jackie Chen',
    email: 'jackie.chen@example.com',
  },
  {
    id: 11,
    name: 'Alice Chen',
    email: 'alice.chen@example.com',
  },
  {
    id: 12,
    name: 'Bob Wang',
    email: 'bob.wang@example.com',
  },
  {
    id: 13,
    name: 'Charlie Liu',
    email: 'charlie.liu@example.com',
  },
  {
    id: 14,
    name: 'David Yang',
    email: 'david.yang@example.com',
  },
  {
    id: 15,
    name: 'Eva Li',
    email: 'eva.li@example.com',
  },
  {
    id: 16,
    name: 'Frank Zhao',
    email: 'frank.zhao@example.com',
  },
  {
    id: 17,
    name: 'Grace Wu',
    email: 'grace.wu@example.com',
  },
  {
    id: 18,
    name: 'Henry Chang',
    email: 'henry.chang@example.com',
  },
  {
    id: 19,
    name: 'Ivy Huang',
    email: 'ivy.huang@example.com',
  },
  {
    id: 20,
    name: 'Jackie Chen',
    email: 'jackie.chen@example.com',
  },
  {
    id: 21,
    name: 'Alice Chen',
    email: 'alice.chen@example.com',
  },
  {
    id: 22,
    name: 'Bob Wang',
    email: 'bob.wang@example.com',
  },
  {
    id: 23,
    name: 'Charlie Liu',
    email: 'charlie.liu@example.com',
  },
  {
    id: 24,
    name: 'David Yang',
    email: 'david.yang@example.com',
  },
  {
    id: 25,
    name: 'Eva Li',
    email: 'eva.li@example.com',
  },
  {
    id: 26,
    name: 'Frank Zhao',
    email: 'frank.zhao@example.com',
  },
  {
    id: 27,
    name: 'Grace Wu',
    email: 'grace.wu@example.com',
  },
  {
    id: 28,
    name: 'Henry Chang',
    email: 'henry.chang@example.com',
  },
  {
    id: 29,
    name: 'Ivy Huang',
    email: 'ivy.huang@example.com',
  },
  {
    id: 30,
    name: 'Jackie Chen',
    email: 'jackie.chen@example.com',
  },
  {
    id: 31,
    name: 'Alice Chen',
    email: 'alice.chen@example.com',
  },
  {
    id: 32,
    name: 'Bob Wang',
    email: 'bob.wang@example.com',
  },
  {
    id: 33,
    name: 'Charlie Liu',
    email: 'charlie.liu@example.com',
  },
  {
    id: 34,
    name: 'David Yang',
    email: 'david.yang@example.com',
  },
  {
    id: 35,
    name: 'Eva Li',
    email: 'eva.li@example.com',
  },
  {
    id: 36,
    name: 'Frank Zhao',
    email: 'frank.zhao@example.com',
  },
  {
    id: 37,
    name: 'Grace Wu',
    email: 'grace.wu@example.com',
  },
  {
    id: 38,
    name: 'Henry Chang',
    email: 'henry.chang@example.com',
  },
  {
    id: 39,
    name: 'Ivy Huang',
    email: 'ivy.huang@example.com',
  },
  {
    id: 40,
    name: 'Jackie Chen',
    email: 'jackie.chen@example.com',
  },
  {
    id: 41,
    name: 'Alice Chen',
    email: 'alice.chen@example.com',
  },
  {
    id: 42,
    name: 'Bob Wang',
    email: 'bob.wang@example.com',
  },
  {
    id: 43,
    name: 'Charlie Liu',
    email: 'charlie.liu@example.com',
  },
  {
    id: 44,
    name: 'David Yang',
    email: 'david.yang@example.com',
  },
  {
    id: 45,
    name: 'Eva Li',
    email: 'eva.li@example.com',
  },
  {
    id: 46,
    name: 'Frank Zhao',
    email: 'frank.zhao@example.com',
  },
  {
    id: 47,
    name: 'Grace Wu',
    email: 'grace.wu@example.com',
  },
  {
    id: 48,
    name: 'Henry Chang',
    email: 'henry.chang@example.com',
  },
  {
    id: 49,
    name: 'Ivy Huang',
    email: 'ivy.huang@example.com',
  },
  {
    id: 50,
    name: 'Jackie Chen',
    email: 'jackie.chen@example.com',
  },
  {
    id: 51,
    name: 'Alice Chen',
    email: 'alice.chen@example.com',
  },
  {
    id: 52,
    name: 'Bob Wang',
    email: 'bob.wang@example.com',
  },
  {
    id: 53,
    name: 'Charlie Liu',
    email: 'charlie.liu@example.com',
  },
  {
    id: 54,
    name: 'David Yang',
    email: 'david.yang@example.com',
  },
  {
    id: 55,
    name: 'Eva Li',
    email: 'eva.li@example.com',
  },
  {
    id: 56,
    name: 'Frank Zhao',
    email: 'frank.zhao@example.com',
  },
  {
    id: 57,
    name: 'Grace Wu',
    email: 'grace.wu@example.com',
  },
  {
    id: 58,
    name: 'Henry Chang',
    email: 'henry.chang@example.com',
  },
  {
    id: 59,
    name: 'Ivy Huang',
    email: 'ivy.huang@example.com',
  },
  {
    id: 60,
    name: 'Jackie Chen',
    email: 'jackie.chen@example.com',
  },
  {
    id: 61,
    name: 'Alice Chen',
    email: 'alice.chen@example.com',
  },
  {
    id: 62,
    name: 'Bob Wang',
    email: 'bob.wang@example.com',
  },
  {
    id: 63,
    name: 'Charlie Liu',
    email: 'charlie.liu@example.com',
  },
  {
    id: 64,
    name: 'David Yang',
    email: 'david.yang@example.com',
  },
  {
    id: 65,
    name: 'Eva Li',
    email: 'eva.li@example.com',
  },
  {
    id: 66,
    name: 'Frank Zhao',
    email: 'frank.zhao@example.com',
  },
  {
    id: 67,
    name: 'Grace Wu',
    email: 'grace.wu@example.com',
  },
  {
    id: 68,
    name: 'Henry Chang',
    email: 'henry.chang@example.com',
  },
  {
    id: 69,
    name: 'Ivy Huang',
    email: 'ivy.huang@example.com',
  },
  {
    id: 70,
    name: 'Jackie Chen',
    email: 'jackie.chen@example.com',
  },
  {
    id: 71,
    name: 'Alice Chen',
    email: 'alice.chen@example.com',
  },
  {
    id: 72,
    name: 'Bob Wang',
    email: 'bob.wang@example.com',
  },
  {
    id: 73,
    name: 'Charlie Liu',
    email: 'charlie.liu@example.com',
  },
  {
    id: 74,
    name: 'David Yang',
    email: 'david.yang@example.com',
  },
  {
    id: 75,
    name: 'Eva Li',
    email: 'eva.li@example.com',
  },
  {
    id: 76,
    name: 'Frank Zhao',
    email: 'frank.zhao@example.com',
  },
  {
    id: 77,
    name: 'Grace Wu',
    email: 'grace.wu@example.com',
  },
  {
    id: 78,
    name: 'Henry Chang',
    email: 'henry.chang@example.com',
  },
  {
    id: 79,
    name: 'Ivy Huang',
    email: 'ivy.huang@example.com',
  },
  {
    id: 80,
    name: 'Jackie Chen',
    email: 'jackie.chen@example.com',
  },
  {
    id: 81,
    name: 'Alice Chen',
    email: 'alice.chen@example.com',
  },
  {
    id: 82,
    name: 'Bob Wang',
    email: 'bob.wang@example.com',
  },
  {
    id: 83,
    name: 'Charlie Liu',
    email: 'charlie.liu@example.com',
  },
  {
    id: 84,
    name: 'David Yang',
    email: 'david.yang@example.com',
  },
  {
    id: 85,
    name: 'Eva Li',
    email: 'eva.li@example.com',
  },
  {
    id: 86,
    name: 'Frank Zhao',
    email: 'frank.zhao@example.com',
  },
  {
    id: 87,
    name: 'Grace Wu',
    email: 'grace.wu@example.com',
  },
  {
    id: 88,
    name: 'Henry Chang',
    email: 'henry.chang@example.com',
  },
  {
    id: 89,
    name: 'Ivy Huang',
    email: 'ivy.huang@example.com',
  },
  {
    id: 90,
    name: 'Jackie Chen',
    email: 'jackie.chen@example.com',
  },
  {
    id: 91,
    name: 'Alice Chen',
    email: 'alice.chen@example.com',
  },
  {
    id: 92,
    name: 'Bob Wang',
    email: 'bob.wang@example.com',
  },
  {
    id: 93,
    name: 'Charlie Liu',
    email: 'charlie.liu@example.com',
  },
  {
    id: 94,
    name: 'David Yang',
    email: 'david.yang@example.com',
  },
  {
    id: 95,
    name: 'Eva Li',
    email: 'eva.li@example.com',
  },
  {
    id: 96,
    name: 'Frank Zhao',
    email: 'frank.zhao@example.com',
  },
  {
    id: 97,
    name: 'Grace Wu',
    email: 'grace.wu@example.com',
  },
  {
    id: 98,
    name: 'Henry Chang',
    email: 'henry.chang@example.com',
  },
  {
    id: 99,
    name: 'Ivy Huang',
    email: 'ivy.huang@example.com',
  },
  {
    id: 100,
    name: 'Jackie Chen',
    email: 'jackie.chen@example.com',
  },
]

const data2 = [
  { id: 1, address: '123 Main St, Cityville', birthday: '1990-01-01' },
  { id: 2, address: '456 Maple St, Townsville', birthday: '1992-02-02' },
  { id: 3, address: '789 Oak St, Villageburg', birthday: '1994-03-03' },
  { id: 4, address: '321 Pine St, Hamlet', birthday: '1996-04-04' },
  { id: 5, address: '654 Cedar St, Metropolis', birthday: '1998-05-05' },
  { id: 6, address: '159 Elm St, Uptown', birthday: '1991-06-06' },
  { id: 7, address: '753 Birch St, Downtown', birthday: '1993-07-07' },
  { id: 8, address: '852 Willow St, Suburbia', birthday: '1995-08-08' },
  { id: 9, address: '369 Chestnut St, Riverside', birthday: '1997-09-09' },
  { id: 10, address: '741 Maple Ave, Hilltop', birthday: '1999-10-10' },
  { id: 11, address: '258 Oak Ave, Lakedale', birthday: '1990-11-11' },
  { id: 12, address: '147 Pine Ave, Parkland', birthday: '1992-12-12' },
  { id: 13, address: '963 Elm Rd, Seaside', birthday: '1994-01-13' },
  { id: 14, address: '159 Cedar Rd, Forestwood', birthday: '1996-02-14' },
  { id: 15, address: '753 Birch Rd, Brookfield', birthday: '1998-03-15' },
  { id: 16, address: '852 Willow Rd, Valleyview', birthday: '1991-04-16' },
  { id: 17, address: '369 Chestnut Rd, Meadowlark', birthday: '1993-05-17' },
  { id: 18, address: '741 Maple Blvd, Evergreen', birthday: '1995-06-18' },
  { id: 19, address: '258 Oak Blvd, Silverlake', birthday: '1997-07-19' },
  { id: 20, address: '147 Pine Blvd, Greenfield', birthday: '1999-08-20' },
  { id: 21, address: '963 Elm St, Crystal Lake', birthday: '1990-09-21' },
  { id: 22, address: '159 Cedar St, Bluewater', birthday: '1992-10-22' },
  { id: 23, address: '753 Birch St, Sandy Shores', birthday: '1994-11-23' },
  { id: 24, address: '852 Willow St, Oceanview', birthday: '1996-12-24' },
  { id: 25, address: '369 Chestnut St, Pineville', birthday: '1998-01-25' },
  { id: 26, address: '741 Maple Ave, Sunshine City', birthday: '1991-02-26' },
  { id: 27, address: '258 Oak Ave, Spring Valley', birthday: '1993-03-27' },
  { id: 28, address: '147 Pine Ave, Hillview', birthday: '1995-04-28' },
  { id: 29, address: '963 Elm Rd, Riverdale', birthday: '1997-05-29' },
  { id: 30, address: '159 Cedar Rd, Fairview', birthday: '1999-06-30' },
]

const data3 = [
  { id: 1, latitude: 25.0330, longitude: 121.5654, location: 'Taipei, Taiwan' },
  { id: 2, latitude: 34.0522, longitude: -118.2437, location: 'Los Angeles, USA' },
  { id: 3, latitude: 51.5074, longitude: -0.1278, location: 'London, UK' },
  { id: 4, latitude: 35.6895, longitude: 139.6917, location: 'Tokyo, Japan' },
  { id: 5, latitude: -33.8688, longitude: 151.2093, location: 'Sydney, Australia' },
  { id: 6, latitude: 48.8566, longitude: 2.3522, location: 'Paris, France' },
  { id: 7, latitude: 55.7558, longitude: 37.6173, location: 'Moscow, Russia' },
  { id: 8, latitude: 37.7749, longitude: -122.4194, location: 'San Francisco, USA' },
  { id: 9, latitude: 1.3521, longitude: 103.8198, location: 'Singapore' },
  { id: 10, latitude: 40.7128, longitude: -74.0060, location: 'New York, USA' },
]


const InfiniteScroll = () => {
  const [data, setData] = useState(data1);
  const [items, setItems] = useState(data.slice(0, 5)); // 初始顯示 5 筆
  const loader = useRef(null);

  const handleLoadMore = () => {
    if (items.length >= 40) return; // 限制最多 40 筆

    const newItems = data.slice(items.length, items.length + 2); // 每次加載 2 筆
    setItems((prev) => [...prev, ...newItems]);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          handleLoadMore();
        }
      },
      {
        rootMargin: '100px',
      }
    );

    if (loader.current) {
      observer.observe(loader.current);
    }

    return () => {
      if (loader.current) {
        observer.unobserve(loader.current);
      }
    };
  }, [loader, items]);

  const switchData = (newData) => {
    setData(newData);
    setItems(newData.slice(0, 20)); // 重置顯示的項目
  };

  return (
    <div>
      <nav>
        <button onClick={() => switchData(data1)}>Data 1</button>
        <button onClick={() => switchData(data2)}>Data 2</button>
        <button onClick={() => switchData(data3)}>Data 3</button> {/* 新增這一行 */}
      </nav>
      <div className="card-container">
        {items.map((item) => (
          <div key={item.id} className="card">
            {data === data1 ? (
              <>
                <h2>{item.name}</h2>
                <p>{item.email}</p>
              </>
            ) : data === data2 ? (
              <>
                <h2>{item.address}</h2>
                <p>Birthday: {item.birthday}</p>
              </>
            ) : (
              <>
                <h2>Location: {item.location}</h2>
                <p>Latitude: {item.latitude}</p>
                <p>Longitude: {item.longitude}</p>
              </>
            )}
          </div>
        ))}
      </div>
      <div ref={loader} className="loading">
        Loading...
      </div>
      <style jsx>{`
        nav {
          margin-bottom: 20px;
        }
        button {
          margin-right: 10px;
          padding: 8px 12px;
          border: none;
          border-radius: 4px;
          background-color: #0070f3;
          color: white;
          cursor: pointer;
        }
        button:hover {
          background-color: #005bb5;
        }
        .card-container {
          display: flex;
          flex-direction: column;
          gap: 5px;
        }
        .card {
          border: 1px solid #ccc;
          padding: 16px;
          border-radius: 8px;
          background-color: #fff;
        }
        .loading {
          height: 20px;
          text-align: center;
        }
      `}</style>
    </div>
  );
};


export default InfiniteScroll
