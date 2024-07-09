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
    console.log(restaurant);
    navigate(`/customer/${restaurant._id}`);
  };
  const customer = useSelector((state) => state.user);

  return (
    <>
      <h1 className="text-white text-[2rem] m-1">
        Hi <span className="text-[orange]">{customer.name}</span>!
      </h1>
      <div className={styles.container}>
        <div className={styles.welcomeMessage}>Kidhar aaye ho tum?</div>
        <div className={styles.container2}>
          <div className={styles.gridContainer}>
            {restaurants.map((restaurant, index) => (
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
        </div>
      </div>
    </>
  );
};

export default Customer;
