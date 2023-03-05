import React, { useEffect, useState } from 'react'
import './itemListContainer.css'

import getProducts from '../../getProducts.js'
import CardItem from '../cardItem/cardItem'



const ItemListContainer = () => {
  
  const [productos, setProductos] = useState([])

  useEffect(()=>{
    getProducts()
    .then((resProductos)=>{
        setProductos(resProductos)
      })
      .catch((error)=>{
        error.log("Error al obtener los productos")
      })
    },[]);

    const cardItems = productos.map((elem)=>{
      return <CardItem product={elem}/>
    })

    return (
      <>
        <div className='fondoNav'></div>
        <div className='itemsContainer'>
          {cardItems}
        </div>
      </>
      
    )
  }
  
  export default ItemListContainer