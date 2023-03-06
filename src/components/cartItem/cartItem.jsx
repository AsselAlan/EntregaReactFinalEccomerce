import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import CartContador from '../cartContador/cartContador'
import { useCartContext } from '../../context/cartContext'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import './cartItem.css'

const CartItem = ({cartItem}) => {

  const {deleteProduct} = useCartContext()

  const notify = () =>  toast.error("Producto eliminado.", {
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
    <>
      <ToastContainer />
      <Container className='cartItemContaine justify-content-center'>
          <Row className="m-0 d-flex align-items-center">
            <Col md="auto"><img src={cartItem.imgs.img1} alt=""/></Col>
            <Col sm={6}>
                <Row className='w-100'><h4>{cartItem.nombre}</h4></Row>
                <Row className='w-100'><p>{cartItem.categoria}</p></Row>
                <Row className='w-100 m-0'>
                   <Col className="m-0"><Link to={`/EntregaReactFinalEccomerce/detalle/${cartItem.id}`} className="button">Ver producto</Link></Col>
                   <Col className="m-0"><a className="button" onClick={()=>{
                    notify()
                    setTimeout(() => {
                      deleteProduct(cartItem.id)
                    }, 800);
                    }}>Eliminar</a></Col>
                   <Col className="m-0"></Col>
                </Row>
            </Col>
            <Col sm={2} className="d-flex align-items-center">
              <CartContador cantidad={cartItem.cantidad} id={cartItem.id} />
            </Col>
            <Col sm={2} className="d-flex align-items-center">
              <h4>$ {cartItem.precio}</h4>
            </Col>
          </Row>
      </Container>
      <div className='cartFoterContainer'>

      </div>
    </>
  )
}

export default CartItem