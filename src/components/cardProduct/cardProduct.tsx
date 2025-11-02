import React from "react";
import styles from "./cardProduct.module.scss"
import type { CardProps } from "../../constants/productsTypes";



const CardProduct: React.FC<CardProps> = ({card}) => {
    const {id, images, title, price, category, stock } = card
    /**
     * (hacer una cart generica y reutilizable)
        --mostrar por cada producto nombre
         iamgen precio categoria stock
        (agregarle esos props al componente)
        (hacer responsive las carts)
     */

    const outOfStock = stock === 0

    console.log("esta en cardproduct")

    return(
        <div className={styles["card-container"]}>
            <p> {title}</p>
            <img src={images}></img>
            <p>price {price}</p>
            <p>category {category}</p>
            <p >Stock {stock}</p>
            <button>Buy</button>
        </div>

    );
}

export default CardProduct;