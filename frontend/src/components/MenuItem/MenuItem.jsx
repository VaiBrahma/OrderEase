import React, { useState } from 'react';
import styles from './MenuItem.module.css';

const MenuItem = ({ item, menu, setMenu, triggerWiggle }) => {

  const [count, setCount ] = useState(0);
  
  const handleAdd = () => {
    setMenu(prevMenu => {
      const updatedMenu = { ...prevMenu };
      if (!updatedMenu[item.name]) {
        updatedMenu[item.name] = {
          quantity: 0,
          detail: item,
        };
      }
      let value = updatedMenu[item.name].quantity;
      if(updatedMenu[item.name].quantity===0)updatedMenu[item.name].quantity = value + 1;
      else updatedMenu[item.name].quantity+=1/2;
      console.log('After Add:', item.name, updatedMenu[item.name].quantity);
      return updatedMenu;
    });
    triggerWiggle(); // Trigger wiggle animation
  };

  const handleRemove = () => {
    setMenu(prevMenu => {
      const updatedMenu = { ...prevMenu };
      if (updatedMenu[item.name] && updatedMenu[item.name].quantity > 0) {
          updatedMenu[item.name].quantity = updatedMenu[item.name].quantity - 1/2;
        if (updatedMenu[item.name].quantity === 0) {
          delete updatedMenu[item.name];
        }
      }
      console.log('After Remove:', updatedMenu);
      return updatedMenu;
    });
    triggerWiggle(); // Trigger wiggle animation
  };

  return (
    <div className={`${styles.card}`}>
      <div className={`${styles.left}`} style={{ background: `url(${item.image_rc || '/images/defaultFoodIcon.jpeg'}) no-repeat center center/cover` }}></div>
      <div className={`${styles.right}`}>
        <div className={`${styles.title}`}>{item.name}</div>
        <div className={`${styles.desc}`}>{item.vegetarian ? 'vegetarian' : 'non-vegetarian'}</div>
        <div className={`${styles.price}`}><span className='text-[#ffffff61]'>Price:</span> ₹{item.price} /-</div>
        <div className={`${styles.buttons}`}>
          <button className={`${styles.remove}`}><img src="/icons/remove.png" alt="-" onClick={handleRemove} /></button>
          <button className={`${styles.add}`}><img src="/icons/add.png" alt="+" onClick={handleAdd} /></button>
        </div>
      </div>
    </div>
  );
};

export default MenuItem;
