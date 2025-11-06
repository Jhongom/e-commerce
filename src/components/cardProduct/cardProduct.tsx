import React from "react";
import styles from "./cardProduct.module.scss"
import type { CardProps } from "../../constants/productsTypes";

const CardProduct: React.FC<CardProps> = ({card, addToCar}) => {
    const {id, images, title, price, category, stock } = card
    /**
     * (hacer una cart generica y reutilizable)
        --mostrar por cada producto nombre
         iamgen precio categoria stock
        (agregarle esos props al componente)
        (hacer responsive las carts)
     */

    const outOfStock = stock === 0

    return(
        <div className={styles["card-container"]}>
            <p> {title}</p>
            <img src={images[0]} alt={title} />
            <p>price {price}</p>
            <p>category {category}</p>
            <p >Stock {stock}</p>
            <button onClick={() => addToCar(card)}>Buy</button>
        </div>

    );
}

export default CardProduct;