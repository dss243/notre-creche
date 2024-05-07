import React, { useState, useEffect, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Navbar.css';
import { AuthContext } from "../contexts/AuthContext/AuthContext";
import DropdownMenuabout from './DropdownMenuabout';

function Navbar() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleDropdownClick = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const closeDropdownMenu = () => {
    setIsDropdownOpen(false);
  };
  const navigate = useNavigate();
  const { dispatch, user } = useContext(AuthContext);

  const handleLogout = () => {
    localStorage.removeItem('user');
    dispatch({ type: "LOGOUT" });
    console.log("Logout successful");
    navigate("/");
  };

  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);
  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  useEffect(() => {
    const handleResize = () => {
      showButton();
    };
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const isLoggedIn = user !== null;

  return (
    <>
      <nav className='navbar  '>
        <div className='navbar-container'>
          <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
            <img src="Images/ilokethemost.png" alt="Logo" className='navbar-logo-img'/>
          </Link>
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                HOME
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                className='nav-links'
                onClick={handleDropdownClick}
              >
                About us
              </Link>
              
              <DropdownMenuabout isOpen={isDropdownOpen} closeMenu={closeDropdownMenu} />
            </li>
            { isLoggedIn && (
              <li className='nav-item'>
                <Link
                  to='/'
                  className='nav-links'
                  onClick={closeMobileMenu}
                >
                  espace parent
                </Link>
              </li>
            )}

            <li className='nav-item'>
              {isLoggedIn ? (
                <Link
                  to='/login'
                  className='nav-links'
                  onClick={handleLogout}
                >
                  Logout
                </Link>
              ) : (
                <Link
                  to='/login'
                  className='nav-links'
                  onClick={closeMobileMenu}
                >
                  Login
                </Link>
              )}
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;