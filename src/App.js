import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Header from "./header/Header";
import Home from "./home/Home";
import Checkout from "./checkout/Checkout";

import './App.css';
function App() {
  return (
    <Router>
      <div className="App">
        <Header/>

        <Switch>
          <Route path = "/checkout">
            <Checkout/>
          </Route>
          <Route path = "/">
            <Home/>
          </Route>
        </Switch>
      </div>
    </Router>
    
  );
}

export default App;