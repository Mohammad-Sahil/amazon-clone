import React, { useEffect, useState } from 'react';
import { db } from './firebase';
import './home.css';
import { useStateValue } from './StateProvider';
import Order from './Order';

function Orders() {
    const [{ user }, dispatch] = useStateValue();
    const [orders, setOrders] = useState([]);
    useEffect(() => {
        if(user){
            db.collection('users').doc(user?.uid).collection('orders').orderBy('created', 'desc').onSnapshot((snapShot) => (
                setOrders(snapShot.docs.map((doc) => ({
                    id: doc.id,
                    data: doc.data()
                })))
            ))
        }else{
            setOrders([]);
        }
    }, [user])
  return (
    <div className='carousel__carousel container p-5'>
    <div className='display-3 my-5'><strong>Your Orders</strong></div>
    {user ? <>
        {orders?.map(order => (
            <Order
                key={order.id}
                order={order}
            />
        ))}
    </> : <div className='bg-white py-5'>
        <h1 className='text-center display-2 p-5'>Sorry ! You are not loggedIn</h1>
    </div>}
    
       
    </div>
  )
}

export default Orders