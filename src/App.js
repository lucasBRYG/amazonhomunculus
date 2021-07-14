import React, { useEffect } from "react";
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Header from "./header/Header";
import Home from "./home/Home";
import Checkout from "./checkout/Checkout";
import Login from "./login/Login";
import { auth } from "./firebase";
import { useStateValue } from "./StateProvider";

import './App.css';
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