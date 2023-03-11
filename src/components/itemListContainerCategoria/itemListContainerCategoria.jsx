import React, { useEffect, useState } from 'react'
import './itemListContainerCategoria.css'

import getProducts from '../../getProducts.js'
import CardItem from '../cardItem/cardItem'
import NavCategorias from '../navCategorias/navCategorias'
import { useParams } from 'react-router-dom'



const ItemListContainerCategoria = () => {

  
  const [productos, setProductos] = useState([])
  const {categoria} = useParams()

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
      if(elem.categoria === categoria){
        return <CardItem product={elem}/>
      }
    })

    return (
      <>
        <div className='fondoNav'></div>
        <NavCategorias />
        <div className='itemsContainer'>
          {cardItems}
        </div>
      </>
      
    )
  }
  
  export default ItemListContainerCategoria