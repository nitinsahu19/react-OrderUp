import React from "react";
import classes from "./Header.module.css";
import mealsImage from "../../assets/image.jpeg";
import HeaderCartButton from "./HeaderCartButton";
import CartIcon from "../Cart/CartIcon";

const Header = (props) => {
  return (
    <React.Fragment>
      <header className={classes.header}>
        <h2>ReactMeals</h2>
        <HeaderCartButton onClick={props.onShowCart} />
      </header>

      <div className={classes["main-image"]}>
        <img src={mealsImage} alt="A table full of delicious food." />
      </div>
    </React.Fragment>
  );
};

export default Header;
