import React from 'react';
import moment from 'moment';
import CheckoutItem from './CheckoutItem';
import CurrencyFormat from 'react-currency-format';

function Order({ order }) {
  return (
    <div>
    <div className="row history__section mt-5 bg-white mx-auto">
        <div className="col-11 col-md-10 mx-auto">
            <div className="row px-3 py-5 mx-auto">
            <div className="col-12 col-md-6 mx-auto">
                <h1><strong>Order</strong></h1>
                <span>{moment.unix(order.data.created).format("MMMM Do YYYY, h:mma")}</span>
            </div>
            <div className="col-12 col-md-6 d-flex justify-content-end">
                <span className='mt-5'>Order ID: {order.id}</span>
            </div>
            </div>
            <div className="row px-3 py-5 mx-auto">
            {order.data.basket?.map(item => (
                        <CheckoutItem
                            key={item.id}
                            id={item.id}
                            title={item.title}
                            image={item.image}
                            price={item.price}
                            rating={item.rating}
                            hideButton
                            noHover
                        />
            ))}
            <CurrencyFormat renderText={(value) => (
                <>
                    <h3 style={{textAlign: "right"}} className='py-3'> <strong>Order Total: {value}</strong></h3>
                </>
                )}
                    decimalScale={2}
                    value={order.data.amount / 100}
                    displayType={"text"}
                    thousandSeparator={true}
                    prefix={"₹"}
            />
            </div>
        </div>
    </div>
    </div>
  )
}

export default Order