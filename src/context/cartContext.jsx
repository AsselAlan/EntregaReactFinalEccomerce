import { createContext, useContext, useState } from "react";


const CartContext = createContext([])

export const useCartContext = () => useContext(CartContext)

export const CartContextProvider = ({children}) =>{

    const [cartList, setCartList] = useState([])
    
    const addCart = (newProduct) =>{

        
        console.log("inicio");
        console.log(cartList);

        if(cartList.length !== 0){
            console.log("cartList tiene elementos");
            
            let verifElem 

            cartList.map((elem)=>{
                
                if(elem.id === newProduct.id){
                    return verifElem = true
                }if(elem.id !== newProduct.id){
                    verifElem = false
                }})

            if(verifElem){
                cartList.find((elem)=>{
                    if(elem.id === newProduct.id){
                        console.log("El producto existe");
                        console.log(elem.id);
                        console.log(newProduct.id);
                        elem.cantidad = elem.cantidad + 1
                    }
                })
            }if(!verifElem){
                setCartList([
                    ...cartList,
                    newProduct]); 
            }

        }else{
            console.log("cartList no tiene elementos");
            setCartList([
                ...cartList,
                newProduct]);
        }
        console.log("final");
        console.log(cartList);
    }

    return (
        <CartContext.Provider value={{
            cartList,
            addCart
        }}>
            {children}
        </CartContext.Provider>
    )
}