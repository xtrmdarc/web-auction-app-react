import React from 'react';
import Home from './Home';
import ItemDetail from './ItemDetail';
import '../assets/styles/app.scss';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import Header from './Util/Header';

const App = () => {
  return(
    <Router>
      <Switch>
        <Route exact path="/items/:itemId">
          <Header />
          <ItemDetail />
        </Route>
        <Route exact path="/">
          <Header />
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
