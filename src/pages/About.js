import React from 'react';
import '../App.css';
import './About.css';
import shape from '../images/shape.png';
import rectangle from '../images/rectangle.png';
import buddy from '../images/buddy.jpg';
import support from '../images/support.png';
import fees from '../images/fees.png';
const About = (props) => {
  return (
    <div>
      <div className="content">
        <img src={shape} alt="shape" className="shape" />
        <img src={rectangle} alt="rectangle" className="rectangle" />
        <div className="content-logo">
          <img src={buddy} alt="buddy" className="buddy"/>
          <img src={support} alt="support" className="support"/>
          <img src={fees} alt="fees" className="fees"/>
        </div>
        <div className="content-data">
          <div className="text1">
            <span className="text2">
              <span className="text3">
                <span>No hidden fees</span>
                <br></br>
                <span></span>
              </span>
              <span className="text4">
                <span></span>
                <br></br>
                <span></span>
              </span>
              <span>
                <span></span>
                <br></br>
                <span>Our membership fees are simple with no hidden costs</span>
              </span>
            </span>
          </div>
          <div className="text5">
            <span className="text6">
              <span className="text7">
                <span>Dedicated 24-hour support</span>
                <br></br>
                <span></span>
              </span>
              <span className="text8">
                <span></span>
                <br></br>
                <span></span>
              </span>
              <span>Our team is available 24/7 for your help</span>
            </span>
          </div>
          <div className="text9">
            <span className="text10">
              <span className="text11">
                <span>Connect with other travelers</span>
                <br></br>
                <span></span>
              </span>
              <span className="text12">
                <span></span>
                <br></br>
                <span></span>
              </span>
              <span>
                Find a travel buddy to join you on your travel adventures
              </span>
            </span>
          </div>
        </div>
        <span className="text0013">
          <span>
            TravelCompanion is the right place if you find yourself in need of
            finding a travel partner. You can browse travelers and detailed
            trips until you find the perfect match for traveling.
          </span>
          <br></br>
          <span>
            No matter how you image your perfect travel buddy, you can always
            find someone to team up with on TravelCompanion. We try to make the
            experience of finding a travel buddy as easy as possible so you can
            start traveling together in no time!
          </span>
          <br></br>
          <span>
            New travel-mates added daily. Lots of opportunities to find exactly
            the right travel buddy for you.
            <span dangerouslySetInnerHTML={{__html: ' ',}}/>
          </span>
        </span>
      </div>
    </div>
  )
}

export default About