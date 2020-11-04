import React from 'react';

const Header = () => {
  return (
    <header className="Header">
      <h3>Antique Seller</h3>
      <nav>
        <ul className="navigationLinks">
          <li>Home</li>
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
