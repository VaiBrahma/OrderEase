import React, { useState } from 'react'
import styles from './Navbar.module.css'
import { Link } from 'react-router-dom'
import { SlMenu } from "react-icons/sl";
import { TfiClose } from "react-icons/tfi";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className={`bg-[#000000] border-r-[1px] border-[hsl(0,0%,27%)] h-screen p-4 sticky top-0`}>
        <button onClick={()=>setIsOpen(prev=>!prev)}>
            <div>
              {!isOpen ? <SlMenu /> : <TfiClose />}
            </div>
        </button>
        {isOpen 
        &&
          <ul>
              <Link to='v1/dashboard/'><li className={styles.li}>Dashboard</li></Link>
              <Link to='v1/menu/'><li className={styles.li}>Menu</li></Link>
              <Link to='v1/tables/'><li className={styles.li}>Tables</li></Link>
              <Link to='v1/reviews/'><li className={styles.li}>Reviews</li></Link>
              <Link to='v1/payment-history/'><li className={styles.li}>Payment History</li></Link>
          </ul>
        }
    </div>
  )
}

export default Navbar