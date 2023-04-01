import React from 'react'
import './css/Subtotal.css';
import { useStateValue } from './StateProvider';
import CurrencyFormat from 'react-currency-format';
import { finalAmount, getBasketTotal } from "./reducer";
import { Link } from 'react-router-dom';


function Subtotal() {
    const [{ basket }] = useStateValue();

    return (
        <div className="subtotal">
            <CurrencyFormat
                renderText={(value) => (
                    <>
                        <h4>
                            Number of items : {basket.length}
                        </h4>
                        <small><small>Total Amount : {`${value}`}
                            <br />CGST SGST: ₹212.5</small></small>

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

            <Link to='/contactus'><button className='btn_buy'>Buy Now</button></Link>

        </div>
    )
}

export default Subtotal;