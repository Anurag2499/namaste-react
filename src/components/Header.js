import { Link } from 'react-router-dom';
import { LOGO_URL } from '../utils/constants';
import { useState, useEffect, useContext } from 'react';
import useOnlineStatus from '../utils/useOnlineStatus';
import { UserContext } from '../utils/UserContext';
// import UserContext from '../utils/UserContext';

const Header = () => {
  const [loginVar, setLoginVar] = useState('Login');
  useEffect(() => {
    console.log('useEffect Called from header!!');
  }, [loginVar]);

  console.log('header render');
  let color = 'green';
  const isOnline = useOnlineStatus();

  // this is basically the object from useContext.
  const userData = useContext(UserContext);
  console.log(userData);

  return (
    <div className="flex justify-between shadow-lg p-3 m-2 rounded-lg border bg-[#f0f0f0]">
      <div className="w-40">
        <img className="logo" src={LOGO_URL} alt="logo" />
      </div>
      <div className="flex items-center">
        <ul className="flex text-xl p-4 m-4  ">
          <li className="px-4">Online Status: {isOnline ? '✅' : '🔴'}</li>
          <li className="px-4 dark:md:hover:bg-gray-200  rounded-3xl pb-1">
            <Link to="/">Home</Link>
          </li>
          <li className="px-4 dark:md:hover:bg-gray-200  rounded-3xl pb-1">
            <Link to="/about">About Us</Link>
          </li>
          <li className="px-4 dark:md:hover:bg-gray-200  rounded-3xl pb-1">
            <Link to="/contact">Contact Us</Link>
          </li>
          <li className="px-4 dark:md:hover:bg-gray-200  rounded-3xl pb-1">
            <Link to="/cart">Cart</Link>
          </li>
          <li className="px-4 dark:md:hover:bg-gray-200  rounded-3xl pb-1">
            <Link to="/grocery">Grocery</Link>
          </li>
          <button
            className="login px-4 dark:md:hover:bg-gray-200  rounded-3xl pb-1"
            onClick={() => {
              loginVar == 'Login'
                ? setLoginVar('Logout')
                : setLoginVar('Login');
            }}
          >
            {loginVar}
          </button>
          <li className="px-4 dark:md:hover:bg-gray-200  rounded-3xl pb-1">
            <Link to="/grocery">{userData.loggedInUser}</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
