import React from 'react';
import './Privacy.css';
import earth from '../images/earth.png';
import Footer from '../components/Footer';

const Privacy = (props) => {
  return (
    <div>
      <div className='privacy-policy'>
      <h1 className='h2'>PRIVACY POLICY</h1>
        <div className='content88'>
          <span className='textp'>
            <span>1. COLLECTION AND TRACKING OF PERSONAL INFORMATION</span>
            <br></br>
            <br></br>
            <span>
              - So that we can provide you with the most efficient and enhanced
              service, we may request information about you. We may also collect
              personally identifiable information such as name, email addresses
              and demographic information. We also may collect your IP address,
              browser type, domain name, access times and referring Web site
              address.
            </span>
            <br></br>
            <span>
              - There are links to third party sites on our website. This Privacy
              Policy does not apply to information users consent to give to
              third parties not affiliated with Path2USA. Any information users
              give to another party is governed by the rules of that party's
              privacy policy, which may differ from this Privacy Policy.
              Path2USA is not responsible for information given to other
              parties.
            </span>
          </span>
         {/* <br></br>
         <br></br> */}
          <span className='textpp'>
            <br></br>
            <br></br>
            <span>2. WHAT TYPE OF PERSONAL INFORMATION DO WE COLLECT ?</span>
            <br></br>
            <br></br>
            <span>

             - When you create a profile on TravelCompanion, you must provide us with some of your personal information. TravelCompanion is a social travel platform where you can find friends, learn about new destinations, share your travel experience with others and just be part of a travel community. Processing personal information is necessary for TravelCompanion to be a functional website since user accounts are essential part of this travel community and since some TravelCompanion features such as our email notifications really help you make the most out of the platform. We also need your personal information to manage your account and preferences and to protect the website against misuse.
            </span>
            <br></br>
            <br></br>
            <span>
             - Your email address is confidential. We do not share your email address with other users of TravelCompanion.
            </span>
            <br></br>
            <br></br>
            <span>
             - We will use your email to contact you, notify you of changes to the website or services we offer, and send you offers related to the service.
              For the better functionality of TravelCompanion, you need to upload your profile picture to access all the functions of the website.
            </span>
            <br></br>
            <br></br>
            <span>
             - You may disclose more information about yourself in your profile, comments and other places on the website once you are registered. Do not disclose any sensitive information about yourself or any other information you do not feel comfortable being public. You should also not upload any pictures which you do not want to be public.

            </span>
          </span>

          <div />
          <div className='earth'>
            <img src={earth} alt="error!!!" className='earth12'
            />
          </div>
        </div>
      </div>
      <Footer/>
    </div>


  )
};

export default Privacy;
