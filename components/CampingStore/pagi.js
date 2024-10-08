

import React from 'react';

const Pagi = ({ totalPages, currentPage, onPageChange }) => {
  // 生成頁碼陣列，從 1 開始
  const pageNumbers = [...Array(totalPages).keys()].map(num => num + 1);

  return (
    <>
      <ul className="pagination modal-4">
        {/* 上一頁按鈕 */}
        <li>
          <h5
            href="#"
            className="prev"
            onClick={() => currentPage > 1 && onPageChange(currentPage - 1)}
          >
            <i className="fa fa-chevron-left" />
            上一頁
          </h5>
        </li>

        {/* 動態生成頁碼按鈕 */}
        {pageNumbers.map(number => (
          <li key={number}>
            <h5
              className={currentPage === number ? 'active' : ''}
              onClick={() => onPageChange(number)}
            >
              {number}
            </h5>
          </li>
        ))}

        {/* 下一頁按鈕 */}
        <li>
          <h5
            className="next"
            onClick={() => currentPage < totalPages && onPageChange(currentPage + 1)}
          >
            下一頁
            <i className="fa fa-chevron-right" />
          </h5>
        </li>
      </ul>
      </>
  );
};

export default Pagi;