import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./page/Home";
import LeaguesDetails from "./page/LeaguesDetails";
import NotFound from "./page/NotFound";

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/leagues/:id/:name">
            <LeaguesDetails />
          </Route>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
