import React from 'react'
import { FaShoppingCart } from 'react-icons/fa'
import { MdArrowDropUp } from 'react-icons/md'

function OrderSummary({ cartItems }) {
    const totalAmount = cartItems.reduce((total, item) => total + item.quantity * item.price, 0);

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
        {cartItems.map((item, index) => (
          <div className="product-row" key={index}>
            <span className="product-label">商品</span>
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/2577e9b726e25824164bd1aee265b0cc6f88298690da6c4c8983ddf118da05b3?placeholderIfAbsent=true&apiKey=ff1208b97220405794b61b476c6106d1"
              className="product-thumbnail"
              alt="Camping Tent Thumbnail"
            />
            <span className="product-name">{item.name} * {item.quantity}</span>
            </div>
          ))}
            <div className="subtotal-row">
            <span className="subtotal-label">小計</span>
            <span className="subtotal-amount">NT$ {totalAmount}</span>
          </div>
        </div>
        <button className="view-cart-btn">查看購物車</button>
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
          transform: translate(-50%, -50%); /* 將子元素移動到父層的正中 */
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
        .arrow-icon{
          position: absolute;
          transform: translate(200%, -80%); /* 將子元素移動到父層的正中 */
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
  )
}

export default OrderSummary
