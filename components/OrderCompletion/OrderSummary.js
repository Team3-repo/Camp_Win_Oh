/**
 **
 */
import React from "react";

const OrderSummary = () => {
  return (
    <div className="order-summary">
      <div className="order-details">
        <div className="order-title">結帳訂單</div>
        <div className="order-item">
          <div className="item-row">
            <div className="item-label">日期</div>
          </div>
          <div className="item-row">
            <div className="item-label">商品</div>
            <div>露營帳篷</div>
          </div>
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/04276e37cd0529b1c930c2249d8e1aa8c28317592ca25e82dbcb623195330d2a?placeholderIfAbsent=true&apiKey=ff1208b97220405794b61b476c6106d1"
            className="item-image"
            alt="Product"
          />
          <div className="item-row">
            <div className="item-label">數量</div>
            <div>*1</div>
          </div>
        </div>
        <div className="order-total">
          <div className="total-label">總價</div>
          <div className="total-amount">NT$ 1,300</div>
        </div>
      </div>
      <div className="price-summary">
        <div className="price-details">
          <div className="price-row">
            <div className="price-label">價格</div>
            <div className="price-value">NT$ 1,300</div>
          </div>
          <div className="price-row">
            <div className="price-label">優惠卷</div>
            <div className="discount-value">七折折扣</div>
          </div>
          <div className="price-row">
            <div className="price-label">付款金額</div>
            <div className="final-price">NT$ 1,300</div>
          </div>
        </div>
      </div>
      <style jsx>{`
        .order-summary {
          display: flex;
          min-width: 240px;
          flex-direction: column;
          align-items: end;
          font-family: Zen Maru Gothic, -apple-system, Roboto, Helvetica,
            sans-serif;
          justify-content: center;
          width: 387px;
          padding:30px;
        }
        .order-details {
          border-radius: 5px;
          background-color: rgba(255, 255, 255, 1);
          display: flex;
          width: 358px;
          max-width: 100%;
          flex-direction: column;
          align-items: center;
          font-size: 20px;
          justify-content: center;
          padding: 20px 20px 20px 20px;
        }
        .order-title {
          padding-bottom: 10px;
          border-bottom: 1px solid var(--secondary-light2, #b4a59f);
          width: 100%;
          font-size: 24px;
          color: rgba(0, 0, 0, 1);
          font-weight: 500;
          white-space: nowrap;
        }
        @media (max-width: 991px) {
          .order-title {
            white-space: initial;
          }
        }
        .order-item {
          padding-bottom: 10px;
          justify-content: center;
          border-bottom: 1px solid var(--secondary-light2, #b4a59f);
          display: flex;
          margin-top: 5px;
          width: 100%;
          max-width: 347px;
          flex-direction: column;
          color: var(--black, #000);
          font-weight: 400;
          white-space: nowrap;
        }
        @media (max-width: 991px) {
          .order-item {
            white-space: initial;
          }
        }
        .item-row {
          display: flex;
          width: 100%;
          align-items: start;
          justify-content: space-between;
        }
        @media (max-width: 991px) {
          .item-row {
            white-space: initial;
          }
        }
        .item-label {
          opacity: 0.4;
        }
        .item-image {
          aspect-ratio: 0.95;
          object-fit: contain;
          object-position: center;
          width: 42px;
          align-self: end;
          margin-top: 5px;
        }
        .order-total {
          align-self: stretch;
          display: flex;
          margin-top: 5px;
          width: 100%;
          align-items: start;
          gap: 40px 100px;
          justify-content: space-between;
        }
        .total-label {
          color: var(--black, #000);
          font-weight: 400;
          opacity: 0.4;
        }
        .total-amount {
          color: rgba(0, 0, 0, 1);
          font-weight: 700;
        }
        .price-summary {
          border-radius: 5px;
          background-color: rgba(255, 255, 255, 1);
          display: flex;
          margin-top: 20px;
          min-height: 104px;
          width: 345px;
          max-width: 100%;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding: 10px 12px 10px 12px;
        }
        .price-details {
          display: flex;
          width: 100%;
          max-width: 334px;
          flex-direction: column;
          justify-content: end;
        }
        .price-row {
          display: flex;
          width: 100%;
          align-items: start;
          gap: 40px 100px;
          font-size: 20px;
          justify-content: space-between;
        }
        .price-label {
          color: var(--black, #000);
          font-weight: 400;
          opacity: 0.4;
        }
        .price-value {
          color: rgba(0, 0, 0, 1);
          font-weight: 700;
        }
        .discount-value {
          color: rgba(25, 142, 166, 1);
          font-size: 15px;
          font-weight: 700;
        }
        .final-price {
          color: rgba(255, 88, 51, 1);
          font-size: 24px;
          font-weight: 900;
          align-self: stretch;
          margin: auto 0;
        }
      `}</style>
    </div>
  );
};

export default OrderSummary;
