/**
 **
 */
import React from 'react'

const ProductCategories = () => {
  return (
    <nav className="product-categories navigation">
      <ul>
        <li>
          <a href="#discounts" className="category-link category-link-active">
            優惠商品
          </a>
        </li>
        <li>
          <a href="#recommended" className="category-link">
            推薦商品
          </a>
        </li>
        <li>
          <a href="#bestsellers" className="category-link">
            熱銷商品
          </a>
        </li>
        <li>
          <a href="#clearance" className="category-link">
            出清商品
          </a>
        </li>
      </ul>
      <style jsx>{`
        .product-categories {
          display: flex;
          justify-content: center;
          gap: 20px;
          margin: 21px 0;
        }

        .category-link {
          color: #b4a59f;
          text-decoration: none;
          font-size: 24px;
          font-weight: 500;
        }

        .category-link-active {
          color: #71564a;
          font-size: 30px;
        }
        .navigation ul {
          display: flex;
          justify-content: center;
          align-items: center;
          list-style: none;
          gap: 20px;
        }
      `}</style>
    </nav>
  )
}

export default ProductCategories
;
