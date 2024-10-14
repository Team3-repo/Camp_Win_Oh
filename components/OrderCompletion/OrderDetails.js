import React, { useState, useEffect } from 'react';

// 格式化日期的函數
function formatDate(dateString) {
  const date = new Date(dateString);
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  const hours = String(date.getHours()).padStart(2, '0');
  const minutes = String(date.getMinutes()).padStart(2, '0');
  const seconds = String(date.getSeconds()).padStart(2, '0');

  return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
}

const OrderDetails = ({ orderId }) => {
  const [orderDetails, setOrderDetails] = useState(null);
  const [loading, setLoading] = useState(true);  // 用來追蹤加載狀態

  useEffect(() => {
    const fetchOrderDetails = async () => {
      try {
        const response = await fetch(`/api/getOrderDetails?orderId=${orderId}`);
        if (response.ok) {
          const data = await response.json();
          setOrderDetails(data);
        } else {
          console.error('無法獲取訂單詳情');
        }
      } catch (error) {
        console.error('獲取訂單詳情時發生錯誤', error);
      } finally {
        setLoading(false);  // 無論成功與否，最後都會設置 loading 為 false
      }
    };

    if (orderId) {
      fetchOrderDetails();
    }
  }, [orderId]);

  if (loading) {
    return <div>加載中...</div>;  // 顯示加載狀態
  }

  if (!orderDetails) {
    return <div>找不到訂單詳情</div>;  // 如果未獲取到訂單資料，顯示錯誤提示
  }

  // 計算總價格
  const cartItems = JSON.parse(orderDetails.cart_items);
  const totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);


  return (
    <>
    <div className="order-details">
    <div>
      <h2>訂購人資訊</h2>
      <table className="details-table">
        <thead>
          <tr>
            <th>項目</th>
            <th>內容</th>
          </tr>
        </thead>
        <tbody>
          <tr><td>訂購姓名:</td><td>{orderDetails.name}</td></tr>
          <tr><td>聯絡電話:</td><td>{orderDetails.phone}</td></tr>
          <tr><td>電子郵件:</td><td>{orderDetails.email}</td></tr>
          <tr><td>寄送地址:</td><td>{orderDetails.address}</td></tr>
          <tr><td>訂單備註:</td><td>{orderDetails.notes}</td></tr>
          <tr><td>訂單時間:</td><td>{formatDate(orderDetails.created_at)}</td></tr>
        </tbody>
      </table>
</div>
      <div>
      <h2>訂購商品</h2>
      <table className="products-table">
        <thead>
          <tr>
            <th>商品名稱</th>
            <th>數量</th>
            <th>價格</th>
          </tr>
        </thead>
        <tbody>
          {cartItems.map((item, index) => (
            <tr key={index}>
              <td>{item.name}</td>
              <td>{item.quantity}</td>
              <td>${item.price}</td>
            </tr>
          ))}
          <tr>
          <td colSpan="2" style={{ textAlign: 'left', backgroundColor: 'yellow', color: 'black',fontWeight: 'bold' }}>總價格:</td>
          <td style={{ backgroundColor: 'yellow', color: 'black',fontWeight: 'bold' }}>${totalPrice}</td>
          </tr>
        </tbody>
      </table>
</div>
      <style jsx>{`
        .order-details {
          display: flex;
          direction: column;
          justify-content: center;
          gap:40px;
          margin: 20px;
          font-family: Arial, sans-serif;
        }

        .details-table, .products-table {
          width: 100%;
          border-collapse: collapse;
          margin: 20px 0;
          box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
        }

        th, td {
          padding: 12px;
          text-align: left;
          border-bottom: 1px solid #ccc;
        }

        th {
          background-color: #f2f2f2;
          font-weight: bold;
        }

        td {
          background-color: #ffffff;
        }

        tr:hover td {
          background-color: #f9f9f9;
        }

        h2 {
          font-size: 24px;
          font-weight: 600;
          color: #333;
        }

        h3 {
          font-size: 20px;
          font-weight: 500;
          color: #333;
          margin: 10px 0;
        }
      `}</style>
    </div>
    </>
  );
};

export default OrderDetails;
