import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Header from "./header/Header";
import Home from "./home/Home";
import Checkout from "./checkout/Checkout";
import Login from "./login/Login";

import './App.css';
function App() {
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