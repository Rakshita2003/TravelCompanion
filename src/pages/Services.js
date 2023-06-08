import React from 'react';
import '../App.css';
import "./Services.css";
import { Link } from 'react-router-dom';

const Services = () => {
  return (
    <div className="services">
      <div className="need">
      <Link to={'/needcompanion'}>
        <button className='need-companion' >NEED COMPANION</button>
        </Link>
      </div>
      <div className="be">
      <Link to={'/bookcompanion'}>
        <button className='be-companion'>BE A COMPANION</button>
        </Link>
      </div>
      </div>
  );
};

export default Services;
