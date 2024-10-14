import React, { useState } from 'react';
import { useCart } from '../../context/CartContext'; // 更新路徑
import ProductInfo from "@/components/ProductDetails/ProductInfo";
import OrderSummary from "@/components/ProductDetails/OrderSummary";
import Description from "@/components/ProductDetails/Description";
import Footer from '@/components/event/footer2';
import Navbar from '@/components/event/navbar';
import { useRouter } from 'next/router';
import db from '@/lib/db'; // 確保這是你的 MySQL 連線檔案

function ProductDetails({ product }) {
  const { cartItems, setCartItems } = useCart(); // 獲取 cartItems 和 setCartItems
  const [quantity, setQuantity] = useState(1);
  const pricePerItem = product.product_price; // 使用從數據庫獲取的價格
  const router = useRouter();

  const updateQuantity = (newQuantity) => {
    setQuantity(newQuantity);
  };

  const addToCart = () => {
    if (product) {
        const newItem = { 
            name: product.product_name, 
            quantity: parseInt(quantity, 10), 
            price: parseFloat(pricePerItem), 
            product_pic: product.product_pic,
            product_id: product.product_id // 確保這裡有產品 ID 
        };

        setCartItems((prevItems) => {
          const existingItemIndex = prevItems.findIndex(item => item.product_id === product.product_id);
          if (existingItemIndex !== -1) {
            // 如果已存在，更新數量
            const updatedItems = [...prevItems];
            updatedItems[existingItemIndex].quantity += newItem.quantity; // 增加數量
            localStorage.setItem('cartItems', JSON.stringify(updatedItems)); // 儲存到 localStorage
            return updatedItems;
          } else {
            // 如果不存在，添加新項目
            const updatedItems = [...prevItems, newItem];
            localStorage.setItem('cartItems', JSON.stringify(updatedItems)); // 儲存到 localStorage
            return updatedItems;
          }
        });
    }
};

  return (
    <>
      <Navbar />
      <div className="product-details-body">
        <main className="product-content">
          <div className="product-layout">
            <ProductInfo 
              quantity={quantity} 
              updateQuantity={updateQuantity} 
              addToCart={addToCart} 
              pricePerItem={pricePerItem} 
              product={product} // 新增此行以傳遞 product
            />
            <OrderSummary cartItems={cartItems} />
          </div>
          <Description product={product} /> {/* 在此處傳遞 product */}

        </main>
      </div>
      <Footer />
      <style jsx>{`
        .product-details-body {
          background-color: #cfe9c6;
          display: flex;
          flex-direction: column;
          align-items: center;
          overflow: hidden;
          margin-bottom:50px;
        }
        .product-content {
          align-self: center;
          margin-top: 57px;
          width: 100%;
          max-width: 1200px;
        }
        .product-layout {
          display: flex;
          justify-content:space-between;
          gap: 20px;
        }
        @media (max-width: 991px) {
          .product-content {
            max-width: 100%;
            margin-top: 40px;
          }
          .product-layout {
            flex-direction: column;
            align-items: stretch;
            gap: 0;
          }
        }
      `}</style>
    </>
  );
}

// 使用 getServerSideProps 來從資料庫中獲取資料
export async function getServerSideProps(context) {
  const { product_id } = context.query;

  // 確保 product_id 是有效的
  if (!product_id) {
    return {
      notFound: true,
    };
  }

  const [rows] = await db.query('SELECT * FROM books WHERE product_id = ?', [product_id]);

  if (rows.length === 0) {
    return {
      notFound: true,
    };
  }

  // 取得產品資料
  const product = rows[0];

  // 將 create_at 轉換為字串格式
  product.create_at = product.create_at.toISOString(); // 或者使用其他格式，根據需要
  product.price = parseFloat(product.price); // 確保價格為數字

  return {
    props: {
      product,
    },
  };
}

export default ProductDetails;
