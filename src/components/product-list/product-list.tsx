import type { ProductTypes } from "../../constants/productsTypes"
import CardProduct from "../cardProduct/cardProduct";
import styles from "./product-list.module.scss";

type CardProductProps = {
    productProps: ProductTypes[];
}
const CardProductList =({productProps}: CardProductProps) =>{
  console.log("esta en list",  productProps)
  return(
        <div className={styles["product-list-container"]}>
          {productProps.map((ProductTypes) =>{
            return <CardProduct key={ProductTypes.id} card={ProductTypes}/> 
          })}
        </div>

        
    )
    
}

export default CardProductList;