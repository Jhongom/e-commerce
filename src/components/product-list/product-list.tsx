import { useEffect, useState } from "react";
import type { CarItem, ProductTypes } from "../../constants/productsTypes"
import CardProduct from "../cardProduct/cardProduct";
import styles from "./product-list.module.scss";

type CardProductProps = {
    productProps: ProductTypes[];
}

const CardProductList =({productProps}: CardProductProps) =>{

  const initialStorageCar = (): CarItem[] => {
    const startedStorage = localStorage.getItem("cart");
    return startedStorage ? JSON.parse(startedStorage): []
  }
  
  const [cart, setCart] = useState<CarItem[]>(initialStorageCar());

  useEffect(() =>{
    localStorage.setItem('cart', JSON.stringify(cart))
  },[cart])

  const addToCar = (card: ProductTypes) => {
    setCart((prevCart) => {
      const itemExist = prevCart.find(cartItem => cartItem.id === card.id);
      if (itemExist){
        return prevCart.map(cartItem => 
        cartItem.id === card.id 
        ? { ...cartItem, quantity: (cartItem.quantity ?? 0) + 1 }: cartItem)
      } 
      const updatedCart = [...prevCart, { ...card, quantity: 1 }];
      console.log("Nuevo carrito:", updatedCart);
      return updatedCart;
    });
  };
      
  return(
        <div className={styles["product-list-container"]}>
          {productProps.map((ProductTypes) =>{
            return <CardProduct key={ProductTypes.id} card={ProductTypes} addToCar={addToCar}/> 
          })}
        </div>

        
    )
    
}

export default CardProductList;