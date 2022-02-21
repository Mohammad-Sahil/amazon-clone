import React from 'react';
import './home.css';
import CheckoutItem from './CheckoutItem';
import Subtotal from './Subtotal';
import { useStateValue } from './StateProvider';

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
            {basket.map((data) => {
                return <CheckoutItem
                            id={data.id}
                            title={data.title}
                            image={data.image}
                            price={data.price}
                            rating={data.rating}
                        />
            })}
             {/* <CheckoutItem/> <CheckoutItem/> */}
           
		</div>
  )
}

export default Checkout