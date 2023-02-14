import { useState } from 'react';
import { Link } from 'react-router-dom';
import useIsOnline from '../utils/useIsOnline';
import { logo } from '../config';

const Title = () => {
  return (
    <>
      <img
        src={logo}
        alt='logo'
        className='h-24 p-2'
      />
    </>
  );
};

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const isOnline = useIsOnline();

  return (
    <div className='flex justify-between bg-pink-50 shadow-lg'>
      <Title />
      <div>
        <ul className='flex py-10'>
          <li className='px-2'>
            {' '}
            <Link to='/'>Home</Link>
          </li>
          <li className='px-2'>
            <Link to='/about'>About</Link>
          </li>
          <li className='px-2'>
            <Link to='/contact'>Contact</Link>
          </li>
          <li className='px-2'>Cart</li>
          <li className='px-2'>
            <Link to='/instamart'>Instamart</Link>
          </li>
        </ul>
      </div>
      {isOnline ? 'Online' : 'Offline'}
      {isLoggedIn ? (
        <button onClick={() => setIsLoggedIn(false)}>Logout</button>
      ) : (
        <button onClick={() => setIsLoggedIn(true)}>Login</button>
      )}
    </div>
  );
};

export default Header;
