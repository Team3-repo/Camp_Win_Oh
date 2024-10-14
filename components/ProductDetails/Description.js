import React from "react";

function Description({ product }) { // 接收 product 作為屬性
  return (
    <section className="product-description">
      <h2 className="description-title">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/8df11b0c33e7fdf59c3e6ae3f74351f2d3aa08bed90a6c13ed01ea697ba58867?placeholderIfAbsent=true&apiKey=ff1208b97220405794b61b476c6106d1"
          className="description-icon"
          alt=""
        />
        描述
      </h2>
      <p className="description-text">
        {product.product_desc} {/* 使用 product 的描述資料 */}
      </p>
      <style jsx>{`
        .product-description {
          border: 3px dashed #6f8e62;
          margin-top: 48px;
          padding: 35px 80px;
          font: 400 16px Inter, sans-serif;
        }
        .description-title {
          display: flex;
          align-items: center;
          gap: 5px;
          color: #000;
          font-size: 22px;
          margin-bottom: 20px;
        }
        .description-icon {
          width: 9px;
          height: 14px;
        }
        .description-text {
          font-size: 18px;
          color: #000;
          margin-left: 20px;
        }
        @media (max-width: 991px) {
          .product-description {
            margin-top: 40px;
            padding: 20px;
          }
        }
      `}</style>
    </section>
  );
}

export default Description;
