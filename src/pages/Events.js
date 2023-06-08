import React from 'react';
import "./Events.css";
import EventsData from './EventsData';
import Trip1 from "../images/5.jpg";
import Trip2 from "../images/8.jpg";
import Trip3 from "../images/6.jpg";


const Events = () => {
  return (
    <div>
      <div className='trip'>
        <h1>Upcoming Trips</h1>
        <p>You can discover your unique destinations here.
        </p>
        <div className='tripcard'>
          <EventsData
            trips={Trip1}
            heading="Trip in Indonesia"
            text="Indonesia, officially the Republic of Indonesia, is a counrty in Southeast Asia and Oceania between the Indian and Pacific Oceans. It consists of over 17,000 islands, includig sumatra,java,sulawesi and parts of Borneo and New Guiea." />


          <EventsData
           trips={Trip2}
            heading="Trip in Malaysia"
            text="Malaysia is a Southeast Asian Country occupying parts of the Malay Peninsula and the islands of Bornea. It's known for its beaches, rainforests and mix of Malay, Chinese, Indian and European cultural influences." />


          <EventsData
            trips={Trip3}
            heading="Trip in France"
            text="France in western Europe, encompasses medieval cities, alpine villages and Meditterean beaches." />
        </div>
      </div>
      <hr />
      <div className='trip'>
        <h1>Past Trips</h1>
        <p>You can discover your unique destinations here.
        </p>
        <div className='tripcard'>
          <EventsData
            trips={Trip1}
            heading="Trip in Indonesia"
            text="Indonesia, officially the Republic of Indonesia, is a counrty in Southeast Asia and Oceania between the Indian and Pacific Oceans. It consists of over 17,000 islands, includig sumatra,java,sulawesi and parts of Borneo and New Guiea." />


          <EventsData
            trips={Trip2}
            heading="Trip in Malaysia"
            text="Malaysia is a Southeast Asian Country occupying parts of the Malay Peninsula and the islands of Bornea. It's known for its beaches, rainforests and mix of Malay, Chinese, Indian and European cultural influences." />


          <EventsData
           trips={Trip3}
            heading="Trip in France"
            text="France in western Europe, encompasses medieval cities, alpine villages and Meditterean beaches." />
        </div>
      </div>
    </div>
  );
}

export default Events;