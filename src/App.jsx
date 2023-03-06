import './App.css'
import Nav from './components/nav/nav'

import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './components/home/home'
import ItemListContainer from './components/itemListContainer/itemListContainer'
import ItemDetailContainer from './components/itemDetailContainer/ItemDetailContainer'
import { CartContextProvider } from './context/cartContext'
import CartContainer from './components/cartContainer/cartContainer'

function App() {

  return (
    <div className="App">
      <BrowserRouter>
      <CartContextProvider>
        <Nav />
        <Routes>
          <Route path='/EntregaReactFinalEccomerce/' element={
              <Home />
            } />
            <Route path='/EntregaReactFinalEccomerce/store' element={
              <ItemListContainer />
            } />
            <Route path='/EntregaReactFinalEccomerce/cart' element={
              <CartContainer />
            } />

            <Route path='/EntregaReactFinalEccomerce/detalle/:idProducto' element={
              <ItemDetailContainer />
            }/>
            <Route path='/EntregaReactFinalEccomerce/categorias/samsung' element={
              <div>Hola samsung</div>
            } />
            <Route path='/EntregaReactFinalEccomerce/categorias/motorola' element={
              <div>Hola motorola</div>
            } />
            <Route path='/EntregaReactFinalEccomerce/categorias/xiaomi' element={
              <div>Hola xiaomi</div>
            } />
        </Routes>
      </CartContextProvider>
    </BrowserRouter>
    </div>
  )
}

export default App
