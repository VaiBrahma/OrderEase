import React, { useState } from 'react';
import styles from './MenuItem.module.css';

const MenuItem2 = ({ item, id, name, image_src, vegetarian, price, onEdit, onDelete,category, isButtonNeeded=true }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editName, setEditName] = useState(name);
  const [editPrice, setEditPrice] = useState(price);
  const [editVegetarian, setEditVegetarian] = useState(vegetarian);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    onEdit(item, editName, editPrice, editVegetarian);
    setIsEditing(false);
  };

  const handleCancel = () => {
    setIsEditing(false);
    setEditName(name);
    setEditPrice(price);
    setEditVegetarian(vegetarian);
  };

  const categoryClass = `category-${category}`;
  
  return (
    <div className={`${styles.card} w-[100%]`}>
      <div className={styles.left} style={{ background: `url(${image_src || '/images/defaultFoodIcon.jpeg'}) no-repeat center center/cover` }}></div>
      <div className={`${styles.right} ${styles[categoryClass]}`}>
        {isEditing ? (
          <form onSubmit={handleSave}>
            <div className='flex flex-col gap-2'>
              <input className={styles.inputt} type="text" value={editName} onChange={(e) => setEditName(e.target.value)} />
              <select className={styles.inputt} value={editVegetarian} onChange={(e) => setEditVegetarian(e.target.value)}>
                  <option value='true'> Vegetarian</option>
                  <option value='false'> Non-vegetarian</option>
              </select>
              <input className={styles.inputt} type="number" value={editPrice} onChange={(e) => setEditPrice(e.target.value)} />
              <div className='h-[10px]'></div>
              <div className={styles.buttons}>
                  <button type='submit' className='my-1.5 mx-1 px-2 bg-[#00000049] rounded-md shadow-md hover:bg-black'>Save</button>
                  <button onClick={handleCancel} className='my-1.5 px-2 bg-[#00000049] rounded-md shadow-md hover:bg-black'>Cancel</button>
              </div>
            </div>
          </form>
        ) : (
          <>
            <div className={styles.title}>{name}</div>
            <div className={styles.desc}>{vegetarian ? 'Vegetarian' : 'Non-Vegetarian'}</div>
            <div className={styles.price}><span className='text-[#ffffff61]'>Price:</span> ₹{price} /-</div>
            {isButtonNeeded && <div className={styles.buttons}>
              <button className={styles.edit} onClick={handleEdit}><img src="/icons/edit.png" alt="edit" /></button>
              <button className={styles.delete} onClick={() => onDelete(id)}> <img src="/icons/delete.png" alt="delete" /> </button>
            </div>}
          </>
        )}
      </div>
    </div>
  );
};

export default MenuItem2;
