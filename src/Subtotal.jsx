import React, { useState } from 'react';
import CurrencyFormat from 'react-currency-format';
import { useStateValue } from './StateProvider';
import { useNavigate } from 'react-router-dom';


function Subtotal() {
    const navigate = useNavigate();
    const [{ basket }, dispatch] = useStateValue();
    let tot = 0;
    for(let i=0; i<basket.length; i++){
        tot += basket[i].price;
    };
    const direct = (tot === 0) ? '/checkout' : '/payment';
    const paymentPage = () => {
      navigate(direct);
    }
  return (
    <div class="subtotal">
    <CurrencyFormat renderText={(tot) => (
        <>
            <p>Subtotal ({basket?.length} items): <strong>{tot}</strong></p>
              <small class="subtotal_gift">
            <input type="checkbox"/> This order contains a gift</small><br/>
        </>
    )}
        decimalScale={2}
        value={tot}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"₹"}
    />
       <button onClick={paymentPage} className='btn'>Proceed to Checkout</button>
    </div>
  )
}

export default Subtotal