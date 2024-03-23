import logo from './logo.svg';
import './App.css';
import { useReducer, useState} from 'react';
import Cart from './screen/Cart';
import Payment from './screen/Payment';

import CartContext from './context/CartContext';

import {BrowserRouter, Route, Routes} from 'react-router-dom';
import { act } from 'react-dom/test-utils';

const cartReducer = (state, action)=>{

  var indexOfProductToUpdate; 
  var product;
  var cartData;

  switch(action.type){

    case 'qty_increase':

      indexOfProductToUpdate = action.payload;
      product = state[indexOfProductToUpdate]
      product.qty += 1;
      cartData = [...state]
      cartData.splice(indexOfProductToUpdate, 1, product)
      return cartData

    case 'qty_decrease':

      indexOfProductToUpdate = action.payload;
      product = state[indexOfProductToUpdate]
      product.qty -= 1;
      if(product.qty==0){
        cartData = [...state]
        cartData.splice(indexOfProductToUpdate, 1)
        return cartData
      }else{
        cartData = [...state]
        cartData.splice(indexOfProductToUpdate, 1, product)
        return cartData
      }

    default :
      return state

  }

}

const initialCartData = [
  {
    name : "Iphone 15",
    price : 79999,
    qty : 1
  },
  {
    name : "Macbook M1",
    price : 99999,
    qty : 1
  },
  {
    name : "Honda Activa",
    price : 99999,
    qty : 1
  },
]

function App() {

  const [cartData, cartDispatch] = useReducer(cartReducer, initialCartData)

  return (
    <CartContext.Provider value={{cartData, cartDispatch}}>

      <BrowserRouter>

        <Routes>
          <Route path='/' element={<Cart/>}/>
          <Route path='/payment' element={<Payment/>}/>
        </Routes>

      </BrowserRouter>

    </CartContext.Provider>
  )

}

export default App;