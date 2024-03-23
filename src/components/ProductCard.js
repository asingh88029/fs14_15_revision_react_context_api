import React, {useContext} from 'react';

import CartContext from '../context/CartContext';

const ProductCard = ({index, name, price, qty}) => {

  const { cartDispatch } = useContext(CartContext)  

  return (
    <div style={{backgroundColor : "pink"}}>
        <p>Name : {name}</p>
        <p>Price : {price}</p>
        <p>Qty : <button onClick={()=>{cartDispatch({type: "qty_increase", payload: index})}}>+</button> {qty} <button onClick={()=>{cartDispatch({type: "qty_decrease", payload: index})}}>-</button></p>
        <p>Subtotal : {price * qty}</p>
    </div>
  )
}

export default ProductCard