import axios from "axios";
import type { ProductTypes } from "../../constants/productsTypes";

const API_NAME = "https://dummyjson.com/products";

export const fetchProductsApi = async ():Promise<ProductTypes[]> => {

  try {
    const productsData = await axios.get(API_NAME);
    const products = productsData.data.products
    const normalizedProducts: ProductTypes[] = products.map((p: any) => ({
      id: Number(p.id),
      images: p.images,
      title: String(p.title),
      price: Number(p.price),
      category: String(p.category),
      stock: Number(p.stock),
    }));
    return normalizedProducts
  } catch (error) {
    if (axios.isAxiosError(error)){
      console.log("error message", error.message);
      throw new Error("Try later");//screen error
    }else{
      console.log("unexpected error", error);
      return []
    }
  }
};