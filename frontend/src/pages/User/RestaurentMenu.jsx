import React, { useState, useEffect, useRef } from 'react';
import styles from './Restaurent.module.css';
import { useParams } from 'react-router-dom';
import restaurents from '../../assets/restaurents';
import MenuItem from '../../components/MenuItem/MenuItem';
import Modal from '../../components/modal/modal';

const RestaurentMenu = () => {
  const [activeRow, setActiveRow] = useState(null);
  const [menu, setMenu] = useState({});
  const [wiggle, setWiggle] = useState(false);
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const [isExpanded, setExpanded] = useState(false);
  const { restaurentId } = useParams();
  const restaurent = restaurents.find(restaurent => restaurent.id == restaurentId);
  const sidebarRef = useRef();
  const [isModalOpen, setModalOpen] = useState(false);

  const handleClick = (index) => {
    setActiveRow(activeRow === index ? null : index);
  };

  const triggerWiggle = () => {
    setWiggle(true);
    setTimeout(() => setWiggle(false), 500);
  };

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  const toggleExpand = () => {
    setExpanded(!isExpanded);
  };
  const handlePlaceOrder = () => {
    setModalOpen(true);
  };

  const handlePayNow = () => {
    // Implement pay now logic
    console.log('Pay Now clicked');
    setModalOpen(false);
  };

  const handlePayAfterMeal = () => {
    // Implement pay after meal logic
    console.log('Pay After Meal clicked');
    setModalOpen(false);
  };

  return (
    <>
      <div className={styles.app}>
        <h1 className={styles.title}>{restaurent.title}</h1>
        {restaurent.menu.map((category, index) => (
          <div key={index} className={styles.row}>
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
        ))}
        <div className='h-[10em] w-full'></div>
      </div>
      <div className={`${styles.btn} ${wiggle ? styles.wiggle : ''}`} onClick={toggleSidebar}>
        <div className={styles.order}>
          <img src="/icons/icon3.png" alt="x" />
        </div>
      </div>
      {isSidebarOpen && (
        <div ref={sidebarRef} className={`${styles.sidebar} ${isExpanded ? styles.expanded : ''}`}>
          <div className={styles.btns}>
            <button className='scale-[1.1]'>
              <img src="/icons/close.png" alt="x" onClick={()=>setSidebarOpen(false)}/>
            </button>
            <button className={styles.expandButton} onClick={toggleExpand}>
              {isExpanded ? <img src='/icons/minimize.png' alt='-' className='scale-[1.2]'/> : <img src='/icons/expand.png' alt='+'/>}
            </button>
          </div>
          <div className={styles.bill}>
            {Object.entries(menu).map(([itemName, itemData]) => (
              <div key={itemName} className={styles.billItem}>
                <img src={itemData.detail.image_srrc || '/images/defaultFoodIcon.jpeg'} alt={itemName} className={styles.billItemImage} />
                <div className={styles.billItemDetails}>
                  <span className='absolute left-0 w-[10rem]'>{itemName}</span>
                  <span className='absolute right-[4em]'>{itemData.quantity}</span>
                  <span className='absolute right-0'>₹{itemData.detail.price * itemData.quantity}</span>
                </div>
              </div>
            ))}
          </div>
          {
          isExpanded && 
          <>
            <button className={styles.placeOrderButton} onClick={handlePlaceOrder} >Place Order</button>
            <button className={styles.chatButton}>Chat with Admin</button>
          </>
          }  
          
        </div>
      )}
      <Modal isOpen={isModalOpen} onClose={() => setModalOpen(false)}>
        <h2 className="text-xl font-bold mb-4">Payment</h2>
        <form>
          <div className="space-y-4">
            <input type="text" placeholder="Card Number" className="w-full p-2 border rounded-lg" />
            <input type="text" placeholder="Card Holder Name" className="w-full p-2 border rounded-lg" />
            <input type="text" placeholder="Expiry Date" className="w-full p-2 border rounded-lg" />
            <input type="text" placeholder="CVV" className="w-full p-2 border rounded-lg" />
          </div>
          <div className="mt-4 flex justify-between">
            <button 
              type="button" 
              className="bg-red-500 text-white p-2 rounded-lg mr-2" 
              onClick={handlePayAfterMeal}
            >
              Pay After Meal
            </button>
            <button 
              type="button" 
              className="bg-green-500 text-white p-2 rounded-lg" 
              onClick={handlePayNow}
            >
              Pay Now
            </button>
          </div>
        </form>
      </Modal>
    </>
  );
};

export default RestaurentMenu;
