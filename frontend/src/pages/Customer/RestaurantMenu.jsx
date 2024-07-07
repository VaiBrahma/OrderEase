import React, { useState, useRef, useEffect } from 'react';
import styles from './RestaurantMenu.module.css'; // Ensure the CSS file name matches this import
import { useParams } from 'react-router-dom';
import MenuItem from '../../components/MenuItem/MenuItem';
import Modal from '../../components/Modal/Modal';
import SearchBar from '../../components/SearchBar/SearchBar';
import MenuCategory from '../../components/MenuCategory/MenuCategory';
import Sidebar from '../../components/Sidebar/Sidebar';
import { useSelector } from 'react-redux';
import axios from 'axios';

const RestaurantMenu = () => {
  const [menu, setMenu] = useState({});
  const [wiggle, setWiggle] = useState(false);
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const [isExpanded, setExpanded] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const { restaurantId } = useParams();
  const [restaurant, setRestaurant] = useState({ menu: [], address: {} });
  const sidebarRef = useRef();
  const [isModalOpen, setModalOpen] = useState(false);
  const [paymentStep, setPaymentStep] = useState(null);
  const [table, setTable] = useState(null);
  const [isRowOpen, setIsRowOpen] = useState([false, false, false, false, false, false, false]);
  const userid = useSelector((state) => state.user._id);

  useEffect(() => {
    fetch(`/api/data/restaurants/${restaurantId}`)
      .then(response => response.json())
      .then(data => setRestaurant(data))
      .catch(error => console.error('Error fetching data:', error));
  }, [restaurantId]);

  const handleClick = (index) => {
    setIsRowOpen(prev => {
      const next = [];
      for (let i = 0; i < prev.length; i++) {
        if (i === index) next[i] = !prev[i];
        else next[i] = prev[i];
      }
      return next;
    });
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
    setPaymentStep(null);
  };

  const handlePayAfterMeal = () => {
    setModalOpen(false);
  };

  const selectPaymentStep = (step) => {
    setPaymentStep(step);
  };

  const calculateTotal = () => {
    return Object.values(menu).reduce((total, item) => total + item.detail.price * item.quantity, 0);
  };

  const calculateTime = () => {
    return Object.values(menu).reduce((total, item) => total + item.detail.cooking_time * item.quantity, 0);
  };

  const handleOrderSubmit = async () => {
    try {
      const items = Object.keys(menu).map(key => ({
        name: menu[key].detail.name,
        price: menu[key].detail.price,
        quantity: menu[key].quantity
      }));
      const orderData = {
        userId: userid,
        items: items,
        paymentMethod: 'Cash',
        totalAmount: calculateTotal(),
        cookingTime: calculateTime(),
        orderTime: Date.now(),
        deliveryAddress: 'Table' + table,
      };

      const response = await axios.post('/api/orders/create', orderData, {
        headers: { 'Content-Type': 'application/json' }
      });

      console.log('Order created:', response.data);
      setModalOpen(false);
    } catch (error) {
      console.error('Error creating order:', error);
    }
  };

  const filteredItems = restaurant.menu.flatMap(category => category.items).filter(item => item.name.toLowerCase().includes(searchQuery.toLowerCase()));

  return (
    <>
      <div className={styles.app}>
        <h1 className={styles.title}>{restaurant.title}</h1>
        <div className={styles.address}>
          <h1 className={styles.la}>{restaurant.address.local_address}</h1>
          <h1 className={styles.city}>{restaurant.address.city} - {restaurant.address.pincode}</h1>
          <h1 className={styles.state}>{restaurant.address.state}</h1>
        </div>

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
        {restaurant.menu.map((category, index) => (
          <MenuCategory key={index} category={category} index={index} isRowOpen={isRowOpen} handleClick={handleClick} menu={menu} setMenu={setMenu} triggerWiggle={triggerWiggle} />
        ))}
        <div className='h-[10em] w-full'></div>
      </div>
      <div className={`${styles.btn} ${wiggle ? styles.wiggle : ''}`} onClick={toggleSidebar}>
        <div className={styles.order}>
          <img src="/icons/icon3.png" alt="x" />
        </div>
      </div>
      <Sidebar isSidebarOpen={isSidebarOpen} setSidebarOpen={setSidebarOpen} isExpanded={isExpanded} toggleExpand={toggleExpand} menu={menu} handlePlaceOrder={handlePlaceOrder} triggerWiggle={triggerWiggle} />
      <Modal isOpen={isModalOpen} onClose={() => setModalOpen(false)}>
        {!paymentStep ? (
          <>
            <h2 className="text-xl font-bold mb-4">Choose Payment Method</h2>
            <div className="space-y-4">
              <input placeholder='Enter Table Number' className="w-full bg-gray-300 text-black p-2 rounded-lg" onChange={(e) => setTable(e.target.value)} />
              <button type="button" className="w-full bg-green-500 text-white p-2 rounded-lg" onClick={() => selectPaymentStep('pay-now')}>
                Pay Now
              </button>
              <button type="button" className="w-full bg-blue-500 text-white p-2 rounded-lg" onClick={handleOrderSubmit}>
                Pay After Meal
              </button>
            </div>
          </>
        ) : paymentStep === 'pay-now' ? (
          <>
            <h2 className="text-xl font-bold mb-4">Pay Now</h2>
            <div className="space-y-4">
              <button type="button" className="w-full bg-green-500 text-white p-2 rounded-lg" onClick={() => selectPaymentStep('upi')}>
                Pay with UPI
              </button>
              <button type="button" className="w-full bg-blue-500 text-white p-2 rounded-lg" onClick={() => selectPaymentStep('card')}>
                Pay with Card
              </button>
            </div>
          </>
        ) : paymentStep === 'upi' ? (
          <>
            <h2 className="text-xl font-bold mb-4">Pay with UPI</h2>
            <form>
              <div className="space-y-4">
                <input type="text" placeholder="UPI ID" className="w-full p-2 border rounded-lg" />
              </div>
              <div className="mt-4 flex justify-between">
                <button type="button" className="bg-red-500 text-white p-2 rounded-lg mr-2" onClick={() => setPaymentStep('pay-now')}>
                  Back
                </button>
                <button type="submit" className="bg-green-500 text-white p-2 rounded-lg">
                  Pay Now
                </button>
              </div>
            </form>
          </>
        ) : (
          <>
            <h2 className="text-xl font-bold mb-4">Pay with Card</h2>
            <form>
              <div className="space-y-4">
                <input type="text" placeholder="Card Number" className="w-full p-2 border rounded-lg" />
                <input type="text" placeholder="Card Holder Name" className="w-full p-2 border rounded-lg" />
                <input type="text" placeholder="Expiry Date" className="w-full p-2 border rounded-lg" />
                <input type="text" placeholder="CVV" className="w-full p-2 border rounded-lg" />
              </div>
              <div className="mt-4 flex justify-between">
                <button type="button" className="bg-red-500 text-white p-2 rounded-lg mr-2" onClick={() => setPaymentStep('pay-now')}>
                  Back
                </button>
                <button type="submit" className="bg-green-500 text-white p-2 rounded-lg">
                  Pay Now
                </button>
              </div>
            </form>
          </>
        )}
      </Modal>
    </>
  );
};

export default RestaurantMenu;
