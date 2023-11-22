import React from "react";
import classes from "./Header.module.css";
import mealsImage from "../../assets/image.jpg";
import HeaderCartButton from "./HeaderCartButton";
import CartIcon from "../Cart/CartIcon";

const Header = () => {
  return (
    <React.Fragment>
      <header className={classes.header}>
        <h2>ReactMeals</h2>
        <HeaderCartButton />
      </header>

      <div className={classes["main-image"]}>
        <img src={mealsImage} alt="A table full of delicious food." />
      </div>
    </React.Fragment>
  );
};

export default Header;
