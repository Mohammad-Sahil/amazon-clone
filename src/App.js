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
      <Route exact="true" path='/checkout' element={<Checkout/>}/>
      <Route exact="true" path='/login' element={<Login/>}/>
     </Routes>
     <Footer/>
   </div>

  );
}

export default App;
