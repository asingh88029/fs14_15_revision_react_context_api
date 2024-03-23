import React from 'react';
import {Link} from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
        <Link to={'/'}>Cart</Link>
        <Link to={'/payment'}>Payment</Link>
    </div>
  )
}

export default Navbar