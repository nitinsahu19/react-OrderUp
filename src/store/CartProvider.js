import React, { useState } from "react";
import CartContext from "./cart-context";

const CartProvider = (props) => {
  const [items, updateItems] = useState([]);
  const [totalAmount, updateTotalAmount] = useState(0);

  const addItemToCartHandler = (item) => {
    // Check if the item is already in the cart
    const existingCartItem = items.find((cartItem) => cartItem.id === item.id);

    // If the item is in the cart, update its quantity; otherwise, add it to the cart
    if (existingCartItem) {
      updateItems((prevItems) => {
        return prevItems.map((cartItem) =>
          cartItem.id === item.id
            ? {
                ...cartItem,
                quantity: Number(cartItem.quantity) + Number(item.quantity),
              }
            : cartItem
        );
      });
    } else {
      updateItems((prevItems) => [...prevItems, { ...item }]);
    }

    // Update the total amount
    updateTotalAmount(totalAmount + item.price * item.quantity);
  };

  const removeItemFromCartHandler = (itemId) => {
    const itemToRemove = items.find((item) => item.id === itemId);

    updateTotalAmount(totalAmount - itemToRemove.price);

    updateItems((prevItems) => prevItems.filter((item) => item.id !== itemId));
  };

  const cartContext = {
    items: items,
    totalAmount: totalAmount,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler,
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
