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
          <Route path='/' element={
              <Home />
            } />
            <Route path='/store' element={
              <ItemListContainer />
            } />
            <Route path='/cart' element={
              <CartContainer />
            } />

            <Route path='/detalle/:idProducto' element={
              <ItemDetailContainer />
            }/>
            <Route path='/categorias/samsung' element={
              <div>Hola samsung</div>
            } />
            <Route path='/categorias/motorola' element={
              <div>Hola motorola</div>
            } />
            <Route path='/categorias/xiaomi' element={
              <div>Hola xiaomi</div>
            } />
        </Routes>
      </CartContextProvider>
    </BrowserRouter>
    </div>
  )
}

export default App
