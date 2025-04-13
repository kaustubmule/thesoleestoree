import React from "react";
import "./css/Product.css";
import { useStateValue } from "./StateProvider";
import { useNavigate } from "react-router-dom";

function Product({ id, title, image, price }) {
    const [{ }, dispatch] = useStateValue();
    const navigate = useNavigate();

    const addToBasket = () => {
        //Add item to basket
        dispatch({
            type: 'ADD_TO_BASKET',
            item: {
                id,
                title,
                image,
                price,
            },
        });
    };

    const handleProductClick = () => {
        navigate(`/product/${id}`);
    };

    return (
        <div className="product" onClick={handleProductClick}>
            <div className="product__info">
                <p>{title}</p>
                <p className="product__price">
                    <small>₹</small>
                    <strong>{price}</strong>
                </p>
            </div>
            <img src={image} alt="" />
            <button onClick={addToBasket}>Add to basket</button>
        </div>
    );
}

export default Product;