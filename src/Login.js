import React, { useState } from 'react'
import './login.css'
import {Link, useHistory} from 'react-router-dom';
import { auth } from "./firebase";

function Login() {
    const history = useHistory();
    const [email, setEmail]=useState('');
    const [password, setPassword]=useState('')

    const signIn = e =>{
        e.preventDefault();
        //some firebase login 
        auth.signInWithEmailAndPassword(email, password).then(auth => {
            history.push('/')
        })
       .catch(error => alert(error.message))
    }
 const register = e =>{
      e.preventDefault();


      auth.createUserWithEmailAndPassword(email,password).then((auth) =>
      { //it successfully created a new user
          console.log(auth);
          if(auth)
          {
              history.push('/')
          }

      })
      .catch( error => alert(error.message))
       }
    return (
        <div className='login'>
            <Link to='/'>
            <img className="login__logo" src="amazon_login_logo.png" />
            </Link>

         <div className='login__container'>
             <h1>Sign-in</h1>
             <form>
                 <h5>E-mail</h5>
                 <input type='text' value={email} onChange={e => setEmail(e.target.value)} />
                 <h5>Password</h5>
                 <input type='password' value={password} onChange={e => setPassword(e.target.value)}/>

                 <button type='submit' onClick={signIn}
                 className="login__signInButton">Sign In</button>
             </form>
             <p> By signing-in you agree to Amazon's Clone
                 Conditions of Use & Sale. Please see our Privacy
                  Notice, our Cookies Notice and our Interest-Based Ads
             </p>
             <button onClick={register} className="login__registerButton">Create your Aamzon account</button>
         </div>



        </div>
    )
}

export default Login
