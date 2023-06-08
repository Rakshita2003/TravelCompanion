import React from 'react';
import '../App.css';
import "./Services.css";

const Services = () => {
  return (
    <div className="services">
      <div className="need">
        <a href="/needcompanion">
        <button className='need-companion' >NEED COMPANION</button>
        </a>
      </div>
      <div className="be">
      <a href="/bookcompanion">
        <button className='be-companion'>BE A COMPANION</button>
        </a>
      </div>
      </div>
  );
};

export default Services;
