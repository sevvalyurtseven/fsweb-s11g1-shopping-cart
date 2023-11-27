import React, { useState } from "react";
import { Route } from "react-router-dom";
import { data } from "./data";

// Bileşenler
import Navigation from "./components/Navigation";
import Products from "./components/Products";
import ShoppingCart from "./components/ShoppingCart";

function App() {
  //2 farkli state'i takip ediyoruz!
  const [products, setProducts] = useState(data);
  const [cart, setCart] = useState([]);

  //addItem fonksiyonu bos array olan kartimiza item'i ekleyecek!

  const addItem = (item) => {
    setCart([...cart, item]);
    // verilen itemi sepete ekleyin
  };

  return (
    <div className="App">
      <Navigation cart={cart} />

      {/* Routelar */}
      <main className="content">
        <Route exact path="/">
          <Products products={products} addItem={addItem} />
        </Route>

        <Route path="/cart">
          <ShoppingCart cart={cart} />
        </Route>
      </main>
    </div>
  );
}

export default App;
