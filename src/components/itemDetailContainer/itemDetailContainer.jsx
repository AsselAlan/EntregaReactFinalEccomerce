import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import './itemDetailContainer.css'

import getProducts from '../../getProducts.js'
import ItemDetail from '../itemDetail/itemDetail'


const ItemDetailContainer = () => {

  const [productos, setProductos] = useState([])
  const {idProducto} = useParams()
  
  useEffect(()=>{
    getProducts()
        .then((resProductos)=>{
          setProductos(resProductos)
        })
        .catch((error)=>{
          error.log("Error al obtener los productos")
        })
    },[])
    
    return (
      <>
        <div className='fondoNav'></div>
        {productos.map((elem)=>{if(elem.id === idProducto) return <ItemDetail productos={elem}/>})}
      </>
    )
  }
  
  export default ItemDetailContainer