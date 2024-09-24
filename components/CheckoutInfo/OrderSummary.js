/**
 **
 */
import React from "react";

const OrderSummary = () => {
  return (
    <div className="order-summary2">
      <div className="summary-section2">
        <h2 className="summary-title2">您的訂單</h2>
        <div className="summary-details2">
          <div className="summary-row2">
            <span>商品</span>
            <span>露營帳篷</span>
          </div>
          <div className="summary-row">
            <span>數量</span>
            <span>*1</span>
          </div>
        </div>
        <div className="summary-total">
          <span>總價(原價)</span>
          <span>NT$ 1,300</span>
        </div>
      </div>
      <div className="price-section2">
        <div className="price-details">
          <div className="price-row">
            <span>價格</span>
            <span>NT$ 1,300</span>
          </div>
          <div className="price-row">
            <span>優惠卷</span>
            <span>七折折扣</span>
          </div>
          <div className="price-row total">
            <span>付款金額(優惠後)</span>
            <span>NT$ 910</span>
          </div>
        </div>
        <button className="btn-view-cart">查看購物車</button>
      </div>
      <div className="coupon-section2">
        <h3 className="coupon-title">使用優惠券</h3>
        <div className="coupon-input">
          <div className="input-wrapper">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/86f032261b14436b9a40d569811eebead69448cfd04a1651f550fb8f659ce911?placeholderIfAbsent=true&apiKey=ff1208b97220405794b61b476c6106d1"
              alt="Coupon icon"
              className="coupon-icon"
            />
            <input
              type="text"
              placeholder="輸入優惠碼"
              className="coupon-code-input"
            />
          </div>
          
        </div>
        <button className="btn-use-coupon">使用</button>
        <div className="coupon-card">
          <div className="coupon-card-header">
            <span className="coupon-label">COUPON</span>
            <span className="coupon-discount">30% OFF</span>
            <span className="coupon-type">全通路皆可使用</span>
          </div>
          <div className="coupon-card-body">
            <p className="coupon-description">
              【露營用具 】折扣碼：product20
              <br />
              有效期限：2024年12月31日
              <br />
              優惠內容：
            </p>
            <p className="coupon-offer">現在選購即享全品項 7 折優惠！</p>
          </div>
          <div className="coupon-select">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/1094b1c1c7328401fe25064ba895b52ac0dccff2cd2de50bc4ab4997890370df?placeholderIfAbsent=true&apiKey=ff1208b97220405794b61b476c6106d1"
              alt="Select coupon"
              className="select-icon"
            />
          </div>
        </div>
      </div>
      <style jsx>{`
        .order-summary2 {
          background-color: #ffffff;
          border-radius: 8px;
          padding: 24px;
          display: flex;
          flex-direction: column;
          gap: 24px;
        }
        .summary-section2,
        .price-section2,
        .coupon-section2 {
          border-bottom: 1px solid #e0e0e0;
          padding-bottom: 24px;
        }
        .summary-title2,
        .coupon-title {
          font-size: 18px;
          font-weight: 600;
          color: #333;
          margin-bottom: 16px;
        }
        .summary-details2,
        .price-details {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }
        .summary-row2,
        .price-row {
          display: flex;
          justify-content: space-between;
          font-size: 14px;
          color: #333;
        }
        .summary-total,
        .price-row.total {
          font-weight: 600;
          margin-top: 12px;
        }
        .btn-view-cart,
        .btn-use-coupon {
          width: 100%;
          padding: 12px;
          background-color: #fc9a84;
          color: #ffffff;
          border: none;
          border-radius: 4px;
          font-size: 16px;
          cursor: pointer;
          margin-top: 16px;
          {/* font-family: 'Poetsen One', 'Zen Maru Gothic', sans-serif; */}
        }
        .coupon-input {
          display: flex;
          gap: 8px;
        }
        .input-wrapper {
          flex-grow: 1;
          display: flex;
          align-items: center;
          border: 1px solid #ccc;
          border-radius: 4px;
          padding: 8px;
        }
        .coupon-icon {
          width: 20px;
          height: 20px;
          margin-right: 8px;
        }
        .coupon-code-input {
          border: none;
          outline: none;
          width: 100%;
          font-size: 14px;
        }
        .coupon-card {
          background-color: #f5aeae;
          border-radius: 8px;
          padding: 16px;
          margin-top: 16px;
          position: relative;
        }
        .coupon-card-header {
          display: flex;
          flex-direction: column;
          align-items: center;
          color: #ffffff;
          margin-bottom: 12px;
        }
        .coupon-label {
          font-size: 12px;
          font-weight: 600;
        }
        .coupon-discount {
          font-size: 24px;
          font-weight: 700;
        }
        .coupon-type {
          font-size: 10px;
        }
        .coupon-card-body {
          background-color: #ffffff;
          border-radius: 4px;
          padding: 12px;
        }
        .coupon-description,
        .coupon-offer {
          font-size: 12px;
          color: #333;
          margin: 0;
        }
        .coupon-offer {
          font-weight: 600;
          margin-top: 8px;
        }
        .coupon-select {
          position: absolute;
          top: 8px;
          right: 8px;
        }
        .select-icon {
          width: 24px;
          height: 24px;
        }
      `}</style>
    </div>
  );
};

export default OrderSummary;
