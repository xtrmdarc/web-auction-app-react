import React from 'react';
import {Link} from 'react-router-dom';

const Header = (props) => {
  const {userId, username, logoutUser} = props;

  return (
    <header className="Header">
      <Link to="/" className="logo"><h3> Antique Seller</h3></Link>
      <nav className="navigation">
        <ul className="navigationLinks">
          <li><Link to="/">Home</Link></li>
          <li>Contact us</li>
          <li>About us</li>
        </ul>
      </nav>
      <div className="userActions">
        <span className="username">{username}</span>
        <Link to={`/user/${userId}`} className="config">Configuration</Link>
        <button onClick={logoutUser} className="logout"> Logout </button>
      </div>
    </header>
  );
}

export default Header;
