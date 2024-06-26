import React from 'react';
import styles from './SearchBar.module.css';

const SearchBar = ({ searchQuery, setSearchQuery }) => {
  return (
    <div className={styles.searchBar}>
      <input
        type="text"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        placeholder="Search for dishes..."
        className={styles.searchInput}
      />
    </div>
  );
};

export default SearchBar;
