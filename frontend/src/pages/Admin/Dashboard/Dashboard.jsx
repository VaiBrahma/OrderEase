import { useSelector } from "react-redux";
import WelcomeMessage from "../../../components/WelcomeMessage/WelcomeMessage";
import styles from "./Dashboard.module.css";
import axios from "axios";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

const Dashboard = () => {
  const restaurant = useSelector((state) => {
    return state.user;
  });
  const [isOpen, setIsOpen] = useState(false);

  useEffect(()=>{
    const getIsOpen = async () => {
      await axios.get(`/api/data/restaurants/${restaurant._id}`)
      .then((response)=> {
        setIsOpen(response.data.isOpen);
      })
      .catch(err=>{
        console.log(err.message);
      })
    }

    getIsOpen();
  }, [])

  const handleOpen = () => {
    const openClose = async () => {
      await axios
        .post(`/api/open/${restaurant._id}`, { isOpen })
        .then(() => {
          setIsOpen((prev) => !prev);
        })
        .catch((err) => {
          console.log(err.message);
          throw err;
        });
    };

    const myPromise = openClose();

    toast.promise(myPromise, {
      pending: `${isOpen ? "Closing" : "Opening"} ${restaurant.title}`,
      success: `${restaurant.title} is now ${isOpen ? "Closed" : "Opened"} `,
      error: `Error ${isOpen ? "Closing" : "Opening"} ${restaurant.title}`,
    });
  };
  return (
    <div className="p-8">
      <div className={styles.welcometext}>
        <h1 className={styles.welcome}>
          Hi <span className="text-[orange]">{restaurant.admin}</span>!
        </h1>
        <h2>
          <span className="text-[#d328d3] font-[1.1em]">
            {restaurant.title}
          </span>{" "}
          is Currently{" "}
          <button
            onClick={handleOpen}
            className={`bg-gray-700 px-2 rounded-lg cursor-pointer ${isOpen ? "text-green-500" : "text-red-500"}`}
          >
            {isOpen ? "Open" : "Closed"}
          </button>
        </h2>
      </div>
      <WelcomeMessage isOpen={isOpen} handleOpen={handleOpen} isAdmin={true} />
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
