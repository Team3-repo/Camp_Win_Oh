import React from 'react'

const ProductCategories = ({
  activeCategory,
  onCategoryChange,
  setCurrentPage,
}) => {
  const categories = [
    '所有商品',
    '優惠商品',
    '推薦商品',
    '熱銷商品',
    '出清商品',
  ]

  return (
    <nav className="product-categories navigation">
      <ul>
        {categories.map((category) => (
          <li key={category}>
            <a
              href={`#${category}`}
              className={`category-link ${
                activeCategory === category ? 'category-link-active' : ''
              }`}
              onClick={(e) => {
                e.preventDefault()
                // setCurrentPage(1); // 在這裡重置頁碼
                onCategoryChange(category)
              }}
            >
              {category}
            </a>
          </li>
        ))}
      </ul>
      <style jsx>{`
        .product-categories {
          display: flex;
          justify-content: center;
          gap: 20px;
          margin: 21px 0;
          margin-top: 67px;
          font-family: 'Poetsen One', 'Zen Maru Gothic', sans-serif;
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
