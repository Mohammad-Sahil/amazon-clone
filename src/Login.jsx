import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { auth } from './firebase';
import './login.css';

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState(' ');
  const [password, setPassword] = useState('');

  const signIn = (e) => {
    e.preventDefault();

    auth
        .signInWithEmailAndPassword(email, password)
        .then((auth) => {
            navigate('/');
        }).catch((e) => alert(e.message));
  };
  const register = (e) => {
    e.preventDefault();

    auth
    .createUserWithEmailAndPassword(email, password)
    .then((auth) => {
      console.log(auth);
      if(auth){
        navigate('/');
      }
    })
    .catch((e) => alert(e.message));
  }
  return (
    <div className='carousel__carousel'>
    <div>

      <div className="d-flex flex-row justify-content-center">
        <div className="row">
          <div className="col-md">
            <img className="img_1 mt-5 mb-3" src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/905px-Amazon_logo.svg.png" alt="Amazon Logo"/>
          </div>
        </div>
      </div>

   </div>     
     
      

      <div className="d-flex flex-row justify-content-center">
        <div className="row">
          <div className="col-md">
           <div className='form__login'>
             <div className="sign-in text-center my-3">Sign In</div>   
  <form onSubmit={signIn}>       
  <div className="form-group">
    <label className='my-1 mt-3' id="words_1" htmlFor="exampleInputEmail1">Email(phone for mobile accounts)</label>
    <input onChange={(e) => setEmail(e.target.value)} value={email} type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" required/>
    <small id="emailHelp" className="form-text text-muted"></small>
  </div>
  <div className="form-group">
  <label className='my-1 mt-3' id="words_1" htmlFor="exampleInputEmail1">Password</label>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 
  <label className='aaaa' id="words_2" htmlFor="exampleInputPassword1">Password  Forgot your password? </label>
    <input onChange={(e) => setPassword(e.target.value)} value={password} type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" required/>
    <div className="form-group">
      <button onClick={signIn} type="submit" className="btn btn-warning" id="sign-in">Sign In</button>
      </div>
      </div>
    </form>
    <div className='d-flex'>
       <input type="checkbox" className="form-check-input checkbox" id="exampleCheck1" defaultChecked/>
      <p className="keep-sign-in">Keep me signed in.</p>
    </div>
    
  <button onClick={register} type="button" style={{background: "#d3d3d3"}} className="btn btn-warning" id="grey-button">Create your Amazon account</button>
  
</div> 
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login