import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
        <ul>
            <li><Link to='v1/dashboard/'>Dashboard</Link></li>
            <li><Link to='v1/menu/'>Menu</Link></li>
            <li><Link to='v1/tables/'>Tables</Link></li>
            <li><Link to='v1/reviews/'>Reviews</Link></li>
            <li><Link to='v1/payment-history/'>Payment History</Link></li>
        </ul>
    </div>
  )
}

export default Navbar