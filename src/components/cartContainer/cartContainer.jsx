import React from 'react'
import { useCartContext } from '../../context/cartContext'
import './cartContainer.css'
import CartItem from '../cartItem/cartItem'

const CartContainer = () => {

  const {cartList} = useCartContext()

  const listCart = cartList.map((elem)=>{
          return <CartItem cartItem={elem}/>
        })

  if(cartList.length === 0){
    return (
        <>
          <div className='fondoNav'></div>
          <div className='cartContainer'>
            <h3>Su carrito esta vacio...</h3>
          </div>
        </>
      )
  }  
  else return (
    <>
      <div className='fondoNav'></div>
      <div className='cartContainer'>
        {listCart}
      </div>
    </>
  )
}

export default CartContainer