import React, { useState, useEffect } from 'react';
import './css/Subtotal.css';
import { useStateValue } from './StateProvider';
import CurrencyFormat from 'react-currency-format';
import { finalAmount, getBasketTotal } from "./reducer";

function Subtotal() {
  const [{ basket }] = useStateValue();
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setAnimate(true);
    const timer = setTimeout(() => setAnimate(false), 500);
    return () => clearTimeout(timer);
  }, [basket]);

  return (
    <div className="subtotal">
      <h4>Order Summary</h4>
      <CurrencyFormat
        renderText={(value) => (
          <small>
            <span>Items ({basket.length})</span>
            <span>Subtotal: {value}</span>
            <span>CGST & SGST: ₹212.5</span>
          </small>
        )}
        decimalScale={2}
        value={getBasketTotal(basket)}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"₹"}
      />
      <strong className={animate ? 'animate' : ''}>
        ₹{finalAmount(basket) + 212.5}
      </strong>
    </div>
  );
}

export default Subtotal;
