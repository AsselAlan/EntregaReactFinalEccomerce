import React from 'react'
import './cartItem.css'

const CartItem = ({cartItem}) => {

  return (
    <div className='cartItemContaine'>
        <h1>{cartItem.nombre}</h1>
        <p>{cartItem.cantidad}</p>
    </div>
  )
}

export default CartItem