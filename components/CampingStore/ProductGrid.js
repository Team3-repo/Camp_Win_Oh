import React, { useState } from 'react';
import ProductCard from './ProductCard';
import Pagi from './pagi';

const ProductGrid = ({ products, currentPage, setCurrentPage, itemsPerPage }) => {  // 修改 7: 接收新的 props
  
  // const [currentPage, setCurrentPage] = useState(1);
  // const productsPerPage = 10;

    // 修改 : 使用傳入的 itemsPerPage 替代 productsPerPage
    const indexOfLastProduct = currentPage * itemsPerPage;
    const indexOfFirstProduct = indexOfLastProduct - itemsPerPage;
    const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);
  
  // 修改 : 使用傳入的 itemsPerPage 計算總頁數
  const totalPages = Math.ceil(products.length / itemsPerPage);

  const handlePageChange = (page) => {
    setCurrentPage(page);  // 修改 8: 使用傳入的 setCurrentPage 函數
  };

  return (
    <section className="product-grid">
      <div className="products-wrapper">
        {currentProducts.map((product) => (
          <ProductCard
            key={product.product_id}
            product_id={product.product_id}
            image={`/uploads/${product.product_pic}`}
            badge={product.product_type}
            price={product.product_price}
            title={product.product_name}
            description={product.product_desc}
          />
        ))}
      </div>
      <Pagi
        totalPages={totalPages}
        currentPage={currentPage}
        onPageChange={handlePageChange}
      />

      <style jsx>{`
        .product-grid {
          display: flex;
          flex-wrap: wrap;
          gap: 30px 15px;
          justify-content: center;
          max-width: 1245px;
          padding: 8px;
        }
        .products-wrapper {
          display: flex;
          flex-wrap: wrap;
          gap: 30px 15px;
          justify-content: flex-start;
          flex-grow: 1;
          padding: 8px;
        }
        @media (max-width: 991px) {
          .product-grid {
            max-width: 100%;
          }
        }
      `}</style>
    </section>
  );
};

export default ProductGrid;
