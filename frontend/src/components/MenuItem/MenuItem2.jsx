import React, { useState } from 'react';
import styles from './MenuItem.module.css';

const MenuItem2 = ({ id, name, image_src, vegetarian, price, onEdit, onDelete }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editName, setEditName] = useState(name);
  const [editPrice, setEditPrice] = useState(price);
  const [editVegetarian, setEditVegetarian] = useState(vegetarian);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    onEdit(id, editName, editPrice, editVegetarian);
    setIsEditing(false);
  };

  const handleCancel = () => {
    setIsEditing(false);
    setEditName(name);
    setEditPrice(price);
    setEditVegetarian(vegetarian);
  };
  
  return (
    <div className={styles.card}>
      <div className={styles.left} style={{ background: `url(${image_src || '/images/defaultFoodIcon.jpeg'}) no-repeat center center/cover` }}></div>
      <div className={styles.right}>
        {isEditing ? (
          <div className='flex flex-col gap-2'>
            <input className={styles.inputt} type="text" value={editName} onChange={(e) => setEditName(e.target.value)} />
            <select className={styles.inputt} value={editVegetarian} onChange={(e) => setEditVegetarian(e.target.value)}>
                <option value='true'> Vegetarian</option>
                <option value='false'> Non-vegetarian</option>
            </select>
            <input className={styles.inputt} type="number" value={editPrice} onChange={(e) => setEditPrice(e.target.value)} />
            <div className="btns">
                <button onClick={handleSave}>Save</button>
                <button onClick={handleCancel}>Cancel</button>
            </div>
          </div>
        ) : (
          <>
            <div className={styles.title}>{name}</div>
            <div className={styles.desc}>{vegetarian ? 'Vegetarian' : 'Non-Vegetarian'}</div>
            <div className={styles.price}><span className='text-[#ffffff61]'>Price:</span> ₹{price} /-</div>
            <div className={styles.buttons}>
              <button className={styles.edit} onClick={handleEdit}>Edit</button>
              <button className={styles.delete} onClick={() => onDelete(id)}>Delete</button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default MenuItem2;
