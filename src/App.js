import React, { useEffect } from "react";
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import { auth } from "./firebase";
import { useStateValue } from "./StateProvider";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

import Header from "./header/Header";
import Home from "./home/Home";
import Checkout from "./checkout/Checkout";
import Login from "./login/Login";
import Payment from "./payment/Payment"
import Orders from "./orders/Orders";

import './App.css';

const promise = loadStripe("pk_test_51JDYtfKqnMlZGNbTMvf13QPlt4srphM9pGqmQ1ubVe6MynAYuOpToylrWrkqWOjSI0KHcysh3IjK3ud5j0t1bSWV00Fs7mRp1h")

function App() {

  const [{}, dispatch] = useStateValue();

  useEffect(() => {
    
    auth.onAuthStateChanged(authUser => {
      console.log("THE USER IS >>>", authUser);

      if(authUser) {

        dispatch({
          type: "SET_USER",
          user: authUser
        })
      } else {
        dispatch({
          type: "SET_USER",
          user: null
        })
      }
    })
  }, [])

  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path = "/login">
            <Login/>
          </Route>
          <Route path = "/checkout">
            <Header/>
            <Checkout/>
          </Route>
          <Route path ="/payment">
            <Header/>
            <Elements stripe = {promise}>
              <Payment/>
            </Elements>
          </Route>
          <Route path = "/orders">
            <Header/>
            <Orders/>
          </Route>
          <Route path = "/">
            <Header/>
            <Home/>
          </Route>
        </Switch>
      </div>
    </Router>
    
  );
}

export default App;