import { LOGO_URL } from '../utils/constants';
import { useState } from 'react';

const Header = () => {
  const [loginVar, setLoginVar] = useState('Login');

  // const ChangeLoginVar = () => {
  //   if (loginVar == 'Login') {
  //     setLoginVar('Logout');
  //   } else {
  //     setLoginVar('Login');
  //   }
  // };

  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={LOGO_URL} alt="logo" />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
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
