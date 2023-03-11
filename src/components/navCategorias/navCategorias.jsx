import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'

import './navCategorias.css'

const NavCategorias = () => {
  return (
    <div className='navCategoriasContainer d-flex aling-content-center justify-content-center'>
            <Row className="w-75 d-flex justify-content-center align-items-center">
                <Col md="3"><NavLink to="/EntregaReactFinalEccomerce/categorias/samsung" className={({isActive})=>isActive ? 'navLink navLinkActive' : 'navLink'}>SAMSUNG</NavLink></Col>
                <Col md="3"><NavLink to="/EntregaReactFinalEccomerce/categorias/motorola" className={({isActive})=>isActive ? 'navLink navLinkActive' : 'navLink'}>MOTOROLA</NavLink></Col>
                <Col md="3"><NavLink to="/EntregaReactFinalEccomerce/categorias/iphone" className={({isActive})=>isActive ? 'navLink navLinkActive' : 'navLink'}>IPHONE</NavLink></Col>
                <Col md="3"><NavLink to="/EntregaReactFinalEccomerce/categorias/xiaomi" className={({isActive})=>isActive ? 'navLink navLinkActive' : 'navLink'}>XIAOMI</NavLink></Col>
            </Row>
      </div>
  )
}

export default NavCategorias