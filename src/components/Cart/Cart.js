import React, { useContext } from "react";
import classes from "./Cart.module.css";
import Modal from "../UI/Modal";
import CartContext from "../../store/cart-context";

const Cart = (props) => {
  const cartCntx = useContext(CartContext);

  const cartItems = (
    <ul>
      {cartCntx.items.map((item) => (
        <li key={item.id}>
          <div className="cart-item">
            <h2>{item.name} </h2>${item.price}{" "}
            <div className={classes.itemCounts}>x {item.quantity}</div>
          </div>
          <div className="cart-item-btns">
            <button onClick={() => itemIncreaseHandler(item.id)}>+</button>
            <button onClick={() => itemDecreaseHandler(item.id)}>-</button>
          </div>
        </li>
      ))}
    </ul>
  );

  const itemIncreaseHandler = (itemId) => {
    cartCntx.addItem({
      ...cartCntx.items.find((item) => item.id === itemId),
      quantity: 1,
    });
  };

  const itemDecreaseHandler = (itemId) => {
    const targetItem = cartCntx.items.find((item) => item.id === itemId);
    if (targetItem && targetItem.quantity > 1) {
      cartCntx.addItem({ ...targetItem, quantity: -1 });
    } else if (targetItem && targetItem.quantity === 1) {
      cartCntx.removeItem(itemId);
    } else {
      console.error("Item not found or quantity is already 0");
    }
  };

  const totalAmount = cartCntx.totalAmount;

  return (
    <Modal onClose={props.onClose}>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount: </span>
        <span>{totalAmount}</span>
      </div>
      <div>
        <button className={classes["button--alt"]} onClick={props.onClose}>
          Close
        </button>
        <button className={classes.button}>Order</button>
      </div>
    </Modal>
  );
};

export default Cart;
