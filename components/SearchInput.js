import React from 'react';
import SearchIcon from './icons/SearchIcon'; // 引入 SearchIcon 組件
import styles from '../styles/SearchInput.module.css'; // 引入 CSS 模塊

const SearchInput = ({ placeholder }) => (
  <div className={styles.searchContainer}>
    <input
      type="text"
      placeholder={placeholder}
      className={styles.searchInput}
    />
    <SearchIcon className={styles.searchIcon} />
  </div>
);

export default SearchInput;
