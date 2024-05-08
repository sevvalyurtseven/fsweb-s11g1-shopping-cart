import { createContext } from "react";
import useLocalStorage from "../hooks/useLocalStorage";

const CartContextProvider = ({ children }) => {
  const [cart, setCart] = useLocalStorage("shoppingCart", []);

  const addItem = (item) => {
    // verilen itemi sepete ekleyin
    setCart([...cart, item]);
  };

  const removeItem = (itemId) => {
    // verilen id'ye sahip itemi sepetten kaldırın
    setCart(cart.filter((item) => item.id !== itemId));
  };

  return (
    <CartContext.Provider value={{ cart, addItem, removeItem }}>
      {children}
    </CartContext.Provider>
  );
};

export const CartContext = createContext();
export default CartContextProvider;
