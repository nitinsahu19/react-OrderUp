import React, { useContext, useState } from "react";
import classes from "./Cart.module.css";
import Modal from "../UI/Modal";
import CartContext from "../../store/cart-context";

const Cart = (props) => {
  const cartCntx = useContext(CartContext);
  

  const cartItems = (
    <ul>
      {cartCntx.items.map((item) => (
        <li>
          <div className="cart-item">
            <h2>{item.name} </h2>${item.price}{" "}
            <div className={classes.itemCounts}>x {item.quantity}</div>
          </div>
          <div className="cart-item-btns">
            <button>+</button>
            <button>-</button>
          </div>
        </li>
      ))}
    </ul>
  );

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
