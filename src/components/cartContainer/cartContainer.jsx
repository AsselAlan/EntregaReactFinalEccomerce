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
          <div className='cartContainer mt-5 w-100 d-flex align-items-center flex-column'>
          <svg width="154" height="155" viewBox="0 0 154 155" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M39.7198 87.3444C38.073 80.3094 36.4732 73.4544 34.8607 66.5993C30.609 48.5149 26.323 30.4391 22.1483 12.3375C21.7505 10.6109 21.079 10.1867 19.4065 10.2339C14.8126 10.3581 10.2102 10.2853 5.61201 10.2724C2.33554 10.2639 0.0172044 8.1388 9.49456e-05 5.174C-0.0170145 2.18349 2.27993 0.0198721 5.53501 0.0113033C12.058 -0.00583423 18.581 -0.00154984 25.104 0.0113033C28.2735 0.0155877 30.0615 1.45086 30.7929 4.54419C31.9264 9.32129 33.0941 14.0941 34.1378 18.8926C34.4158 20.1737 34.8692 20.5807 36.2252 20.5764C50.9821 20.5207 65.7433 20.5421 80.5002 20.5421C99.8553 20.5421 119.215 20.5164 138.57 20.555C147.732 20.5721 154.961 28.3997 153.896 37.3541C153.442 41.15 152.317 44.8689 151.44 48.6135C148.579 60.8283 145.704 73.0388 142.804 85.245C140.978 92.9312 135.105 97.5412 127.162 97.5412C98.8202 97.5498 70.4826 97.5412 42.1408 97.5541C41.2938 97.5541 40.4127 97.5755 39.6086 97.8026C37.209 98.4709 35.7204 100.725 35.9471 103.162C36.1781 105.613 38.2184 107.605 40.7121 107.794C41.2981 107.837 41.8884 107.811 42.4744 107.811C70.7093 107.811 98.94 107.811 127.175 107.815C127.919 107.815 128.689 107.789 129.408 107.939C131.927 108.471 133.655 110.823 133.454 113.355C133.253 115.878 131.174 117.896 128.599 118.068C128.278 118.089 127.958 118.081 127.637 118.081C98.9229 118.081 70.2089 118.089 41.4906 118.076C33.4919 118.076 27.3111 113.004 25.891 105.36C24.3512 97.0657 30.0401 89.0024 38.4323 87.5929C38.7959 87.5329 39.1509 87.4558 39.7112 87.3487L39.7198 87.3444ZM37.0507 30.8118C37.132 31.3345 37.1619 31.703 37.2475 32.0629C41.4992 50.0873 45.768 68.1074 49.9769 86.1405C50.2336 87.2415 50.7811 87.2887 51.6536 87.2887C76.8345 87.2758 102.011 87.2801 127.192 87.2758C130.362 87.2758 132.111 85.8577 132.855 82.7258C136.367 67.8718 139.879 53.0178 143.378 38.1595C144.464 33.5452 142.261 30.8118 137.483 30.8118C104.608 30.8118 71.7273 30.8118 38.8515 30.8118H37.0507Z" fill="#5E16EA"/>
            <path d="M56.4917 123.214C64.9567 123.202 71.8732 130.142 71.8646 138.634C71.8518 147.126 64.9609 153.998 56.4447 154.006C48.0439 154.015 41.0975 147.121 41.0718 138.75C41.0419 130.16 47.9242 123.227 56.4917 123.214ZM56.5217 133.484C53.7157 133.467 51.3931 135.725 51.3418 138.518C51.2905 141.38 53.6345 143.75 56.496 143.732C59.2934 143.72 61.5818 141.427 61.5946 138.621C61.6118 135.845 59.2977 133.501 56.5217 133.484Z" fill="#5E16EA"/>
            <path d="M128.334 138.643C128.316 147.13 121.417 153.998 112.901 154.002C104.44 154.002 97.498 147.036 97.5408 138.574C97.5836 130.074 104.47 123.219 112.974 123.21C121.434 123.202 128.346 130.147 128.334 138.643ZM118.064 138.655C118.098 135.879 115.801 133.518 113.029 133.48C110.223 133.441 107.883 135.686 107.815 138.476C107.742 141.333 110.069 143.724 112.931 143.728C115.728 143.732 118.034 141.457 118.068 138.655H118.064Z" fill="#5E16EA"/>
          </svg>
          <h3 className='mt-3'>Tu carrito esta vacio...</h3>
          </div>
        </>
      )
  }  
  else return (
    <>
      <div className='fondoNav'></div>
      <div className='cartContainer d-flex flex-column'>
        {listCart}
      </div>
      <div className='cartFoterContainer'>
        hola
      </div>
    </>
  )
}

export default CartContainer