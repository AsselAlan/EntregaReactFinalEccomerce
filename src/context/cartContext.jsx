import { createContext, useContext, useState } from "react";


const CartContext = createContext([])

export const useCartContext = () => useContext(CartContext)

export const CartContextProvider = ({children}) =>{

    const [cartList, setCartList] = useState([])
    
    const addCart = (newProduct) =>{
        if(cartList.length !== 0){            
            let verifElem = false

            cartList.map((elem)=>{
                
                if(elem.id === newProduct.id){
                    return verifElem = true
                }})
            if(verifElem){
                cartList.find((elem)=>{
                    if(elem.id === newProduct.id){
                        elem.cantidad = elem.cantidad + 1
                    }
                })
            }if(!verifElem){
                setCartList([
                    ...cartList,
                    newProduct]); 
            }

        }else{
            setCartList([
                ...cartList,
                newProduct]);
        }
    }

    const modifCantidad = (variable, idProducto) =>{
        cartList.map((elem)=>{                
            if(elem.id === idProducto){
                if(variable){
                    elem.cantidad = elem.cantidad + 1
                    
                }else{
                    elem.cantidad = elem.cantidad - 1
                }
                setCartList([...cartList])
            }})
    }

    const deleteProduct = (idProducto) =>{
        console.log(cartList);
        for (let i = 0; i < cartList.length; i++) {
            if(cartList[i].id === idProducto){
                cartList.splice(i,1)
                setCartList([...cartList])
                console.log(cartList);
            }
        }
    }

    return (
        <CartContext.Provider value={{
            cartList,
            addCart,
            modifCantidad,
            deleteProduct
        }}>
            {children}
        </CartContext.Provider>
    )
}
