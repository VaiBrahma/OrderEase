import React from 'react';
import styles from './CategoryList.module.css';
import MenuItem2 from '../../MenuItem/MenuItem2';

const CategoryList = ({ menu, onEdit, onDelete, categoryRef }) => {
  const categories = ['starters', 'soups', 'main', 'desserts', 'drinks', 'snacks'];

  return (
    <div className={styles.categoryList} ref={categoryRef}>
      {menu.length > 0 && <h1 className='text-[orange] text-[2rem] text-center'>Menu Item List</h1>}
      {categories.map((category) => {
        const items = menu.filter(item => item.category.toLowerCase() === category.toLowerCase());
        if (items.length === 0) return null;

        const categoryClass = `category-${category}`;

        return (
          <div key={category} className={`${styles.category} ${styles[categoryClass]}`}>
            <h3 className='text-center'>{category}</h3>
            {items.map((item) => (
              <MenuItem2 key={item.id} {...item} item={item} onEdit={onEdit} onDelete={()=>onDelete(item)} />
            ))}
          </div>
        );
      })}
    </div>
  );
};

export default CategoryList;
