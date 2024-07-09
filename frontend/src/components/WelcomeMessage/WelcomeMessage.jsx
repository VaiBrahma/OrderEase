import React from "react";
import Lottie from "lottie-react";
import cookingAnimation from "../../assets/animations/cooking.json";
import openAnimation from "../../assets/animations/open.json";
import closedAnimation from "../../assets/animations/closed.json";
import styles from "./WelcomeMessage.module.css";
const WelcomeMessage = ({isAdmin = false, isOpen = false, handleOpen}) => {
  return (
    <div
      className={`border-[1px] border-[#d1d1d17c] gap-4 rounded-lg p-8 max-w-3xl text-center flex bg-[#2c2c2cba] flex-col md:flex-row justify-center items-center md:m-auto md:mt-[4em] ${styles.bigContainer}`}
    >
      <div>
        {isAdmin?
        <Lottie
          animationData={isOpen ? openAnimation : closedAnimation}
          className={`rounded-xl w-[200px] h-[200px] ${isOpen ? "bg-[#33df33]": "bg-[#ff3131]"}`}
          onClick={handleOpen}
        />:
        <Lottie
          animationData={cookingAnimation}
          className="rounded-xl w-[200px] h-[200px] bg-[orange]"
        />}
      </div>
      <div>
        <h1 className="text-4xl font-bold text-[orange] mb-4 ">
          Welcome to OrderEase!
        </h1>
        <h2 className="text-2xl text-[#aaaaaa]">
          Seamless Dining Experience for Customers and Efficient Management for
          Owners
        </h2>
      </div>
    </div>
  );
};

export default WelcomeMessage;
