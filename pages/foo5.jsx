import React, { useEffect, useState, useRef } from 'react';

const InfiniteScroll = () => {
  const [data, setData] = useState([]);
  const [items, setItems] = useState([]); // 初始显示项
  const loader = useRef(null);
  const [dataType, setDataType] = useState('data1'); // 用于标记当前数据类型

  const handleLoadMore = () => {
    if (items.length >= 40) return; // 限制最多 40 项

    const newItems = data.slice(items.length, items.length + 2); // 每次加载 2 项
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

  const fetchData = async (type) => {
    let url = '';
    switch (type) {
      case 'data1':
        url = 'http://localhost:3099/id_name';
        break;
      case 'data2':
        url = 'http://localhost:3099/addr_birth';
        break;
      case 'data3':
        url = 'http://localhost:3099/lat_long_city';
        break;
      default:
        return;
    }

    try {
      const response = await fetch(url);
      const result = await response.json();
      setData(result);
      setItems(result.slice(0, 5)); // 重置显示的项
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    fetchData(dataType); // 初始加载数据
  }, [dataType]);

  const switchData = (type) => {
    setDataType(type);
  };

  return (
    <div>
      <nav>
        <button onClick={() => switchData('data1')}>Data 1</button>
        <button onClick={() => switchData('data2')}>Data 2</button>
        <button onClick={() => switchData('data3')}>Data 3</button>
      </nav>
      <div className="card-container">
        {items.map((item) => (
          <div key={item.id} className="card">
            {dataType === 'data1' ? (
              <>
                <h2>{item.id} <br /> {item.name}</h2>
                <p>{item.email}</p>
              </>
            ) : dataType === 'data2' ? (
              <>
                <h2>{item.id} <br />{item.address}</h2>
                <p>Birthday: {item.birthday}</p>
              </>
            ) : (
              <>
                <h2>{item.id} <br /></h2>
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

export default InfiniteScroll;
