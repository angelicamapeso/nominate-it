import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { PendingProvider } from "./utils/PendingContext";
import Nav from "./components/Nav";
import Home from "./pages/Home";
import Nominations from "./pages/Nominations";

function App() {
  return (
    <Router>
      <Nav />
      <PendingProvider>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/nominations" component={Nominations} />
        </Switch>
      </PendingProvider>
    </Router>
  );
}

export default App;
