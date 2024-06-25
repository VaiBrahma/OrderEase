import React from "react";
import Lottie from 'lottie-react';
import cookingAnimation from '../../../public/animations/cooking.json';
const WelcomeMessage = () => {
  return (
    <div className="border-[1px] border-[#d1d1d17c] mx-2 md:m-auto gap-4 rounded-lg p-8 max-w-3xl text-center flex bg-[#2c2c2cba] flex-col md:flex-row justify-center items-center" style={{backdropFilter:'blur(10px)',textShadow: "0 2px 5px black", marginTop: '4em'}}>
      <div>
        <Lottie animationData={cookingAnimation} className="rounded-xl w-[200px] h-[200px] bg-[orange]"/>
      </div>
      <div>
        <h1 className="text-4xl font-bold text-[orange] mb-4 ">
          Welcome to OrderEase!
        </h1>
        <h2 className="text-2xl text-[#aaaaaa]">
          Seamless Dining Experience for Customers and Efficient Management for Owners
        </h2>
      </div>
    </div>
  );
};

export default WelcomeMessage;
