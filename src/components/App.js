import React from 'react';
import Home from './Home';
import ItemDetail from './ItemDetail';
import Configurattion from './Configuration';
import '../assets/styles/app.scss';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom';
import Header from './Util/Header';
import Login from './Login';
import {connect} from 'react-redux';
import { filterItems, loginUser, logoutUser } from '../actions';

const App = props => {

  const {user, loginUser, logoutUser} = props;

  return(
    <Router>
      <Switch>
        <Route exact path="/login">
          {user.loggedIn ? <Redirect to="/" /> : <Login loginUser={loginUser} />}
        </Route>
        {
          user.loggedIn ? (
          <>
            <Route exact path="/items/:itemId">
              <Header username={user.username} userId={user.id} logoutUser={logoutUser} />
              <ItemDetail />
            </Route>
            <Route exact path="/user/:userId">
              <Header username={user.username} userId={user.id} logoutUser={logoutUser}/>
              <Configurattion />
            </Route>
            <Route exact path="/">
              <Header username={user.username} userId={user.id} logoutUser={logoutUser}/>
              <Home />
            </Route>
          </>
          )
          :
          <Redirect to="/login" />
        }
        
      </Switch>
    </Router>
  );
}

const mapStateToProps = state => ({
  user: state.user,
});

const mapDispatchToProps = dispatch => ({
  loginUser: (user) => dispatch(loginUser(user)),
  logoutUser: () => {
    dispatch(filterItems(''));
    dispatch(logoutUser());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
