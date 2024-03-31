import "./checkout.styles.scss"
import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";

const Checkout = () => {
    
    const {cartItems} = useContext(CartContext);
    return(
        <div className="checkout-container">
         <h3>Product</h3>
         <h3>Description</h3>
         <h3>Quantity</h3>
         <h3>Price</h3>
         <h3>Remove</h3>
        </div>
    );
}

export default Checkout;