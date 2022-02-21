import React from 'react';
import { useStateValue } from './StateProvider';

function CheckoutItem({id,title,price,image,rating}) {
    const [{ basket }, dispatch] = useStateValue();
    const removeFromBasket = () => {
        dispatch({
            type: 'REMOVE_FROM_BASKET',
            id: id,
        })
    }
  return (
    <div className='row'>
        <div className="checkoutProduct row bg-white px-5 py-3 d-flex align-items-center">
        <div className="col-12 col-md-3">
             <img className="checkoutProduct_image img-thumbnail" src={image} alt={title}/>
        </div>
            <div className="checkoutProduct_info col-12 col-md-9" style={{paddingLeft: "30px"}}>
                <h4 className="checkoutProduct_title">{title}</h4>
                    <h5 className="checkoutProduct_price">
                        <small>$</small><strong>{price}</strong>
                    </h5>
                <div className="checkoutProduct_rating d-flex">
                    <p className='d-flex'>{Array(rating).fill().map((_, i) => {
                    return <p key={i}>⭐</p>
                })}</p>
                </div>
                    <button className='btn' onClick={removeFromBasket}>Remove from basket</button>
            </div>
        </div>
    </div>
  )
}

export default CheckoutItem;