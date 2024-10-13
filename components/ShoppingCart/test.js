import React, { useState } from "react";
import CouponItem from "./CouponItem";

function CouponSection({ onApplyCoupon }) {
  const [selectedCoupon, setSelectedCoupon] = useState("");
  const [inputCoupon, setInputCoupon] = useState("");
  
  const coupons = [
    { id: 1, name: "7折優惠卷", discount: "0.7", type: "全部1", code: "SAVE30" },
    { id: 2, name: "8折優惠卷", discount: "0.8", type: "全部2", code: "SAVE20" },
    { id: 3, name: "9折優惠卷", discount: "0.9", type: "全部3", code: "SAVE10" },
  ];

  const handleCouponSelect = (e) => {
    setSelectedCoupon(e.target.value);
  };

  const handleInputChange = (e) => {
    setInputCoupon(e.target.value);
  };

  
  const handleApplyCoupon = () => {
    const coupon = coupons.find(c => c.code === (selectedCoupon || inputCoupon));
    if (coupon) {
      onApplyCoupon(coupon);
    } else {
      alert("無效的優惠碼");
    }
  };


  return (
    <section className="couponSection">
      {/* <h2 className="sectionTitle">使用優惠券</h2> */}
        <select value={selectedCoupon} onChange={handleCouponSelect} className="sectionTitle">
        選擇優惠券
          <option value="">選擇優惠券</option>
          {coupons.map((coupon) => (
            <option key={coupon.id} value={coupon.code} >
            {coupon.type}    {coupon.name}
            </option>
          ))}
          
        </select>
      {/* <div className="couponList">
        {coupons.map((coupon) => (
          <CouponItem
            key={coupon.id}
            discount={coupon.discount}
            type={coupon.type}
            isSelected={selectedCoupon === coupon.code}
            onClick={() => setSelectedCoupon(coupon.code)}
          />
        ))}
      </div> */}
      {/* <div className="couponInput">
        <input
          type="text"
          value={inputCoupon}
          onChange={handleInputChange}
          placeholder="輸入優惠碼"
        />
        <button onClick={handleApplyCoupon}>使用</button>
      </div> */}
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
