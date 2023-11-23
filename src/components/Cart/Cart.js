import Modal from "../UI/Modal";
import classes from "./Cart.module.css";

const Cart = () => {
  const cartItems = (
    <ul>
      {[{ id: 1, name: "Sushi", price: "123" }].map((item) => (
        <li>{item.name}</li>
      ))}
    </ul>
  );
  return (
    <Modal>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount: </span>
        <span>$23</span>
      </div>
      <div>
        <button className={classes["button-alt"]}>Cancel</button>
        <button className={classes.button}>Order</button>
      </div>
    </Modal>
  );
};

export default Cart;
