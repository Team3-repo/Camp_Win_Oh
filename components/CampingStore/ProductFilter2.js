import React from 'react'

const ProductFilter = () => {
  return (
    <aside className="product-filter2">
      <h2>篩選</h2>
      <form>
        <fieldset>
          <legend>價格區間</legend>
          <label>
            <input type="checkbox" name="price" value="0-500" /> $0 - $500
          </label>
          <label>
            <input type="checkbox" name="price" value="501-1000" /> $501 - $1000
          </label>
          <label>
            <input type="checkbox" name="price" value="1001+" /> $1001+
          </label>
        </fieldset>
        <fieldset>
          <legend>產品種類</legend>
          <label>
            <input type="checkbox" name="type" value="tent" /> 帳篷與睡眠設備
          </label>
          <label>
            <input type="checkbox" name="type" value="sleeping-bag" /> 戶外用品
          </label>
          <label>
            <input type="checkbox" name="type" value="cookware" /> 其他
          </label>
        </fieldset>
        <button type="submit" className="filter-apply-button">
          套用
        </button>
      </form>
      <style jsx>{`
        .product-filter2 {
          width: 250px;
          background-color: #f0f0f0;
          padding: 20px;
          border-radius: 8px;
          margin: auto;
          margin-top: 20px;
          margin-bottom: 10px;
        }

        .product-filter2 h2 {
          margin-top: 0;
        }

        .product-filter2 fieldset {
          border: none;
          padding: 0;
          margin-bottom: 20px;
        }

        .product-filter2 legend {
          font-weight: bold;
          margin-bottom: 10px;
        }

        .product-filter2 label {
          display: block;
          margin-bottom: 5px;
        }

        .filter-apply-button {
          background: var(--BTN-CLOR, #fc9a84);
          background-color: var(--BTN-CLOR, #fc9a84);          color: var(--white, var(--white, #fff));          border: none;
          border-radius: 4px;
          padding: 10px 15px;
          cursor: pointer;
          width: 100%;
        }
      `}</style>
    </aside>
  )
}

export default ProductFilter
;
