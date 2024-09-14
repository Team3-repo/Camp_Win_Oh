import React from "react";

const ProductFilter = () => {
  return (
    <>
      <aside className="product-filter">
        <h2>篩選</h2>
        <form>
          {/* 使用CSS來將label橫向排列 */}
          <fieldset className="filter-group">    {/* 新增 className */}
            <legend>價格區間</legend>
            <div className="filter-options">     {/* 新增 div 並增加 className */}
              <label>
                <input type="checkbox" name="price" value="0-500" /> $0 - $500
              </label>
              <label>
                <input type="checkbox" name="price" value="501-1000" /> $501 - $1000
              </label>
              <label>
                <input type="checkbox" name="price" value="1001+" /> $1001+
              </label>
            </div>                                {/* 關閉 div */}
          </fieldset>

          <fieldset className="filter-group">    {/* 新增 className */}
            <legend>產品類型</legend>
            <div className="filter-options">     {/* 新增 div 並增加 className */}
              <label>
                <input type="checkbox" name="type" value="tent" /> Tents
              </label>
              <label>
                <input type="checkbox" name="type" value="sleeping-bag" /> Sleeping Bags
              </label>
              <label>
                <input type="checkbox" name="type" value="cookware" /> Cookware
              </label>
            </div>                                {/* 關閉 div */}
          </fieldset>

          <button type="submit" className="filter-apply-button">
            套用
          </button>
        </form>
      </aside>
    </>
  );
};

export default ProductFilter;
