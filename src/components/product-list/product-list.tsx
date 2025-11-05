import { useState } from "react";
import type { CardProps, CarItem, ProductTypes } from "../../constants/productsTypes"
import CardProduct from "../cardProduct/cardProduct";
import styles from "./product-list.module.scss";

type CardProductProps = {
    productProps: ProductTypes[];
}

const CardProductList =({productProps}: CardProductProps) =>{

  const [cart, setCart] = useState<CarItem[]>([]);

   const addToCar = (card: ProductTypes) =>{
        setCart((prevCart) =>[...prevCart, {...card, quantity: 1} ])
        console.log(setCart)
      }
      
  return(
        <div className={styles["product-list-container"]}>
          {productProps.map((ProductTypes) =>{
            return <CardProduct key={ProductTypes.id} card={ProductTypes} addToCar={addToCar}/> 
          })}
        </div>

        
    )
    
}

export default CardProductList;