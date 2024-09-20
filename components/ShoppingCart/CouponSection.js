/**
 **
 */
import React from "react";
import CouponItem from "./CouponItem";

function CouponSection() {
  const coupons = [
    { discount: "7折", type: "全部" },
    { discount: "8折", type: "全部" },
    { discount: "9折", type: "全部" },
  ];

  return (
    <section className="couponSection">
      <h2 className="sectionTitle">使用優惠卷</h2>
      <div className="couponList">
        {coupons.map((coupon, index) => (
          <CouponItem
            key={index}
            discount={coupon.discount}
            type={coupon.type}
          />
        ))}
      </div>
      <style jsx>{`
        .couponSection {
          border-radius: 10px;
          background-color: #fff;
          box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
          display: flex;
          flex-direction: column;
          font-family: Zen Maru Gothic, -apple-system, Roboto, Helvetica,
            sans-serif;
          margin-top: 46px;
          width:100%;
        }
        .sectionTitle {
          margin-top:0px;
          border-radius: 10px 10px 0 0;
          background-color: #198ea6;
          color: #fff;
          font-size: 28px;
          font-weight: 500;
          padding: 9px;
          text-align: center;
        }
        .couponList {
          display: flex;
          flex-direction: column;
          padding: 10px 30px;
        }
        @media (max-width: 991px) {
          .couponSection {
            max-width: 100%;
            margin-top: 40px;
          }
          .sectionTitle {
            padding: 9px 20px;
          }
          .couponList {
            padding: 10px 20px;
          }
        }
      `}</style>
    </section>
  );
}

export default CouponSection;
