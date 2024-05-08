import { createContext, useContext, useEffect, useState } from "react";
import { data } from "../data";
import { CartContext } from "./CartContext";
import axios from "axios";

const ProductContextProvider = ({ children }) => {
  const [products, setProducts] = useState(data);
  const { addItem } = useContext(CartContext);
  const [productAPI, setProductAPI] = useState({
    loading: true,
    error: false,
  });

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((response) => {
        setProducts(response.data);
        setProductAPI({
          loading: false,
          error: false,
        });
      })
      .catch((err) => {
        setProductAPI({
          loading: false,
          error: err.message || "Something went wrong",
        });
      });
  }, []);
  return (
    <ProductContext.Provider value={{ products, addItem, productAPI }}>
      {productAPI.error && <p>{productAPI.error}</p>}
      {productAPI.loading && <p>Loading...</p>}
      {!productAPI.loading && !productAPI.error && children}
    </ProductContext.Provider>
  );
};

export const ProductContext = createContext();

export default ProductContextProvider;
