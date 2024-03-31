import { createContext, useState } from "react";
import { useEffect } from "react";

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
    );
  }
  // incase new product is to be added
  return [...cartItems, { ...producToAdd, quantity: 1 }];
};
export const CartContext = createContext({
  isCartOpen: false,
  setIsCartOpen: () => {},
  cartItems: [],
  addItemToCart: () => {},
  cartCount: 0,
});

export const CartProvider = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
    const cartSize = cartItems.reduce(
      (accumulator, cartItem) => accumulator + cartItem.quantity,
      0
    );
    setCartCount(cartSize);
  }, [cartItems]);
  const addItemToCart = (productToAdd) => {
    setCartItems(addCartItem(cartItems, productToAdd));
  };

  const value = {
    isCartOpen,
    setIsCartOpen,
    addItemToCart,
    cartItems,
    cartCount,
  };
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
