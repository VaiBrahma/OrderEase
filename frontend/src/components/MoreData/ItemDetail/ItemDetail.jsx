import React, { useState } from 'react';
import styles from './ItemDetail.module.css';
import MenuItem2 from '../../MenuItem/MenuItem2';
import CategoryList from '../CategoryList/CategoryList';

const ItemDetail = () => {
  const [menu, setMenu] = useState([]);
  const [title, setTitle] = useState('');
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [vegetarian, setVegetarian] = useState(true);
  const [isAvailable, setIsAvailable] = useState(true);
  const [image_src, setImageSrc] = useState('/images/defaultFoodIcon.jpeg');

  const handleSubmit2 = (e) => {
    e.preventDefault();
    const item = {
      id: Date.now().toString(),
      title,
      name,
      price, 
      vegetarian,
      isAvailable,
      image_src,
    };
    setMenu(prevMenu => [...prevMenu, item]);
  };

  const handleEdit = (id, newName, newPrice, newVegetarian) => {
    let bool = newVegetarian === 'true';
    setMenu(prevMenu => prevMenu.map(item => 
      item.id === id ? { ...item, name: newName, price: newPrice, vegetarian: bool } : item
    ));
  };

  const handleDelete = (id) => {
    setMenu(prevMenu => prevMenu.filter(item => item.id !== id));
  };

  return (
    <div className='mt-[5rem]'>
      <h2 className="text-2xl font-bold mb-6 text-center text-[orange]">What is in the Menu?</h2>
      <div className={styles.loginContainer}>
        <form onSubmit={handleSubmit2}>
          <div className={styles.inputContainer}>
            <select required className={styles.inputField} value={title} onChange={(e) => setTitle(e.target.value)}>
              <option value="" disabled hidden>Choose Category</option>
              <option value="starters">Starters</option>
              <option value="soups">Soups</option>
              <option value="main">Main</option>
              <option value="desserts">Desserts</option>
              <option value="drinks">Drinks</option>
              <option value="snacks">Snacks</option>
            </select>
            <label className={styles.inputLabel}>Choose Category</label>
          </div>
          <div className={styles.inputContainer}>
            <input type='text' required className={styles.inputField} placeholder="" value={name} onChange={(e) => setName(e.target.value)}/>
            <label className={styles.inputLabel}>Name</label>
          </div>
          <div className={styles.inputContainer}>
            <input required type='number' className={styles.inputField} placeholder="" value={price} onChange={(e) => setPrice(e.target.value)}/>
            <label className={styles.inputLabel}>Price</label>
          </div>
          <div className={`${styles.inputContainer} flex`}>
            <label className={styles.inputLabel}>Is your dish vegetarian?</label>
            <div className={styles.radioGroup}>
              <label className='text-white flex mt-[3rem]'>
                <input type="radio" required className={styles.inputField} name="vegetarian" value="yes" onChange={(e) => setVegetarian(true)} />Yes
              </label>
              <label className='text-white flex'>
                <input type="radio" required className={styles.inputField} name="vegetarian" value="no" onChange={(e) => setVegetarian(false)} />No
              </label>
            </div>
          </div>
          <div className={styles.inputContainer}>
            <input type="file" accept='.pdf, .jpg, .jpeg, .png' className={styles.inputField}/>
            <label className={styles.inputLabel}>Choose the icon of the Dish</label>
          </div>
          <button type="submit" className={styles.loginButton}>Add</button>
        </form>
      </div>
<CategoryList menu={menu} onEdit={handleEdit} onDelete={handleDelete} />
    </div>
  )
}

export default ItemDetail
