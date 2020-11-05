import React from 'react';
import {Link} from 'react-router-dom';

const Header = () => {
  return (
    <header className="Header">
      <Link to="/" className="logo"><h3> Antique Seller</h3></Link>
      <nav>
        <ul className="navigationLinks">
          <li><Link to="/">Home</Link></li>
          <li>Contact us</li>
          <li>About us</li>
        </ul>
      </nav>
      <div className="userActions">
        <img alt="User configuration"/>
        {/* <button className="logoutButton">Logout</button> */}
      </div>
    </header>
  );
}

export default Header;
