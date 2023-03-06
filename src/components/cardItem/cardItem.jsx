import { Link } from 'react-router-dom'
import { useCartContext } from '../../context/cartContext'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

 

import './cardItem.css'

const CardItem = ({product}) => {

  let cantidad = 1

  const {addCart} = useCartContext()

  const notify = () =>  toast.success("Producto añadido con exito.", {
    position: "top-right",
    autoClose: 1000,
    hideProgressBar: true,
    closeOnClick: false,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "colored",
  });

 

  return (
    <div className='containerCardItem d-flex flex-column align-items-center'>
          <ToastContainer />
          <div className='cardItemHover'>
            <button className="button" onClick={()=>{
              notify()
              addCart({...product,cantidad})}}>
              Agregar al carrito</button>
            <Link to={`/EntregaReactFinalEccomerce/detalle/${product.id}`} className="button">Ver mas</Link>
          </div>
            <div className='favIconContainer'>
              <svg width="32" height="28" viewBox="0 0 32 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M16.0075 4.87686C16.3184 4.41581 16.5996 3.96549 16.9121 3.53909C17.9861 2.07595 19.3356 0.971588 21.0732 0.386828C24.2351 -0.67712 28.0376 0.550957 29.9751 3.35846C32.1716 6.54124 32.3648 9.94505 30.8098 13.4503C29.9044 15.4916 28.4825 17.1849 26.8732 18.6851C24.3848 21.0035 21.8125 23.2312 19.2698 25.4911C18.4392 26.2292 17.5922 26.9484 16.7476 27.6701C16.2641 28.0825 15.7863 28.1163 15.3389 27.7229C11.9418 24.7315 8.52825 21.759 5.1739 18.7197C3.78002 17.457 2.5687 16.0005 1.65836 14.3345C-0.333368 10.6906 -0.395044 7.03362 1.9248 3.53661C4.76683 -0.747225 11.4032 -1.59014 15.1005 3.53331C15.4105 3.96302 15.6942 4.41169 16.0067 4.87686H16.0075Z" fill="#5E16EA"/>
              </svg>
            </div> 
            <h3 className='text-center'>{product.nombre}</h3>
            <img src={product.imgs.img1} alt="" />
            <div className='cardItemFooter w-100 d-flex align-items-center justify-content-around py-3 my-3'>
              <p className='m-0 fs-4 font-weight-bold'>${product.precio}</p>
              <div className='cardClasificacion'>
                      <svg width="25" height="38" viewBox="0 0 21 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M10.5 0L12.8574 7.25532H20.4861L14.3143 11.7394L16.6717 18.9947L10.5 14.5106L4.32825 18.9947L6.68565 11.7394L0.513906 7.25532H8.1426L10.5 0Z" fill="#5E16EA"/>
                      </svg>
                      <svg width="25" height="38" viewBox="0 0 21 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M10.5 0L12.8574 7.25532H20.4861L14.3143 11.7394L16.6717 18.9947L10.5 14.5106L4.32825 18.9947L6.68565 11.7394L0.513906 7.25532H8.1426L10.5 0Z" fill="#5E16EA"/>
                      </svg>
                      <svg width="25" height="38" viewBox="0 0 21 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M10.5 0L12.8574 7.25532H20.4861L14.3143 11.7394L16.6717 18.9947L10.5 14.5106L4.32825 18.9947L6.68565 11.7394L0.513906 7.25532H8.1426L10.5 0Z" fill="#5E16EA"/>
                      </svg>
                      <svg width="25" height="38" viewBox="0 0 21 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M10.5 0L12.8574 7.25532H20.4861L14.3143 11.7394L16.6717 18.9947L10.5 14.5106L4.32825 18.9947L6.68565 11.7394L0.513906 7.25532H8.1426L10.5 0Z" fill="#5E16EA"/>
                      </svg>
                      <svg width="25" height="38" viewBox="0 0 21 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M10.5 0L12.8574 7.25532H20.4861L14.3143 11.7394L16.6717 18.9947L10.5 14.5106L4.32825 18.9947L6.68565 11.7394L0.513906 7.25532H8.1426L10.5 0Z" fill="#C4C1C1"/>
                      </svg>
              </div>
            </div>
        </div>
  )
}

export default CardItem