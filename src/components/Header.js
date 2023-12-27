import { Link } from 'react-router-dom';
import { LOGO_URL } from '../utils/constants';
import { useState, useEffect } from 'react';
import useOnlineStatus from '../utils/useOnlineStatus';

const Header = () => {
  const [loginVar, setLoginVar] = useState('Login');
  useEffect(() => {
    console.log('useEffect Called from header!!');
  }, [loginVar]);

  console.log('header render');
  let color = 'green';
  const isOnline = useOnlineStatus();

  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={LOGO_URL} alt="logo" />
      </div>
      <div className="nav-items">
        <ul>
          <li>Online Status: {isOnline ? '✅' : '🔴'}</li>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About Us</Link>
          </li>
          <li>
            <Link to="/contact">Contact Us</Link>
          </li>
          <li>
            <Link to="/cart">Cart</Link>
          </li>
          <li>
            <Link to="/grocery">Grocery</Link>
          </li>
          <button
            className="login"
            onClick={() => {
              loginVar == 'Login'
                ? setLoginVar('Logout')
                : setLoginVar('Login');
            }}
          >
            {loginVar}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
