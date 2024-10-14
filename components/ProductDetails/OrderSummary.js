import React from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import { MdArrowDropUp } from 'react-icons/md';
import { useRouter } from 'next/router'; // 引入 useRouter

function OrderSummary({ cartItems }) { // 移除 setCartItems，因為此組件只負責顯示內容
    const router = useRouter(); // 初始化 useRouter
    
    // 確保所有價格都是數字型態
    const totalAmount = (cartItems || []).reduce((total, item) => {
      const itemPrice = parseFloat(item.price); // 確保價格是數字
      const itemQuantity = parseInt(item.quantity, 10); // 確保數量是整數
    
      console.log('Item Quantity:', itemQuantity);
      console.log('Item Price:', itemPrice);
      console.log('Total for this item:', itemQuantity * itemPrice);
    
      if (!isNaN(itemPrice) && itemQuantity > 0) {
        return total + itemQuantity * itemPrice;
      }
      return total;
    }, 0);
    
    console.log('Total Amount:', totalAmount);

    // 定義 handleViewCart 函數來處理按鈕點擊
    const handleViewCart = () => {
        router.push('/cart/3ShoppingCartPage'); // 導航至 ShoppingCartPage
    };

    
    return (
      <aside className="order-summary">
        <div className="summary-icon">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/a48426f8-26f9-4222-9e04-9f93db4df8c6?placeholderIfAbsent=true&apiKey=ff1208b97220405794b61b476c6106d1"
            className="summary-image"
            alt="Order Summary Icon"
          />
          <div className="cart-icon">
            <FaShoppingCart size={27} />
          </div>
        </div>
        <div className="summary-content">
          <div className="arrow-icon">
            <MdArrowDropUp size={70} style={{ color: 'white' }} />
          </div>
          <h3 className="summary-title">目前訂單</h3>
          <div className="summary-details">
            {(cartItems || []).map((item, index) => (
              <div className="product-row" key={index}>
                <span className="product-label">商品</span>
                <img
                  loading="lazy"
                  src={item.product_pic ? `/uploads/${item.product_pic}` : `/uploads/img${item.product_id}.png`}
                  className="product-thumbnail"
                  alt={item.name} // 使用商品名稱作為 alt
                />
                <span className="product-name">{item.name} * {item.quantity}</span>
              </div>
            ))}
            <div className="subtotal-row">
              <span className="subtotal-label">小計</span>
              <span className="subtotal-amount">NT$ {totalAmount}</span> {/* 確保格式化為小數點後兩位 */}
            </div>
          </div>
          <button className="view-cart-btn" onClick={handleViewCart}>查看購物車</button>
        </div>
      <style jsx>{`
        .order-summary {
          display: flex;
          flex-direction: column;
          width: 24%;
          color: #000;
          font: 12px Zen Maru Gothic, sans-serif;
        }
        .summary-icon {
          align-self: flex-end;
          position: relative;
        }
        .cart-icon {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
        }
        .summary-image {
          width: 64px;
          height: 64px;
          background-color: #a9a859;
          border-radius: 50%;
        }
        .summary-content {
          width:80%;
          background-color: #fff;
          border-radius: 3px;
          padding: 20px;
          margin-top: 10px;
          position: relative;
          align-self: flex-end;
        }
        .arrow-icon {
          position: absolute;
          transform: translate(200%, -80%);
        }
        .summary-title {
          text-align: center;
          padding-bottom: 6px;
          border-bottom: 0.615px solid #b4a59f;
          font-size: 15px;
          font-weight: 500;
        }
        .summary-details {
          padding: 10px 0;
          border-bottom: 0.615px solid #b4a59f;
        }
        .product-row,
        .subtotal-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 10px;
        }
        .product-thumbnail {
          width: 39px;
          height: 34px;
          object-fit: contain;
        }
        .subtotal-amount {
          font-weight: 700;
        }
        .view-cart-btn {
          width: 100%;
          border-radius: 6.759px;
          background-color: #fc9a84;
          color: #fff;
          font-size: 17px;
          padding: 10px;
          border: none;
          cursor: pointer;
          margin-top: 10px;
        }
        @media (max-width: 991px) {
          .order-summary {
            width: 100%;
            margin-top: 40px;
          }
        }
      `}</style>
    </aside>
  );
}

export default OrderSummary;
