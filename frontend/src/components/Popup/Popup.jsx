import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Popup = ({ isOpen, handleLogout }) => {
  const navigate = useNavigate();
  const user = useSelector((state) => {
    return state.user;
  });
  return (
    <div>
      {isOpen && user && (
        <div className="absolute flex bg-[#222] rounded-xl flex-col p-4 w-[10rem] m-2 right-0 z-[99] gap-2 ">
          <button
            onClick={handleLogout}
            className="text-white bg-black  hover:bg-white hover:text-black transition duration-300 ease-in-out  rounded"
          >
            Log out
          </button>
          {!user.isAdmin && (
            <button
              onClick={() => navigate("/orderhistory")}
              className="text-white bg-black  hover:bg-white hover:text-black transition duration-300 ease-in-out  rounded"
            >
              OrderHistoy
            </button>
          )}
        </div>
      )}
    </div>
  );
};

export default Popup;
