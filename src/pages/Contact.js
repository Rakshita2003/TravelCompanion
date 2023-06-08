import React,{useState}  from 'react';
import '../App.css';
import pic from '../images/pic.png';

import './Contact.css';
import axios from 'axios';
function Contact (){
  const [values, setValues] = useState({
    contact_name: '',
    contact_email: '',
    contact_message: '',
  })
  const handleChange = (event) => {
    setValues({...values, [event.target.name]:[event.target.value]})
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    axios.post('http://localhost:8081/contact', values)
    .then(res => console.log("Sign Up Successfull!!"))
    .catch(err => console.log(err));
  }
    return (
      <form onSubmit={handleSubmit}>
        <div className="contact">
        <img src={pic} alt="hands" className='contact-pic'/>
        <div className='right-container'>
          <span className="contact-text">
            <span>We are here for you. How can we help ?</span>
          </span>
          <span className="contact-text02">
            <span>Get In Touch</span>
          </span>
          <div className='form-container'> 
            <div className='label'>
                <label className='label'>Full Name</label>
                <input type='text' className='input1' placeholder='Enter your name' name='contact_name' onChange={handleChange} />
            </div>
            <div className='label'>
                <label className='label'>Email</label>
                <input type='email' className='input2' placeholder='Enter your email' name='contact_email' onChange={handleChange} />
            </div>
            <div className='label'>
                <label className='label'>Message</label>
                <textarea className='input3' placeholder='Go ahead,we are listening' name='contact_message' onChange={handleChange} ></textarea>
            </div>
         
            <button type="submit" className='btns'>Submit</button>
          
          </div>
           
          </div>
        </div>
        </form>
    )
  }
export default Contact;
