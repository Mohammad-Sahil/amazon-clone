import './App.css';
import React, { useEffect } from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Header from './Header';
import {Route, Routes} from 'react-router-dom';
import Checkout from './Checkout';
import Home from './Home';
import Footer from './Footer';
import Login from './Login';
import { auth } from './firebase';
import { useStateValue } from './StateProvider';
import Payment from './Payment';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import Orders from './Orders.jsx';

const promise = loadStripe("pk_test_51KVdbnSJ9nQV1COOG8adFPJIcInYyhBnPGnJparJPSlWtXOM6107tEYz6GgEoQHKqTPeRyPlqUu9Gp1rr3NCm12m00BqE4kSCR");

function App() {
  const [{ basket }, dispatch] = useStateValue();
  useEffect(() => {
    auth.onAuthStateChanged(authUser => {
      console.log('THE USER IS >>>', authUser);

      if(authUser){
        // the user just loggedin
        dispatch({
          type: 'SET_USER',
          user: authUser
        })
      }else{
        // userr loggedout
        dispatch({
          type: 'SET_USER',
          user: null
        })
      }
    })
  },[])

  return (
   <div>
     <Header/>
     <Routes>
      <Route exact="true" path='/' element={<Home/>}/>
      <Route exact="true" path='/payment' element={
        <Elements stripe={promise}>
           <Payment/>
        </Elements>
      }/>
      <Route path='*' element={<Home/>}/>
      <Route exact="true" path='/checkout' element={<Checkout/>}/>
      <Route exact="true" path='/orders' element={<Orders/>}/>
      <Route exact="true" path='/login' element={<Login/>}/>
     </Routes>
     <Footer/>
   </div>

  );
}

export default App;
