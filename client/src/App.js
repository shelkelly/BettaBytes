import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Detail from "./pages/Detail";
import NoMatch from "./pages/NoMatch";
import NavigationBar from "./components/NavigationBar";
import { StoreProvider } from "./utils/GlobalState";
import FavoritesList from "./pages/FavoritesList";
import NavBar from "./components/NavBar";
import BettaBlog from "./pages/BettaBlog";
import ForSale from "./pages/ForSale";

function App() {
  return (
    <Router>
      <div>
        <StoreProvider>
          <NavBar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/Home" component={Home} />
            <Route exact path="/ForSale" component={ForSale} />
            <Route exact path="/Favorites" component={FavoritesList} />
            <Route exact path="/BettaBlog" component={BettaBlog} />
            <Route component={NoMatch} />
          </Switch>
        </StoreProvider>
      </div>
    </Router>
  );
}

export default App;