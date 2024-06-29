import { useEffect, useState } from 'react';
import MenuItem from '../../components/MenuItem/MenuItem';
import RestaurentCard from '../../components/RestaurentCard/RestaurentCard';
import styles from './User.module.css';
import { Navigate, useNavigate } from 'react-router-dom';
// import { useHistory } from 'react-router-dom';

const User = () => {

  const [restaurents, setRestaurents] = useState([]);

  useEffect(() => {
      fetch('/api/data/restaurents')
          .then(response => response.json())
          .then(data => setRestaurents(data))
          .catch(error => console.error('Error fetching data:', error));
  }, []);
  
  const Navigate = useNavigate();
  const handleClick = (restaurent) => {
    console.log(restaurent);
    Navigate(`/customer/${restaurent._id}`);
  }
  return (
    <div className={styles.container}>
      <div className={styles.welcomeMessage}>Kidhar aaye ho tum?</div>
      <div className={styles.container2}>
        <div className={styles.gridContainer}>
            {restaurents.map((restaurent, index) => (
              <div key={index} onClick={() => handleClick(restaurent)} style={{borderRadius: '1em'}} className="m-8">
                <RestaurentCard restaurent={restaurent} />
              </div>
            ))}
          </div>
        </div>
    </div>
  );
};

export default User;
