import "./App.css";
import Header from "./Header.js";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import End from "./End.js";

import Clock from "./Clock.js";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          

          <Route path="/:end">
          <Header />
            <End />
          </Route>
          <Route path="/">
            <Header />
            <Clock />
          </Route>
        </Switch>
        
        <Link to="/end">
          
        <button id="butto" type="button" class="btn btn-primary">End Session</button>
        </Link>
      </Router>
    </div>
  );
}

export default App;
