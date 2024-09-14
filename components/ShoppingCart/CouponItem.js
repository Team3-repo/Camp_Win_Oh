/**
 **
 */
import React from "react";

function CouponItem({ discount, type }) {
  return (
    <div className="couponItem">
      <div className="couponDetails">
        <div className="couponDiscount">{discount}優惠卷</div>
        <div className="couponType">
          <div className="typeSelect">
            <div className="selectIndicator" />
            <div className="selectText">{type}</div>
          </div>
        </div>
      </div>
      <button className="useButton">使用</button>
      <style jsx>{`
        .couponItem {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 14px 0;
        }
        .couponDetails {
          display: flex;
          align-items: center;
          gap: 10px;
        }
        .couponDiscount {
          font-size: 16px;
          font-weight: 700;
          min-width: 240px;
          text-align: center;
        }
        .couponType {
          font-size: 20px;
          color: #4c3a30;
        }
        .typeSelect {
          display: flex;
          align-items: center;
          gap: 8px;
        }
        .selectIndicator {
          border-radius: 14px;
          background-color: #fff;
          width: 24px;
          height: 24px;
          border: 1px solid #ff81d2;
        }
        .useButton {
          border-radius: 11px;
          background-color: #fc9a84;
          color: #fff;
          font-size: 16px;
          padding: 5px 15px;
          border: none;
          cursor: pointer;
        }
        @media (max-width: 991px) {
          .couponItem {
            flex-direction: column;
            align-items: flex-start;
            gap: 10px;
          }
          .useButton {
            align-self: flex-end;
          }
        }
      `}</style>
    </div>
  );
}

export default CouponItem;
