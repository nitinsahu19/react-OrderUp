import { createContext } from "react";

// To create context, you must Import createContext and initialize it:

const CartContext = createContext();

export default CartContext;

// Next we'll use the Context Provider to wrap the tree of components that need the state Context.
