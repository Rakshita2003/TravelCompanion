import React,{useState,useEffect} from 'react';
import {NavLink} from 'react-router-dom';
import './Navbar.css';
import {Button} from './Button';
import logo from '../images/logo.png';

function Navbar() {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const showButton = () => {
        if (window.innerWidth <= 960) {
            setButton(false);
        } else{
            setButton(true);
        }
    };

    useEffect(() => {
        showButton();
      }, []);
    
      window.addEventListener('resize', showButton);
  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
            <img alt="logo" src= {logo} className="logo"/> <i class='fab fa-typo3' />

            <div className='menu-icon' onClick={handleClick}>
                <i className={click ? 'fas fa-times': 'fas fa-bars'} />
            </div>
            <ul className={click ? 'nav-menu active': 'nav-menu'}>
                <li className='nav-item'>
                    <NavLink to='/' className='nav-links' onClick={closeMobileMenu}>
                        Home
                    </NavLink>
                </li>
                <li className='nav-item'>
                    <NavLink to='/about' className='nav-links' onClick={closeMobileMenu}>
                        About
                    </NavLink>
                </li>
                <li className='nav-item'>
                    <NavLink to='/services' className='nav-links' onClick={closeMobileMenu}>
                        Services
                    </NavLink>
                </li>
                <li className='nav-item'>
                    <NavLink to='/events' className='nav-links' onClick={closeMobileMenu}>
                        Events
                    </NavLink>
                </li>
                <li className='nav-item'>
                    <NavLink to='/reviews' className='nav-links' onClick={closeMobileMenu}>
                        Reviews
                    </NavLink>
                </li>
                <li className='nav-item'>
                    <NavLink to='/contact' className='nav-links' onClick={closeMobileMenu}>
                        Contact
                    </NavLink>
                </li>
                <li className='nav-item'>
                    <NavLink to='/sign-in' className='nav-links-mobile' onClick={closeMobileMenu}>
                        Sign In
                    </NavLink>
                </li>
            </ul>
            {button && <Button buttonStyle='btn--outline'>SIGN IN</Button>}
        </div>
      </nav>
    </>
  );
}

export default Navbar;