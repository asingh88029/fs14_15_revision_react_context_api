import React, {useContext} from 'react'
import Navbar from '../components/Navbar'

import CartContext from '../context/CartContext'

const Payment = () => {

  const {cartData} = useContext(CartContext)

  return (
    <div>
        <Navbar/>
        <div><h1>Payment Screen</h1></div>
        <p>Total Payment : {cartData.reduce((acc, currentProduct)=>acc+=(currentProduct.price*currentProduct.qty),0)}</p>
        {cartData.map((product, index)=><p>{index+1} {product.name} {product.qty} piece</p>)}
    </div>
  )
}

export default Payment