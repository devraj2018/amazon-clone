import React from 'react';
import './App.css';
import Header from './Header'
import Checkout from './Checkout';
import Home from './Home'
import Login from './Login';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
// import {useStateValue} from "./StateProvider"


function App() {
   //   const [{}, dispatch]=useStateValue();
  return (
    <Router>
       <div className="app">
          <Switch>
             <Route path='/login'>
                <Login />
                </Route>
            <Route path="/checkout">
                <Header />
               <Checkout />
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
