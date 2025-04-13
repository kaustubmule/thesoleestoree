import React from 'react'
import './css/CheckoutProduct.css'
import { useStateValue } from "./StateProvider";

function CheckoutProduct({ id, title, image, price }) {
    const [{ basket }, dispatch] = useStateValue();

    // Find the current item in the basket to get its quantity
    const currentItem = basket.find(item => item.id === id);
    const quantity = currentItem?.quantity || 1;

    const removeFromBasket = () => {
        dispatch({
            type: "REMOVE_FROM_BASKET",
            id: id,
        });
    }

    const increaseQuantity = () => {
        dispatch({
            type: "ADD_TO_BASKET",
            item: currentItem,
        });
    }

    const decreaseQuantity = () => {
        if (quantity > 1) {
            dispatch({
                type: "REMOVE_FROM_BASKET",
                id: id,
            });
        }
    }

    return (
        <div className="checkoutProduct">
            <img className="checkoutProduct__image" src={image} alt="" />
            <div className="checkoutProduct__info">
                <p className="checkoutProduct__title">{title}</p>
                <p className="checkoutProduct__price">
                    <small>₹</small>
                    <strong>{price}</strong>
                </p>
                <div className="qty-input">
                    <button
                        className="qty-count qty-count--minus"
                        onClick={decreaseQuantity}
                        disabled={quantity <= 1}
                        type="button"
                    >
                        -
                    </button>
                    <input
                        className="product-qty"
                        type="number"
                        value={quantity}
                        readOnly
                    />
                    <button
                        className="qty-count qty-count--add"
                        onClick={increaseQuantity}
                        type="button"
                    >
                        +
                    </button>
                </div>
                <button className="removeButton" onClick={removeFromBasket}>
                    Remove from Cart
                </button>
            </div>
        </div>
    );
}

export default CheckoutProduct