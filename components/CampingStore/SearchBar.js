/**
 **
 */
 import React, { useState } from "react"; // 修改：添加 useState import

 const SearchBar = ({ onSearch }) => { // 修改：添加 onSearch prop
   const [searchTerm, setSearchTerm] = useState(""); // 新增：添加 searchTerm state
 
   const handleSubmit = (e) => { // 新增：添加 handleSubmit 函數
     e.preventDefault();
     onSearch(searchTerm);
   };
 
  return (
    <section>
    <form className="search-form" onSubmit={handleSubmit}> {/* 修改：添加 onSubmit 處理 */}
      <label htmlFor="search-input" className="visually-hidden">
        搜尋關鍵字
      </label>
      <input
        id="search-input"
        className="search-input"
        type="text"
        placeholder="輸入搜尋關鍵字"
        value={searchTerm} // 新增：綁定 value 到 searchTerm
        onChange={(e) => setSearchTerm(e.target.value)} // 新增：處理輸入變化
      />
         <button type="submit" className="search-button">
          搜尋
        </button>
      </form>
      <style jsx>{`
        .search-form {
          display: flex;
          max-width: 1080px;
          margin: 20px auto 0;
        }
        .visually-hidden {
          position: absolute;
          width: 1px;
          height: 1px;
          padding: 0;
          margin: -1px;
          overflow: hidden;
          clip: rect(0, 0, 0, 0);
          white-space: nowrap;
          border: 0;
        }
        .search-input {
          flex-grow: 1;
          padding: 10px;
          border: 1px solid #ccc;
          border-radius: 4px 0 0 4px;
          font-size: 16px;
        }
        .search-button {
          background: var(--BTN-CLOR, #fc9a84);
          color: var(--white, #fff);
          border: none;
          border-radius: 0 4px 4px 0;
          padding: 10px 20px;
          cursor: pointer;
          font-size: 16px;
        }
      `}</style>
    </section>
  );
};

export default SearchBar;

