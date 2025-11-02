import axios from "axios";

const API_NAME = "https://dummyjson.com/products";

export const fetchProductsApi = async () => {

  try {
    const productsData = await axios.get(API_NAME);
    const products = productsData.data.products
    return products
  } catch (error) {
    if (axios.isAxiosError(error)){
      console.log("error message", error.message);
      throw new Error("Try later");
    }else{
      console.log("unexpected error", error);
      return "An unexpeted error has occured"
    }
  }
};