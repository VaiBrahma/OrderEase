import { useEffect, useState } from "react";
import RestaurantCard from "../../components/RestaurantCard/RestaurantCard";
import styles from "./Customer.module.css";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Customer = () => {
  const [restaurants, setRestaurants] = useState([]);

  useEffect(() => {
    fetch("/api/data/restaurants")
      .then((response) => response.json())
      .then((data) => setRestaurants(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  const navigate = useNavigate();
  const handleClick = (restaurant) => {
    navigate(`/customer/${restaurant._id}`);
  };
  const customer = useSelector((state) => state.user);

  // Separate restaurants into open and closed
  const openRestaurants = restaurants.filter(
    (restaurant) => restaurant.isOpen === true
  );
  const closedRestaurants = restaurants.filter(
    (restaurant) => restaurant.isOpen === false
  );

  console.log(restaurants);
  return (
    <>
      <h1 className="text-white text-[2rem] m-1">
        Hi <span className="text-[orange]">{customer.name}</span>!
      </h1>
      <div className={styles.container}>
        <h1 className={styles.welcomeMessage}>Kidhar aaye ho tum?</h1>
        <div className={styles.container2}>
          <h2 className={`${styles.heading} text-green-500`}>
            Open Restaurants
          </h2>
          <div className={styles.gridContainer}>
            {openRestaurants.map((restaurant, index) => (
              <div
                key={index}
                onClick={() => handleClick(restaurant)}
                style={{ borderRadius: "1em" }}
                className="m-8"
              >
                <RestaurantCard restaurant={restaurant} />
              </div>
            ))}
          </div>
          <div className={styles.break}></div>
          <h2 className={`${styles.heading} text-red-500`}>
            Closed Restaurants
          </h2>
          <div className={styles.gridContainer}>
            {closedRestaurants.map((restaurant, index) => (
              <div
                key={index}
                onClick={() => handleClick(restaurant)}
                style={{ borderRadius: "1em" }}
                className={`${styles.closed} m-8`}
              >
                <RestaurantCard restaurant={restaurant} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Customer;
