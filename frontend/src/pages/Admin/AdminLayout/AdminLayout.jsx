import { Outlet } from "react-router-dom";
import Navbar from "../Navbar";

const AdminLayout = () => {
  return (
    <div className="text-white flex">
        <Navbar/>
        <Outlet />
    </div>
  )
};

export default AdminLayout;
