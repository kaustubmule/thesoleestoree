import React from "react";
import "./Product.css";


function Product({ id, title, image, price, rating }) {


    return (

        <div className="product">

            <div className="product__info">
                <p>{title}</p>
                <p className="product__price">
                    <small>₹</small>
                    <strong>{price}</strong>
                </p>

            </div>

            <img style={{ maxheight: "200px" }} src={image} alt="" />


        </div>

    );
}

export default Product;