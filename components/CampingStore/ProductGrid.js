/**
 **
 */
import React from 'react'
import ProductCard from './ProductCard'

const ProductGrid = ({ products }) => {
  return (
    <section className="product-grid">
      {products.map((product, index) => (
        <ProductCard key={index} {...product} />
      ))}
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
  )
}

export default ProductGrid
