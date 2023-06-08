import React from 'react';
import './Footer.css';
import { Button } from './Button';
import { NavLink } from 'react-router-dom';
import footlogo from '../images/logo.png';

function Footer() {
  return (
    <div className='footer-container'>
        <img alt="log" src= {footlogo} className="logos"/> 
      <section className='footer-subscription'>
        <p className='footer-subscription-heading'>
          Join the Adventure newsletter to receive our best vacation deals
        </p>
        <p className='footer-subscription-text'>
          You can unsubscribe at any time.
        </p>
        <div className='input-areas'>
          <form>
            <input className='footer-input' name='email' type='email' placeholder='Your Email'/>
            <Button buttonStyle='btn--outline'>Subscribe</Button>
          </form>
        </div>
      </section>
      <div class='footer-links'>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            <NavLink to='/sign-up'>How it works</NavLink>
            <NavLink to='/about'>About Us</NavLink>
            <NavLink to='/safety'>Safety</NavLink>
            <NavLink to='/privacy'>Privacy Policy</NavLink>
            <NavLink to='/terms'>Terms and Conditions</NavLink>
          </div>
        </div>
        </div>
    </div>
  );
}

export default Footer;