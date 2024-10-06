// pages/showData.jsx
import React from 'react';

export default function ShowData({ products }) {
  return (
    <div>
      <h1>產品列表</h1>
      <ul>
        {products.map((product) => (
          <li key={product.product_id}>
            <h2>{product.product_name}</h2>
            <p>類型: {product.product_type}</p>
            <p>價格: ${product.product_price}</p>
            <p>數量: {product.product_num}</p>
            <p>描述: {product.product_desc}</p>
            <img src={`/uploads/${product.product_pic}`} alt={product.product_name} width={100} height={100} />
          </li>
        ))}
      </ul>
    </div>
  );
}

// 在伺服器端獲取資料
export async function getServerSideProps() {
  const res = await fetch('http://localhost:3000/api/getData'); // 使用正確的 API URL
  const products = await res.json();

  return {
    props: {
      products,
    },
  };
}
