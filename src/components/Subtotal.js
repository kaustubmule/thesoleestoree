import React from 'react'
import './Subtotal.css';
import { useStateValue } from './StateProvider';
import CurrencyFormat from 'react-currency-format';
import { finalAmount, getBasketTotal } from "./reducer";


function Subtotal() {
    const [{ basket }] = useStateValue();

    return (
        <div className="subtotal">
            <CurrencyFormat
                renderText={(value) => (
                    <>
                        <p>
                            Number of items : {basket.length}
                        </p>
                        <small><small>Total Amount : {`${value}`}
                            <br />CGST SGST: ₹212.5</small></small>

                        <small className="subtotal__gift">
                            <input type="checkbox" />
                            This Order Contains a gift
                        </small>
                        { }
                    </>
                )}
                decimalScale={2}
                value={getBasketTotal(basket)}
                displayType={"text"}
                thousandsSeparater={true}
                prefix={"₹"}
            />

            <strong>Final Amount : ₹{finalAmount(basket) + 212.5}</strong>

            <button>Buy Now</button>
        </div>
    )
}

export default Subtotal;