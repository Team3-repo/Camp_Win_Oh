/**
 **
 */
import React from "react";

function ProductInfo() {
  return (
    <section className="product-info">
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/6c701eb1620ca3db59174cf5faaf96ae7b7aec9097b74bd70df6cca6a6d07f55?placeholderIfAbsent=true&apiKey=ff1208b97220405794b61b476c6106d1"
        className="product-image"
        alt="Camping Tent"
      />
      <div className="product-details">
        <h2 className="product-title">露營帳篷</h2>
        <div className="price-container">
          <p className="storeproduct-price">NT$1300</p>
          {/* <p className="price-separator">_</p> */}
        </div>
        {/* <h2>NT$1300</h2> */}
        <div className="quantity-selector">
          <button className="quantity-btn" aria-label="Decrease quantity">
            -
          </button>
          <span className="quantity">1</span>
          <button className="quantity-btn" aria-label="Increase quantity">
            +
          </button>
        </div>
        <button className="add-to-cart-btn">加入購物車</button>
      </div>
      <style jsx>{`
        .product-info {
          display: flex;
          flex-direction: column;
          width: 77%;
        }
        .product-image {
          aspect-ratio: 1.12;
          object-fit: contain;
          width: 100%;
          margin-top: 12px;
        }
        .product-details {
          display: flex;
          flex-direction: column;
          font-family: Zen Maru Gothic, sans-serif;
          color: #000;
          margin-top: 20px;
        }
        .product-title {
          font-size: 30px;
          font-weight: 700;
          margin: auto;
        }
        .price-container {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          margin-top: 20px;
          font-family: Inter, sans-serif;
        }
        .storeproduct-price {
          margin:auto;
          font-size: 21px;
          margin-bottom: 25px;
        }
        .price-separator {
          font-size: 30px;
          font-weight: 700;
          margin-top: 10px;
        }
        .quantity-selector {
          display: flex;
          align-items: center;
          gap: 4px;
          margin-top: 13px;
          margin:auto;
        }
        .quantity-btn {
          width: 42px;
          height: 35px;
          border: 1px solid #626262;
          background-color: transparent;
          font-size: 24px;
          cursor: pointer;
        }
        .quantity {
          padding: 4px 29px;
          border: 1px solid #626262;
          font-size: 21px;
        }
        .add-to-cart-btn {
          align-self: stretch;
          border-radius: 11px;
          background-color: #a9a859;
          color: #fff;
          font-size: 20px;
          padding: 10px 30px;
          margin-top: 24px;
          border: none;
          cursor: pointer;
        }
        @media (max-width: 991px) {
          .product-info {
            width: 100%;
          }
          .product-image {
            max-width: 100%;
            margin-top: 40px;
          }
          .quantity,
          .quantity-btn {
            padding: 4px 20px;
          }
          .add-to-cart-btn {
            margin-right: 4px;
            padding: 10px 20px;
          }
        }
      `}</style>
    </section>
  );
}

export default ProductInfo;
