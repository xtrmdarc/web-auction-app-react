import React from 'react';
import Home from './Home';
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
        <Route to="/">
          <Header />
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
