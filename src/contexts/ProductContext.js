import { createContext, useContext, useState } from "react";
import { data } from "../data";
import { CartContext } from "./CartContext";

const ProductContextProvider = ({ children }) => {
  const [products, setProducts] = useState(data);
  const { addItem } = useContext(CartContext);
  return (
    <ProductContext.Provider value={{ products, addItem }}>
      {children}
    </ProductContext.Provider>
  );
};

export const ProductContext = createContext();

export default ProductContextProvider;
