import React, { useState } from 'react';
import '../../assets/styles/login.scss';
import api from '../../services/api';
import AsyncButton from '../Util/AsyncButton';

const Login = (props) => {

  const [username, setUsername] = useState('');
  const [error, setError] = useState('');
  const {loginUser} = props;

  const handleLoginButtonClick = async () => {
    setError('');
    if(!username) {
      setError("Username can't be empty");
      return;
    }
    await api.login(username)
      .then(user => {
        loginUser(user);
      }).catch(error => {
        setError(error.message);
      });
  }

  return (
    <div className="Login">
      <h1>Antique Seller</h1>
      <div className="contentWrapper">
        <h3>Login to your account</h3>
        <label htmlFor="username">Username </label>
        <input id="username" type="text" value={username} onChange={e => setUsername(e.target.value)} />
        {error && <span className="errorMessage">{error}</span>}
        <AsyncButton handleClick={handleLoginButtonClick} title="Login"/>
        <button >Login</button>
      </div>
    </div>
  );
}

export default Login;
