import "./checkout-item.styles.scss";
import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";

const CheckoutItem = ({cartItem}) => {
  const { addItemToCart, deleteItemFromCart,removeItemFromCart} =
    useContext(CartContext);
  const addProductCart = () => addItemToCart(cartItem);
  const removeProductCart = () => deleteItemFromCart(cartItem);
  const removeFromCart = () => removeItemFromCart(cartItem);
  const { name, imageUrl, price, quantity} = cartItem;
  return (
    <div className="checkout-item-container">
      <div className="image-container">
        <img src={imageUrl} alt={`${name}`} />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">
        <div className="arrow" onClick={removeProductCart}>
          &#10094;
        </div>
        <span className="value">{quantity}</span>
        <div className="arrow" onClick={addProductCart}>
          &#10095;
        </div>
        </span>
      <span className="price"> {price}</span>
      <div className="remove-button" onClick={removeFromCart}>&#10005;</div>
    </div>
  );
};

export default CheckoutItem;
