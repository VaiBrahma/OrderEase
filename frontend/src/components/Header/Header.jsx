import { useDispatch } from "react-redux";
import styles from "./Header.module.css";
import { setLogout } from "../../state";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Popup from "../Popup/Popup";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(setLogout());
    navigate("/");
  };
  return (
    <>
    <div className="flex justify-between items-center p-2 z-0">
      <img src="/icons/icon3.png" alt="food" className={`${styles.icon}`} />
      <div className={`${styles.title}`}>OrderEase</div>
      <div className="flex justify-self items-center space-x-4">
        <img
          className={`${styles.icon}`}
          style={{ filter: "invert(0)" }}
          src="/icons/avatar.png"
          alt="avatar"
          onClick={()=>setIsOpen(prev=> !prev)}
        />
      </div>
    </div>
      <Popup isOpen={isOpen} handleLogout={handleLogout}/>
    </>
  );
};

export default Header;
