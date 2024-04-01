import "./checkout.styles.scss"
import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";
import Button from "../../components/button/button.component";

const Checkout = () => {
    const {cartItems,addItemToCart,deleteItemFromCart} = useContext(CartContext);
    return(
        <div>
            <div className="checkout-container">
                {cartItems.map((cartItem)=>{
                    const {name,quantity,id} = cartItem;
                    const addProductCart = () => addItemToCart(cartItem);
                    const removeProductCart = () => deleteItemFromCart(cartItem);
                    return(
                        <div key={id}>
                            <h2>{name}</h2>
                            <span>Quantity: {quantity}</span>
                            <span onClick={addProductCart}>  + </span>
                            <span onClick={removeProductCart}>  - </span>
                        </div>
                    );
                })}
            </div>
        </div>

    );
}

export default Checkout;