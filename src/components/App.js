import React from 'react'
import Home from './Home';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';

const App = () => {
  return(
    <Router>
      <Switch>
        <Route to="/">
          <Home />
        </Route>
        

      </Switch>
    </Router>
  );
}

export default App;
