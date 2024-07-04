import React from 'react';
import styles from './CategoryList.module.css';
import MenuItem2 from '../../MenuItem/MenuItem2';

const CategoryList = ({ menu, onEdit, onDelete }) => {
  const categories = ['starters', 'soups', 'main', 'desserts', 'drinks', 'snacks'];
// console.log(menu);
  return (
    <div className={styles.categoryList}>
       {menu.length &&  <h1 className='text-[orange] text-[2rem] text-center'>Menu Item List</h1>}
      {categories.map((category) => {
          const items = menu.filter(item => item.title === category);
          if (items.length === 0) return null;
          
          return (
            <>
            <div key={category} className={styles.category}>
                <h3 className='text-center'>{category}</h3>
                {items.map((item) => (
                <MenuItem2 key={item.id} {...item} onEdit={onEdit} onDelete={onDelete} />
                ))}
            </div>
          </>
        );
      })}
    </div>
  );
};

export default CategoryList;