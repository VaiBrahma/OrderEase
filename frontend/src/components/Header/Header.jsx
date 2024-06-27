import { useDispatch } from 'react-redux'
import styles from './Header.module.css'
import { setLogout } from '../../state';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <div className={`${styles.nav}`}>
        <img src="/icons/icon3.png" alt="food" className={`${styles.icon}`}/>
        <div className={`${styles.title}`}>OrderEase</div>
        <div className='flex justify-center items-center'>
        <button onClick={() => dispatch(setLogout())} className='text-white  hover:bg-white hover:text-black transition duration-300 ease-in-out'>Log out</button>
        <button onClick={()=> navigate("/orderhistory")} className='text-white  hover:bg-white hover:text-black transition duration-300 ease-in-out' >OrderHistoy</button>
        <img className={`${styles.icon}`} style={{filter: "invert(0)"}} src="/icons/avatar.png" alt="avatar"/>
        </div>
    </div>
  )
}

export default Header