import React, { useState } from 'react'
import './cartContador.css'
import { useCartContext } from '../../context/cartContext'

const CartContador = ({cantidad,id}) => {
    
    const {modifCantidad} = useCartContext()

    let negativo  
    
    if(cantidad === 1){
        negativo = false
    }else{negativo = true}
  
    return (
    <div className='cartContadorContainer d-flex'>
        <button onClick={()=>{modifCantidad(true,id)}}>+</button>
        <div className='viewCantidad'><h4>{cantidad}</h4></div>
        {negativo ? <button onClick={()=>{modifCantidad(false,id)}}>-</button> : <button></button>}
        
    </div>
  )
}

export default CartContador