import React from 'react';
import './App.css';
import Header from './Header'
import Checkout from './Checkout';
import Home from './Home'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
// import {useStateValue} from "./StateProvider"


function App() {
   //   const [{}, dispatch]=useStateValue();
  return (
    <Router>
       <div className="app">
         <Header />
          <Switch>
             <Route path='/login'>
                </Route>
            <Route path="/checkout">
               <Checkout />
            </Route>
            <Route path="/">     {/*Default root always in bottom*/}
               <Home />
            </Route>
          </Switch>
       </div>
    </Router>
  );
}

export default App;
