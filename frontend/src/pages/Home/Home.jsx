import { Outlet } from "react-router-dom"

const Home = () => {
  return (
    <>
    <div>Welcome to our site</div>
    <Outlet/>
    </>
  )
}

export default Home