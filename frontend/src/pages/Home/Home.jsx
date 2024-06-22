import { Outlet } from "react-router-dom"

const Home = () => {
  return (
    <div style={{background: `url('/images/background.jpg') no-repeat center center/cover`, height: '100vh', width:'100vw'}}>
        <div>Welcome to our site</div>
        <Outlet/>
    </div>
  )
}

export default Home