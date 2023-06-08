import React from 'react';
import "./Events.css";

const EventsData = (props) => {
  return (
    <div className='t-card'>
      <div className='t-image'>
        <img src={props.trips} alt="image1" />
      </div>
      <h4>{props.heading}</h4>
      <p>{props.text}</p>
    </div>
  );
};

export default EventsData;