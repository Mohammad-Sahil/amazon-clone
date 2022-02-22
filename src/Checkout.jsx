import React from 'react';
import FlipMove from 'react-flip-move';
import './home.css';
import CheckoutItem from './CheckoutItem';
import Subtotal from './Subtotal';
import { useStateValue } from './StateProvider';
import { Link } from 'react-router-dom';


function Checkout() {
    const [{ basket, user }, dispatch] = useStateValue();
    

  return (
    <div className='checkout carousel__carousel container-fluid mt-4'>
			<div className="row container-fluid p-0">
                <div className="col-12 col-md-9 p-0">
                    <img src='https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg' alt='banner'/>
                </div>
                <div className="col-12 col-md-3">
                <Subtotal/>
                </div>
            </div>
            <div className="row">
            <h1 className='checkout-title'><strong>Hey, {user ? user.email : null}
            {/* {user?.email} */}
            </strong></h1>
					<h2 className='checkout_title' style={{marginLeft: "10px"}}>
						Your shopping basket
					</h2> <hr/>
            </div>
            {/* <FlipMove
              duration={750}     
         easing="ease-out"
         enterAnimation = "accordianVertical"
         leaveAnimation = "accordianVertical"
            > */}
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
            {/* </FlipMove> */}
             {/* <CheckoutItem/> <CheckoutItem/> */}
            <div className='mt-5'>{(basket?.length !== 0) ? null : <div className='display-6 text-center p-5 bg-white'>
    <div className='display-3'>Your Cart will be listed here !</div><Link className='text-center' to='/'>Click here to purchase</Link></div>}</div>

           
		</div>
  )
}

export default Checkout