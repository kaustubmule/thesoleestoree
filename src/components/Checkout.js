import React, { useState } from 'react';
import { useStateValue } from './StateProvider';
import CheckoutProduct from './CheckoutProduct';
import './css/Checkout.css';
import Subtotal from './Subtotal';
import Payment from './Payment';

function Checkout() {
  const [{ basket }] = useStateValue();
  const [showPayment, setShowPayment] = useState(false);

  return (
    <div className="checkout">
      {!showPayment ? (
        <>
          <div className="checkout__left">
            {basket?.length === 0 ? (
              <div className="empty">
                <h2>Basket is Empty</h2>
                <p>Add Some Items to the Basket</p>
              </div>
            ) : (
              <div>
                <h2 className="checkout__title">Your Shopping Basket</h2>
                {basket.map((item) => (
                  <CheckoutProduct
                    key={item.id}
                    id={item.id}
                    title={item.title}
                    image={item.image}
                    price={item.price}
                  />
                ))}
              </div>
            )}
          </div>

          {basket.length > 0 && (
            <div className="checkout__right">
              <h2>&nbsp;&nbsp;Subtotal</h2>
              <Subtotal />
              <button
                className="buyNowButton"
                onClick={() => setShowPayment(true)}
              >
                Buy Now
              </button>
            </div>
          )}
        </>
      ) : (
        <Payment />
      )}
    </div>
  );
}

export default Checkout;
