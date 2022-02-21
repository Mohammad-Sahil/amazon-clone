import React, { useState } from 'react';
import CurrencyFormat from 'react-currency-format';
import { useStateValue } from './StateProvider';

function Subtotal() {
    const [{ basket }, dispatch] = useStateValue();
    let tot = 0;
    for(let i=0; i<basket.length; i++){
        tot += basket[i].price;
    }
  return (
    <div class="subtotal">
    <CurrencyFormat renderText={(value) => (
        <>
            <p>Subtotal ({basket?.length} items): <strong>${tot}</strong></p>
              <small class="subtotal_gift">
            <input type="checkbox"/> This order contains a gift</small><br/>
        </>
    )}
        decimalScale={2}
        value={0}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
    />
       <button className='btn'>Proceed to Checkout</button>
    </div>
  )
}

export default Subtotal