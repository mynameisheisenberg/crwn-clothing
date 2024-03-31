import { createContext, useState } from "react";

const addCartItem = (cartItems, producToAdd) => {
  // find if cartItems contains productToAdd and return back the item
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === producToAdd.id
  );
  // if found increment quantity
  // return new array with modified cartItems
  if (existingCartItem) {
    return cartItems.map((cartItem) =>
        cartItem.id === producToAdd.id
          ? { ...cartItem, quantity: cartItem.quantity + 1 }
          : cartItem
      )
  }
  // incase new product is to be added
  return [...cartItems, { ...producToAdd, quantity: 1 }];
};
export const CartContext = createContext({
  isCartOpen: false,
  setIsCartOpen: () => {},
  cartItems: [],
  addItemToCart: () => {},
});

export const CartProvider = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);

  const addItemToCart = (productToAdd) => {
    setCartItems(addCartItem(cartItems, productToAdd));
  };

  const value = { isCartOpen, setIsCartOpen, addItemToCart, cartItems };
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
