import React, { useState } from 'react';
import '../../assets/styles/login.scss';
import api from '../../services/api';

const Login = (props) => {

  const [username, setUsername] = useState('');
  const [error, setError] = useState('');
  const {loginUser} = props;

  const handleLoginButtonClick = () => {
    if(!username) setError("Username can't be empty");
    api.login(username)
      .then(user => {
        loginUser(user);
      });
  }

  return (
    <div className="Login">
      <h1>Antique Seller</h1>
      <div className="contentWrapper">
        <h3>Login to your account</h3>
        <label htmlFor="username">Username </label>
        <input id="username" type="text" value={username} onChange={e => setUsername(e.target.value)} />
        <button onClick={handleLoginButtonClick}>Login</button>
      </div>
    </div>
  );
}

export default Login;
