import { useState } from 'react';
import styles from './ItemDetail.module.css';
import { Box, Typography } from '@mui/material';

const ItemDetail = () => {
  const [menu, setMenu] = useState([{title:'', items: [{}]}]);
  const [title, setTitle] = useState('');
  const [name, setName] = useState();
  const [price, setPrice] = useState('');
  const [vegetarian, setVegetarian] = useState(true);
  const [isAvailable, setIsAvailable] = useState(false);
  const [image_src, setImageSrc] = useState('/images/defaultFoodIcon.jpeg');

  const handleSubmit2 = (e) => {
    e.preventDefault();
    const item = {
      name,
      price, 
      vegetarian,
      isAvailable,
      image_src,
    }
  }
  return (
    <div className='mt-[5rem]'>
    <h2 className="text-2xl font-bold mb-6 text-center text-white">Tell us More about your Restaurent</h2>
    <div className={`${styles.loginContainer} max-w-3xl md:m-auto m-2`}>
        <form onSubmit={handleSubmit2}>
            <div className={styles.inputContainer}>
              <select required className={styles.inputField} value={title} onChange={(e) => setTitle(e.target.value)}>
                  <option value="" disabled selected hidden>Choose Category</option>
                  <option value="starters">Starters</option>
                  <option value="soups">Soups</option>
                  <option value="main">Main</option>
                  <option value="main">Dishes</option>
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
                  <label className='text-white flex mt-[3rem]'><input type="radio" required className={styles.inputField} name="vegetarian" value="yes" onChange={(e) => setVegetarian(e.target.value)} />Yes</label>
                  <label className='text-white flex'><input type="radio" required className={styles.inputField} name="vegetarian" value="no" onChange={(e) => setVegetarian(e.target.value)} />No</label>
              </div>
            </div>

            <div className={styles.inputContainer}>
              <input type="file" accept='.pdf, .jpg, .jpeg, .png' className={`${styles.inputField}`}/>
              <label className={styles.inputLabel}>Choose the icon of the Dish</label>
            </div>
            <button type="submit" className={styles.loginButton} >Add</button>
        </form>
    </div>
</div>
  )
}

export default ItemDetail