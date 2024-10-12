import React, { useEffect, useState } from 'react';
import ProductCard from './ProductCard';
import Pagi from './pagi'; // 引入 Pagi 組件

const ProductGrid = () => {
  const [products, setProducts] = useState([]); // 全部產品資料
  const [currentPage, setCurrentPage] = useState(1); // 當前頁碼
  const productsPerPage = 10; // 每頁顯示的產品數量

  // 模擬獲取產品數據
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('/api/books');
        const data = await response.json();

        // 只取前25筆資料
        const limitedData = data.slice(0, 25);

        // 不再需要設置圖片路徑，假設後端已經包含 product_pic
        setProducts(limitedData);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, []);

  // 計算總頁數
  const totalPages = Math.ceil(products.length / productsPerPage);

  // 計算當前頁面需要顯示的產品
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);

  // 當頁數改變時的處理函數
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <section className="product-grid">
      {/* 顯示當前頁面的產品 */}
      {currentProducts.map((product) => (
        <ProductCard
          key={product.product_id}
          product_id={product.product_id} // 傳遞 product_id
          image={`/uploads/${product.product_pic}`}
          badge={product.product_type}
          price={product.product_price}
          title={product.product_name}
          description={product.product_desc}
        />
      ))}

      {/* 分頁組件 */}
      <Pagi
        totalPages={totalPages}
        currentPage={currentPage}
        onPageChange={handlePageChange}
      />

      <style jsx>{`
        .filter-apply-button {
          background-color: var(--secondary-color);
          color: var(--white);
          border: none;
          border-radius: 4px;
          padding: 10px 15px;
          cursor: pointer;
          width: 100%;
        }

        .product-grid {
          display: flex;
          flex-wrap: wrap;
          gap: 30px 15px;
          justify-content: center;
          max-width: 1245px;
          padding: 8px;
        }

        @media (max-width: 991px) {
          .site-header {
            padding: 10px 20px;
          }

          .product-grid {
            max-width: 100%;
          }

          .product-card {
            width: calc(50% - 15px);
          }
        }
      `}</style>
    </section>
  );
};

export default ProductGrid;
