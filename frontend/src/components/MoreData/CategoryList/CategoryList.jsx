import React from 'react';
import styles from './CategoryList.module.css';
import MenuItem2 from '../../MenuItem/MenuItem2';

const CategoryList = ({ menu, onEdit, onDelete }) => {
  const categories = ['starters', 'soups', 'main', 'desserts', 'drinks', 'snacks'];

  return (
    <div className={styles.categoryList}>
      {menu.length > 0 && <h1 className='text-[orange] text-[2rem] text-center'>Menu Item List</h1>}
      {categories.map((category) => {
        const items = menu.filter(item => item.title === category);
        if (items.length === 0) return null;

        const categoryClass = `category-${category}`;

        return (
          <div key={category} className={`${styles.category} ${styles[categoryClass]}`}>
            <h3 className='text-center'>{category}</h3>
            {items.map((item) => (
              <MenuItem2 key={item.id} {...item} onEdit={onEdit} onDelete={onDelete} />
            ))}
          </div>
        );
      })}
    </div>
  );
};

export default CategoryList;
