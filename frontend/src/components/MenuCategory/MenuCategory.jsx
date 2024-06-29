import React from 'react';
import styles from './MenuCategory.module.css';
import MenuItem from '../MenuItem/MenuItem';

const MenuCategory = ({ category, index, activeRow, handleClick, menu, setMenu, triggerWiggle }) => {
  return (
    <div className={styles.row}>
      <button className={styles.toggleButton} onClick={() => handleClick(index)}>
        {category.title}
      </button>
      {activeRow === index && (
        <div className={styles.cards}>
          {category.items.map((item, cardIndex) => (
            <div key={cardIndex} className={styles.card}>
              <MenuItem item={item} menu={menu} setMenu={setMenu} triggerWiggle={triggerWiggle} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MenuCategory;
