import { useSelector } from "react-redux";
import WelcomeMessage from "../../../components/WelcomeMessage/WelcomeMessage";
import styles from "./Dashboard.module.css";
import { Link } from "react-router-dom";

const Dashboard = () => {
  const restaurant = useSelector((state) => {
    return state.user;
  });
  return (
    <div>
      <h1 className={styles.welcome}>
        Hi <span className="text-[orange]">{restaurant.admin}</span>!
      </h1>
      <WelcomeMessage />
      <p>
        Restarant Name: <span>{restaurant.title}</span>{" "}
      </p>
      <p>
        Currently 0 / {restaurant.no_of_tables} Tables are filled at your place!
      </p>
      <p className="text-[orange]">Address: </p>
      <p>{restaurant.address.local_address}</p>
      <p>{restaurant.address.city}</p>
      <p>{restaurant.address.pincode}</p>
      <p>{restaurant.address.state}</p>
    </div>
  );
};

export default Dashboard;
