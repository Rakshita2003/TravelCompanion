import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';

function HeroSection() {
  return (
    <div className='hero-container'>
     <span className="text01">
          <span>Find your Traveling Buddy here !!</span>
        </span>
        <span className="text02">
          <span>Planning a trip? Want someone to share the journey with?</span>
          <br></br>
          <span>Your travel companion is just a click away.</span>
          <br></br>
        </span> 


      <div className='hero-btns'>
        <Button className='btns' buttonStyle='btn--outline' buttonSize='btn--large'>
          Join Now
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;