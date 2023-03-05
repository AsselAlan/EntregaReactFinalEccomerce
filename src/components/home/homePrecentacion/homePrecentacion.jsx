import React from 'react'
import './homePrecentacion.css'
import img from '../../../assets/home.png'


const HomePrecentacion = () => {
  return (
    <div className='homeContainerPrecentacion row'>
        <div className='containerLeft col-sm d-flex flex-column justify-content-center'>
            <p>Ofertas tecno</p>
            <p>ESPECIAL EN</p>
            <p>CELULARES Y ACCESORIOS</p>
            <div className='d-flex'>
                <div className='divOff'>
                    <p>HASTA</p>
                    <p>10% <span>OFF</span></p>
                </div>
                <div className='divCuotas'> 
                    <p>HASTA</p>
                    <p><span>12</span> CUOTAS</p>
                    <p>SIN INTERÉS</p>
                </div>
            </div>
            <p>Válido del <span>23/01/2023</span> hasta el <span>29/01/2023</span>. Cuotas sin interés en bancos seleccionados. Más información en las condiciones generales de medios de pago.</p>
        </div>
        <div className='containerRigth col-sm  d-flex align-items-center'>
            <img src={img} alt="" />
        </div>
    </div>
  )
}

export default HomePrecentacion