import React, { useState, useRef } from 'react';
import styles from './RestaurentMenu.module.css';
import { useParams } from 'react-router-dom';
import restaurents from '../../assets/restaurents';
import MenuItem from '../../components/MenuItem/MenuItem';
import Modal from '../../components/Modal/Modal';
import SearchBar from '../../components/SearchBar/SearchBar';
import MenuCategory from '../../components/MenuCategory/MenuCategory';
import Sidebar from '../../components/Sidebar/Sidebar';

const RestaurentMenu = () => {
  const [activeRow, setActiveRow] = useState(null);
  const [menu, setMenu] = useState({});
  const [wiggle, setWiggle] = useState(false);
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const [isExpanded, setExpanded] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
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
    console.log('Pay Now clicked');
    setModalOpen(false);
  };

  const handlePayAfterMeal = () => {
    console.log('Pay After Meal clicked');
    setModalOpen(false);
  };

  const filteredItems = restaurent.menu
    .flatMap(category => category.items)
    .filter(item => item.name.toLowerCase().includes(searchQuery.toLowerCase()));

  return (
    <>
      <div className={styles.app}>
        <h1 className={styles.title}>{restaurent.title}</h1>
        <div className='mb-10'>
          <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
        </div>

        {searchQuery && (
          <div className={styles.row}>
            <h2 className={`${styles.searchTitle} text-white p-4`}>Search Results</h2>
            <div className={styles.cards}>
              {filteredItems.map((item, index) => (
                <div key={index} className={styles.card}>
                  <MenuItem item={item} menu={menu} setMenu={setMenu} triggerWiggle={triggerWiggle} />
                </div>
              ))}
            </div>
          </div>
        )}

        {restaurent.menu.map((category, index) => (
          <MenuCategory
            key={index}
            category={category}
            index={index}
            activeRow={activeRow}
            handleClick={handleClick}
            menu={menu}
            setMenu={setMenu}
            triggerWiggle={triggerWiggle}
          />
        ))}

        <div className='h-[10em] w-full'></div>
      </div>
      <div className={`${styles.btn} ${wiggle ? styles.wiggle : ''}`} onClick={toggleSidebar}>
        <div className={styles.order}>
          <img src="/icons/icon3.png" alt="x" />
        </div>
      </div>
      <Sidebar
        isSidebarOpen={isSidebarOpen}
        setSidebarOpen={setSidebarOpen}
        isExpanded={isExpanded}
        toggleExpand={toggleExpand}
        menu={menu}
        handlePlaceOrder={handlePlaceOrder}
        triggerWiggle={triggerWiggle}
      />
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
