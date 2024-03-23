import React, {useContext} from 'react';
import Navbar from '../components/Navbar';

import CartContext from '../context/CartContext';

import ProductCard from '../components/ProductCard';

const Cart = () => {

  const {cartData} = useContext(CartContext);

  return (
    <div>
        <Navbar/>
        <div><h1>Cart Screen</h1></div>
        {cartData && cartData.map((product, index)=><ProductCard index={index} name={product.name} price={product.price} qty={product.qty}/>)}
    </div>
  )
}

export default Cart