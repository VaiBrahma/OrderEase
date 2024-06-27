import React, { useState, useRef } from 'react';
import styles from './RestaurentMenu.module.css';
import { useParams } from 'react-router-dom';
import restaurents from '../../assets/restaurents';
import MenuItem from '../../components/MenuItem/MenuItem';
import Modal from '../../components/modal/modal';
import SearchBar from '../../components/SearchBar/SearchBar';
import MenuCategory from '../../components/MenuCategory/MenuCategory';
import Sidebar from '../../components/Sidebar/Sidebar';
import { useSelector } from 'react-redux';
import state from '../../state';
import axios from 'axios'

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
  const [paymentStep, setPaymentStep] = useState(null); 
  // console.log(menu);
  const [table, setTabel] = useState(null);

  const userid = useSelector((state) => state.user._id)

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
    setPaymentStep(null); // Reset payment step when opening the modal
  };

  const handlePayAfterMeal = () => {
    console.log('Pay After Meal clicked');
    setModalOpen(false);
  };

  const selectPaymentStep = (step) => {
    setPaymentStep(step);
  };

  const calculateTotal = () => {
    return Object.values(menu).reduce((total, item) => total + item.detail.price * item.quantity, 0);
  };

  console.log(menu);
  const handleOrderSubmit = async () => {
    try {
      // Construct orderData as needed
      const items = Object.keys(menu).map(key => ({
        name: menu[key].detail.name,
        price: menu[key].detail.price,
        quantity: menu[key].quantity
    }));
      const orderData = {
        userId: userid, // Replace with actual user ID from Redux state
        items: items,
        paymentMethod: 'Cash', // Replace with selected payment method
        totalAmount: calculateTotal(), // Implement calculateTotalAmount function
        orderTime: Date.now(),
        deliveryAddress: table, // Replace with actual delivery address
      };

      // Make POST request to backend

      const response = await axios.post('http://localhost:5000/api/orders/create', orderData, {
        headers: {
          'Content-Type': 'application/json',
          // Authorization: `Bearer ${token}` // Include this if your backend requires authentication
        }
      });
      console.log('Order created:', response.data); // Log the response or handle success

      // Close modal and reset state
      setModalOpen(false);
    } catch (error) {
      console.error('Error creating order:', error); // Handle error
    }
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
        {!paymentStep ? (
          <>
            <h2 className="text-xl font-bold mb-4">Choose Payment Method</h2>
            <div className="space-y-4">
              <input placeholder='Enter Table Number' className="w-full bg-gray-300 text-black p-2 rounded-lg"  onChange={(e)=> setTabel(e.target.value)}  />  
              <button 
                type="button" 
                className="w-full bg-green-500 text-white p-2 rounded-lg" 
                onClick={() => selectPaymentStep('pay-now')}
              >
                Pay Now
              </button>
              <button 
                type="button" 
                className="w-full bg-blue-500 text-white p-2 rounded-lg" 
                onClick={handleOrderSubmit}
              >
                Pay After Meal
              </button>
            </div>
          </>
        ) : paymentStep === 'pay-now' ? (
          <>
            <h2 className="text-xl font-bold mb-4">Pay Now</h2>
            <div className="space-y-4">
              <button 
                type="button" 
                className="w-full bg-green-500 text-white p-2 rounded-lg" 
                onClick={() => selectPaymentStep('upi')}
              >
                Pay with UPI
              </button>
              <button 
                type="button" 
                className="w-full bg-blue-500 text-white p-2 rounded-lg" 
                onClick={() => selectPaymentStep('card')}
              >
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
                <button 
                  type="button" 
                  className="bg-red-500 text-white p-2 rounded-lg mr-2" 
                  onClick={() => setPaymentStep('pay-now')}
                >
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
                <button 
                  type="button" 
                  className="bg-red-500 text-white p-2 rounded-lg mr-2" 
                  onClick={() => setPaymentStep('pay-now')}
                >
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

export default RestaurentMenu;
