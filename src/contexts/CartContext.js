import { createContext } from "react";
import useLocalStorage from "../hooks/useLocalStorage";

const CartContextProvider = ({ children }) => {
  const [cart, setCart] = useLocalStorage("shoppingCart", []);

  const addItem = (item) => {
    // verilen itemi sepete ekleyin
    setCart([...cart, item]);
  };

  const removeItem = (orderInCart) => {
    // verilen id'ye sahip itemi sepetten kaldırın
    setCart(cart.filter((item, i) => i !== orderInCart));
  };

  const getCartTotal = (discountPercentage = 0) => {
    //verilen indirim oranına göre sepetin toplamını hesaplayın
    return cart
      .reduce((acc, value) => {
        return acc + value.price * (1 - discountPercentage / 100);
      }, 0)
      .toFixed(2);
  };

  return (
    <CartContext.Provider value={{ cart, addItem, removeItem, getCartTotal }}>
      {children}
    </CartContext.Provider>
  );
};

export const CartContext = createContext();
export default CartContextProvider;
