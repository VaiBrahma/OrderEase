import { Outlet } from "react-router-dom"
import Navbar from "../navbar/navbar"

const Home = () => {
  return (
    <div>
        <Navbar/>
        <div>Welcome to our site</div>
        <Outlet/>
    </div>
  )
}

export default Home