import React from "react"
import './itemDetail.css'

const ItemDetail = ({productos}) =>{
    
return(
    <div className="itemDetalleContainer d-flex justify-content-center">
        <div className="cardDetalles d-flex">
            <div className="w-50 d-flex">
                <div className="w-25 d-flex flex-column">
                    <img src={productos.imgs.img1} alt=""/>
                    <img src={productos.imgs.img2} alt=""/>
                    <img src={productos.imgs.img3} alt=""/>
                </div>
                <div className="w-75">
                    <img src={productos.imgs.img1} alt=""/>
                </div>
            </div> 
            <div className="w-50">
                <div className="w-50">
                    <h2>{productos.nombre}</h2>
                    <p>${productos.precio}</p>
                    <p className='fw-bold my-3'>Especificaciones tecnicas</p>
                    <p>Serie :</p>
                    <p>Camara tracera: {productos.espesificaciones.tmp}  mp</p>
                    <p>Camara delantera: {productos.espesificaciones.fmp} mp</p>
                    <p>Pantalla: {productos.espesificaciones.pantalla}"</p>
                    <p>Bateria: {productos.espesificaciones.bateria} mAh</p>
                </div>
                <div className="w-50">

                </div>
            </div>
        </div>
    </div>
)
}

export default ItemDetail