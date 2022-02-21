import React, { useEffect, useState } from 'react';
import { useStateValue } from './StateProvider';
import CheckoutItem from './CheckoutItem';
import './home.css';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import CurrencyFormat from 'react-currency-format';
import axios from './axios';

function Payment() {
  const [{ basket, user }, dispatch] = useStateValue();

  const stripe = useStripe();
  const elements = useElements();
  const navigate = useNavigate();

  const [error, setError] = useState(null);
  const [desabled, setDesabled] = useState(true);
  const [succeeded, setSucceeded] = useState(false);
  const [clientSecret, setClientSecret] = useState(false);
  const [processing, setProcessing] = useState("");

  let tot = 0;
for(let i=0; i<basket.length; i++){
    tot += basket[i].price;
};

  useEffect(() => {
    const getClientSecret = async() => {
        const response = await axios({
            method: 'post',
            url: `/payment/create?total=${tot*100}`
        });
        setClientSecret(response.data.clientSecret);
    }
    getClientSecret();
  },[tot]);

  const handleSubmit = async(e) => {
    e.preventDefault();
    setProcessing(true);

    const payload = await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
            card: elements.getElement(CardElement)
        }
    }).then(({playmentIntent}) => {
        //payment confirmation
        setSucceeded(true);
        setError(null);
        setProcessing(false);

        navigate('/orders', {replace: true});
    }) 
  }
  const handleChange = (e) => {
    setDesabled(e.empty);
    setError(e.error ? e.error.message : "");
  }

  return (
    <div className='payment__margin'>
    <div className='display-2 text-center my-5 carousel__carousel'>Checkout <span className='text-dark'>({basket?.length} items)</span></div>
    { (basket?.length !== 0) ?
    <div className='bg-white'>
    <div className="delivery__section">
        <div className="row">
            <div className="col-12 col-md-3 p-5">
                <h3>Delivery Address</h3>
            </div>
            <div className="col-12 col-md-9 py-3">
                <h2>{user?.email}<br/>GDB C-340, NIT Rourkela<br/>Rourkela, Odisha, India</h2>
            </div>
        </div>
    </div>
    <hr/>
    <div className="reviewItems__section">
    <div className="row">
            <div className="col-12 col-md-3 p-5">
                <h3>Review items and Delivery</h3>
            </div>
            <div className="col-12 col-md-9 py-3">
            {basket.map((data) => {
                return <CheckoutItem
                            key={data.id}
                            id={data.id}
                            title={data.title}
                            image={data.image}
                            price={data.price}
                            rating={data.rating}
                        />
            })}
            </div>
        </div>
    </div>
    <hr/>
    <div className="paymentMethod__section">
    <div className="row">
            <div className="col-12 col-md-3 p-5">
                <h3>Payment Method</h3>
            </div>
            <div className="col-12 col-md-4 py-5">
                <form onSubmit={handleSubmit}>
                    <CardElement onChange={handleChange}/>
                    <CurrencyFormat renderText={(tot) => (
                        <>
                            <h2 className='py-4'>Subtotal ({basket?.length} items): <strong>{tot}</strong></h2>
                        </>
                        )}
                            decimalScale={2}
                            value={tot}
                            displayType={"text"}
                            thousandSeparator={true}
                            prefix={"$"}
                    />
                    <button disabled={desabled || succeeded || processing} onClick={handleSubmit} className='btn' style={{width: "100%"}}>
                        {processing ? 'Processing' : 'Buy Now'}
                    </button>
                </form>
            </div>
            <div className="col-12 col-md-5 p-5 d-flex justify-content-center align-items-center">
                        {error && <h2 style={{color: "#0000008c"}}>{error}</h2>}
            </div>
        </div>
    </div>
    </div> : <div className='display-6 text-center p-5 bg-white'>
    <div className='display-3'>You do not have any itmes</div><Link className='text-center' to='/'>Click here to purchase</Link></div>
     }
    </div>
  )
}

export default Payment;