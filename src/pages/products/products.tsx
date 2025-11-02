import { useEffect, useState } from "react";
import { fetchProductsApi } from "../../service/products/products.api";
import type { ProductTypes } from "../../constants/productsTypes";
import CardProductList from "../../components/product-list/product-list";
import styles from "./products.module.scss"

const Products: React.FC = () => {
    const [items, setItems] = useState<ProductTypes[]>([])
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);


    useEffect(() => {
    const getProducts = async () => {
      try {
        const data = await fetchProductsApi();  
        setItems(data);
      } catch (err) {
      if (err instanceof Error) {
        setError(err.message); 
        }else
        setError(String(err));
      } finally {
        setLoading(false);
      }
    };
    getProducts(); 
  }, []);

  if (loading) return <p>Cargando productos...</p>;
  if (error) return <p>Error: {error}</p>;

    console.log("entro a products de pages")


    return(
        <div className={styles["products-container"]} >
            <h1>E-Commerce</h1>
            <CardProductList productProps={items} />
        </div>
    )
}

export default Products;