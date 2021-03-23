import * as React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { PersistGate } from "redux-persist/integration/react";

import Home from "./views/Home";
function App() {
  return (
    <div className="App">
      <Router>
        <Route path="/">
          <Home></Home>
        </Route>
      </Router>
    </div>
  );
}

export default App;
