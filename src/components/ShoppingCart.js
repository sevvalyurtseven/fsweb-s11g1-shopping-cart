import React, { useContext } from "react";
import { ScCartCheckout } from "./scParts";

// Components
import Item from "./ShoppingCartItem";
import { CartContext } from "../contexts/CartContext";

const ShoppingCart = (props) => {
  const { cart, getCartTotal } = useContext(CartContext);

  return (
    <div>
      {cart.map((item, orderInCart) => (
        <Item
          key={item.id.toString() + orderInCart.toString()}
          {...item}
          orderInCart={orderInCart}
        />
      ))}

      <ScCartCheckout>
        <p>Total: ${getCartTotal()}</p>
        <button>Checkout</button>
      </ScCartCheckout>
    </div>
  );
};

export default ShoppingCart;
