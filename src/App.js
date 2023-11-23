import Header from "./components/Layout/Header";
import React, { Fragment, useState } from "react";
import Meals from "./components/Meal/Meals";
import Cart from "./components/Cart/Cart";

function App() {
  const [cartIsShown, setCart] = useState(false);

  const showCartHandler = () => {
    setCart(true);
  };

  const hideCartHandler = () => {
    setCart(false);
  };

  return (
    <Fragment>
      {cartIsShown && <Cart onClose={hideCartHandler} />}
      <Header onShowCart={showCartHandler} />
      <main>
        <Meals />
      </main>
    </Fragment>
  );
}

export default App;
