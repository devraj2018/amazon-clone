import React ,{useEffect}from 'react';
import './App.css';
import Header from './Header'
import Checkout from './Checkout';
import Home from './Home'
import Login from './Login';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { auth } from './firebase';
import { useStateValue } from './StateProvider';
import Payment from "./Payment";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import Orders from './Orders';

const promise =loadStripe(
   "pk_test_51Jl81LSDLSdcmkHoQAYj7CtnYSPwOZPaZMDejg6Mjy45lJiIbyiuoMX24XlIhoB7wvQBcDWsx3Hz22blZTMvqUd900Y4aixN50"
);


function App() {
   
    const [ {}, dispatch]=useStateValue();

   useEffect(() => {
     //will run only once when the app components loads....

     auth.onAuthStateChanged(authUser => {
        console.log('The USER IS >>>', authUser);
        if(authUser)
        {
           //The user just logged in/ The user was logge in

            dispatch({
               type: 'SET_USER',
               user: authUser
             })


        }
        else{
           //the user is logged out
            dispatch({
               type: 'SET_USER',
               user: null,
             });
        }
     });
   }, []);

  return (
    <Router>
       <div className="app">
          <Switch>
             <Route path='/orders'>
                <Header />
                <Orders />
                </Route>
             <Route path='/login'>
                <Login />
                </Route>
            <Route path="/checkout">
                <Header />
               <Checkout />
            </Route>
             <Route path="/payment">
            <Header />
            <Elements stripe={promise}>
              <Payment />
            </Elements>
          </Route>
            <Route path="/">     {/*Default root always in bottom*/}
               <Header />
               <Home />
            </Route>
          </Switch>
       </div>
    </Router>
  );
}

export default App;
