import React from 'react';
import './home.css';
import { useStateValue } from './StateProvider';

function Card({id, title, image, price, rating, responsive}) {
    
    const [{ basket }, dispatch] = useStateValue();
    // console.log('this is the basket >>>:', basket);

    const addToBasket = () => {
        // dispatch the item into the data lyer
        dispatch({
            type: "ADD_TO_BASKET",
            item: {
                id: id,
                title: title,
                image: image,
                price: price,
                rating: rating,
            },
        });
    };
  return (
        <div className={responsive}>
            <div className='Cards__main p-3 px-5 bg-white'>
                <h2 className="title m-0">{title}</h2>
                <h2 className="price m-0">₹<span className='font-weight-bold'>{price}</span></h2>
                <h5 className="stars d-flex">{Array(rating).fill().map((_, i) => {
                    return <p key={i}>⭐</p>
                })}</h5>
                <div className='mx-auto d-flex justify-content-center'><img src={image} className="img-thumbnail my-3 card__image" alt={title} /></div>
                <div className='mx-auto d-flex justify-content-center my-1'>
                <button className='btn' onClick={addToBasket}>Add To Basket</button></div>
            </div>
        </div> 
  )
}

export default Card