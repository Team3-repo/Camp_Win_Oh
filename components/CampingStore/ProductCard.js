/**
 **
 */
 import React from 'react';
 import Link from 'next/link';
 
 const ProductCard = ({ product_id, image, badge, price, title, description }) => {
   return (
     <article className="product-card">
       <div className="product-image-container">
         <img src={image} alt={title} className="product-image" />
         <div className="product-price">${price}</div>
       </div>
       <h3 className="product-title">{title}</h3>
       <p className="product-description">{description}</p>
       {/* 使用 product_id 作為路由參數 */}
       <Link href={`/cart/2ProductDetails?product_id=${product_id}`}>
         <button className="buy-button">立即選購</button>
       </Link>
       <style jsx>{`
         .product-card {
           display: flex;
           flex-direction: column;
           align-items: center;
           background-color: #fff;
           border-radius: 15px;
           padding: 15px;
           width: 228px;
           display: flex;
           flex-direction: column;
         }
 
         .product-image-container {
           position: relative;
           aspect-ratio: 1.428;
           overflow: hidden;
         }
 
         .product-image {
           width: 100%;
           height: 100%;
           object-fit: cover;
         }
 
         .product-badge {
           position: absolute;
           top: 11px;
           right: 12px;
           width: 30px;
           height: 30px;
           border-radius: 11px;
         }
 
         .product-price {
           position: absolute;
           bottom: 11px;
           left: 50%;
           transform: translateX(-50%);
           background-color: #fff;
           border-radius: 8px;
           padding: 5px 10px;
           font-weight: bold;
           color: #ff4747;
         }
 
         .product-title {
           font-size: 18px;
           font-weight: 700;
           text-align: center;
           margin: 11px 0;
         }
 
         .product-description {
           font-size: 12px;
           text-align: center;
           flex-grow: 1;
         }
 
         .buy-button {
           text-align: center;
           align-self: center;
           background-color: var(--secondary-color);
           color: white;
           border: none;
           border-radius: 8.414px;
           padding: 5px 10px;
           font-size: 16px;
           cursor: pointer;
           margin-top: 11px;
           background: var(--BTN-CLOR, #fc9a84);
         }
       `}</style>
     </article>
   );
 };
 
 export default ProductCard;
 