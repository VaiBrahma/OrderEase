import { Outlet } from "react-router-dom";
import Navbar from "../Navbar";

const AdminLayout = () => {
  return (
    <div className="text-white flex">
        <Navbar/>
        <div className="w-[100%]">
          <Outlet />
        </div>
    </div>
  )
};

export default AdminLayout;
