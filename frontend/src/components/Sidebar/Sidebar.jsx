import React from 'react';
import styles from './Sidebar.module.css';

const Sidebar = ({ isSidebarOpen, setSidebarOpen, isExpanded, toggleExpand, menu, handlePlaceOrder, triggerWiggle }) => {
  const calculateTotal = () => {
    return Object.values(menu).reduce((total, item) => total + item.detail.price * item.quantity, 0);
  };

  return (
    isSidebarOpen && (
      <div className={`${styles.sidebar} ${isExpanded ? styles.expanded : ''}`}>
        <div className={styles.btns}>
          <button className='scale-[1.1]'>
            <img src="/icons/close.png" alt="x" onClick={() => setSidebarOpen(false)} />
          </button>
          <button className={styles.expandButton} onClick={toggleExpand}>
            {isExpanded ? <img src='/icons/minimize.png' alt='-' className='scale-[1.2]' /> : <img src='/icons/expand.png' alt='+' />}
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
          <div className={styles.totalRow}>
            <span className='absolute right-5 w-[10rem]'>Total</span>
            <span className='absolute right-10'>₹{calculateTotal()}</span>
          </div>
        </div>
        {isExpanded && (
          <>
            <button className={styles.placeOrderButton} onClick={handlePlaceOrder}>Place Order</button>
            <button className={styles.chatButton}>Chat with Admin</button>
          </>
        )}
      </div>
    )
  );
};

export default Sidebar;
