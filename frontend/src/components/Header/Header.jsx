import { useDispatch } from 'react-redux'
import styles from './Header.module.css'
import { setLogout } from '../../state';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout =() =>{
    dispatch(setLogout());
    navigate("/")
  }
  return (
    <div className='flex justify-between items-center '>
        <img src="/icons/icon3.png" alt="food" className={`${styles.icon}`}/>
        <div className={`${styles.title}`}>OrderEase</div>
        <div className='flex justify-self items-center space-x-4'>
        <button onClick={handleLogout} className='text-white bg-black  hover:bg-white hover:text-black transition duration-300 ease-in-out border rounded'>Log out</button>
        <button onClick={()=> navigate("/orderhistory")} className='text-white bg-black  hover:bg-white hover:text-black transition duration-300 ease-in-out border rounded' >OrderHistoy</button>
        <img className={`${styles.icon}`} style={{filter: "invert(0)"}} src="/icons/avatar.png" alt="avatar"/>
        </div>
    </div>
  )
}

export default Header