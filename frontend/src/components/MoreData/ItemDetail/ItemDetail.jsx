import React, { useEffect, useRef, useState } from 'react';
import styles from './ItemDetail.module.css';
import CategoryList from '../CategoryList/CategoryList';
import { toast } from 'react-toastify';
import axios from 'axios'
import MenuItem2 from '../../MenuItem/MenuItem2';
import { useSelector } from 'react-redux';

const ItemDetail = () => {
  const [menu, setMenu] = useState([]);
  const [title, setTitle] = useState('');
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [vegetarian, setVegetarian] = useState(true);
  const [isAvailable, setIsAvailable] = useState(true);
  const [image_src, setImageSrc] = useState('/images/defaultFoodIcon.jpeg');
  const categoryRef = useRef();
  const formRef = useRef();
  const id = useSelector((state)=>{return state.id});

  useEffect(()=>{
    axios.get(`/api/menu/${id}`)
    .then(res => {
      const data = res.data;
      setMenu(prev=>{
        let newMenu = [];
        if(data){
          data.map(e=>{
            if(e.items){
              e.items.map(p=>newMenu.push(p));
            }
          })
        }
        return newMenu;
      })
    }
    )
    .catch(err => console.log(err.message));
  },[])

  const handleSubmit2 = (e) => {
    e.preventDefault();
    const item = {
      id: Date.now().toString(),
      category: title,
      name,
      price, 
      vegetarian,
      isAvailable,
      image_src,
    };

    const addItem =  async () => {
      await axios.post(`/api/menu/${id}/addItem`, [item])
      .then(()=>{

        if(menu.length === 0){
          setTimeout(() => {
            if (categoryRef.current) {
              categoryRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
            } 
          }, 10);
        }
    
        setMenu(prevMenu => [...prevMenu, item]);
        
        setName('');
        setPrice('');
        setVegetarian(true);
        setIsAvailable(true);
        setImageSrc('/images/defaultFoodIcon.jpeg');
      })
      .catch(err=>{
        console.log(err);
        throw err;
      })
    }
    
    const myPromise  = addItem();

    toast.promise(
      myPromise,
      {
        pending: `Adding ${item.name} to the Database...`,
        success: `${item.name} added successfully! 👌`,
        error: `Error Adding ${item.name}! 🤯`
      },
    )
  };

  const handleEdit = (item, newName, newPrice, newVegetarian) => {
    let bool = true;
    if(newVegetarian === "false") bool = false;

    console.log(bool, newVegetarian);
    const itemId = item.id;
    const updatedItemm = {
      id: itemId,
      category: item.category,
      updatedItem : {
        name: newName,
        price: newPrice,
        vegetarian: bool
      }
    }

    const edit = async () => {
      await axios.put(`/api/menu/${id}/updateItem`, updatedItemm)
      .then(()=>{
        setMenu(prevMenu => prevMenu.map(item => 
          item.id === itemId ? { ...item, name: newName, price: newPrice, vegetarian: bool } : item
        ));
      })
      .catch(err=>{
        console.log(err.message)
        throw err;
      })
    }

    const myPromise = edit();

    toast.promise(
      myPromise,
      {
        pending: `Updating ${item.name}...`,
        success: `${item.name} is Updated successfully! 👌`,
        error: `Error Updating ${item.name}! 🤯`
      }
    )
  };
  
  const handleDelete = (item) => {
    const reqbody = {
      "id": item.id,
      "category": item.category,
    }

    console.log(reqbody);

    const deletee = async () => {
      await axios.delete(`/api/menu/${id}/deleteItem`, {data: reqbody})
      .then(()=>{
        setMenu(prevMenu => prevMenu.filter(itemm => itemm.id !== item.id));
      })
      .catch(err=>{
        console.log(err.message);
        throw err;
      })
    }

    const myPromise = deletee();

    toast.promise(
      myPromise,
      {
        pending: `Deleting ${item.name}...`,
        success: `${item.name} is Deleted successfully! 👌`,
        error: `Error Deleting ${item.name}! 🤯`
      }
    )
  };
  
  const slide = () => {
    setTimeout(() => {
      if (formRef.current) {
        formRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
      } 
    }, 10);
  }

  return (
    <div>
      <button onClick={slide} className='z-10 bg-blue-600 rounded-full p-2 hover:bg-blue-700 text-white absolute m-4'>Add Item</button>
      <div><CategoryList menu={menu} onEdit={handleEdit} onDelete={handleDelete} categoryRef={categoryRef} /></div>
      <div ref={formRef} className={`${styles.bg} border-[1px] border-[#d1d1d17c] mx-8 gap-4 rounded-3xl p-8 text-center flex flex-col bg-[#2c2c2cba] mb-[5rem] md:flex-row justify-center items-center`}>
        <div className={styles.slide}>
          <h2 className="text-4xl font-bold mb-6 text-center text-[orange]">What is in the Menu?</h2>
          <div className='text-start'><MenuItem2 name={name || "Name"} image_src={image_src} vegetarian={vegetarian} price={price || 0} isButtonNeeded={false}/></div>
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
                    <input type="radio" required className={styles.inputField} name="vegetarian" defaultChecked value="yes" onChange={(e) => setVegetarian(true)} />Yes
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
        </div>
      </div>
    </div>
  )
}

export default ItemDetail;
