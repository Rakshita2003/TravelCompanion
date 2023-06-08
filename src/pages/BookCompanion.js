import './BookCompanion.css';
import Footer from '../components/Footer';
import React,{useState}  from "react";
import Select from 'react-select';
import axios from 'axios';

const option2 = [
  {label: "Arabic",value: 1},
  {label: "Alanian",value: 2},
  {label: "Bengali",value: 3},
  {label: "Bulgarian",value: 4},
  {label: "Catalan",value: 5},
  {label: "Czech",value: 6},
  {label: "Dutch",value: 7},
  {label: "English",value: 8},
  {label: "Finnish",value: 9},
  {label: "French",value: 10},
  {label: "German",value: 11},
  {label: "Greek",value: 12},
  {label: "Hindi",value: 13},
  {label: "Hungarian",value: 14},
  {label: "Italian",value: 15},
  {label: "Japanese",value: 16},
  {label: "Korean",value: 17},
  {label: "Latin",value: 18},
  {label: "Marathi",value: 19},
  {label: "Malayalam",value: 20},
  {label: "Nepali",value: 21},
  {label: "Norwegian",value: 22},
  {label: "Oriya",value: 23},
  {label: "Polish",value: 24},
  {label: "Portugese",value: 25},
  {label: "Punjabi",value: 26},
  {label: "Romanian",value: 27},
  {label: "Russian",value: 28},
  {label: "Spanish",value: 29},
  {label: "Sanskrit",value: 30},
  {label: "Tamil",value: 31},
  {label: "Thai",value: 32},
  {label: "Turkish",value: 33},
  {label: "Ukrainian",value: 34},
  {label: "Urdu",value: 35},
  {label: "Vietnamese",value: 36},
  {label: "Zulu",value: 37},
]
function BookCompanion () {
  const [providers, setValues] = useState({
    pnr_num: '',
    passport_num: '',
    language: '',
    comments: '',
  })

    const [flights, setdetails] = useState({
    flight_num: '',
    start_dest: '',
    flight_date: '',
    flight_time: '',
    end_dest: '',
  })

  const handleChange = (event) => {
    setValues({...providers, [event.target.name]:[event.target.value]})
    setdetails({...flights, [event.target.name]:[event.target.value]})
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    axios.post('http://localhost:8081/bookcompanion', providers,flights)
    .then(res => console.log("Sign Up Successfull!!"))
    .catch(err => console.log(err));
  }
  return (
    <form onSubmit={handleSubmit}>
      <div className="book-companion-details">
        <div className="book-companion-details-content">
          <div className="book-companion-details-details">
            <div className="book-companion-details-frame422">
              <span className="book-companion-details-text">
                <span>Starting Destination</span>
              </span>
              <div className="book-companion-details-input">
                <span className="book-companion-details-text001">
                  <input type='text' className='name1' placeholder='Start Destination' name='start_dest' onChange={handleChange} />
                </span>
              </div>
            </div>
            <div className="book-companion-details-end">
              <span className="book-companion-details-text002">
                <span>Ending Destination</span>
                <input type='text' className='end' placeholder='End Destination' name='end_dest' onChange={handleChange}/>
              </span>
            </div>
            <div className="book-companion-details-date">
              <span className="book-companion-details-text003">
                <span>Flight Date</span>
                <input type='date' className='flight' placeholder='DD-MM-YYYY' name='flight_date'  onChange={handleChange}/>
              </span>
            </div>
            <div className="book-companion-details-time">
              <span className="book-companion-details-text004">
                <span>Flight Time</span>
                <input type='time' className='time' placeholder='Time' name='flight_time' onChange={handleChange} />
              </span>
            </div>
            <div className="book-companion-details-id">
              <span className="book-companion-details-text005">
                <span>Flight Number</span>
                <input type='text' className='id' placeholder='Flight Number' name='flight_num' onChange={handleChange} />
              </span>
            </div>
            <div className="book-companion-details-fname">
              <span className="book-companion-details-text007">
                <span>First Name</span>
                <input type='text' className='fname' placeholder='First Name' name='first_name' onChange={handleChange} />
              </span>
            </div>
            <div className="book-companion-details-lname">
              <span className="book-companion-details-text008">
                <span>Last Name</span>
                <input type='text' className='lname' placeholder='Last Name' name='last_name' onChange={handleChange}/>
              </span>
            </div>
            <div className="book-companion-details-pnr">
              <span className="book-companion-details-text009">
                <span>Ticket PNR</span>
                <input type='text' className='pnr' placeholder='PNR Number' name='pnr_num' onChange={handleChange} />
              </span>
            </div>
            <div className="book-companion-details-passport">
              <span className="book-companion-details-text010">
                <span>Passport Number</span>
                <input type='text' className='pass' placeholder='Passport Number' name='passport_num' onChange={handleChange} />
              </span>
            </div>
            <div className="book-companion-details-date1">
              <span className="book-companion-details-text011">
                <span>Date Of Birth</span>
                <input type='date' className='dob' placeholder='' name='dob' onChange={handleChange}/>
              </span>
            </div>
            
            <div className="book-companion-details-gender">
              <span className="book-companion-details-text012">
                <span>Gender</span> </span>
                <select class="form-select" id="gender" className="gender" name='gender' onChange={handleChange}>
                <option>Select Gender</option>
                    <option value="M">Male</option>
                    <option value="F">Female</option>
                    <option value="O">Others</option>
                </select>
            </div>

            <div className="book-companion-details-contact">
              <span className="book-companion-details-text013">
                <span>Contact Number</span>
                <input type='text' className='cont' placeholder='+91 9745341208' name='contact_num' onChange={handleChange} />
              </span>
            </div>
            <div className="book-companion-details-language">
              <span className="book-companion-details-text015">
              <span>Spoken languages</span> 
                <Select className="language" options={option2} isMulti />
                </span> 
            </div>
            <div className="book-companion-details-instruction">
              <span className="book-companion-details-text016">
                <span>Comments/Concerns</span>
                <input type='text' className='inst' placeholder='Mention if any' name='comments' onChange={handleChange} />
              </span>
            </div>
          </div>
        </div>
        <span className="book-companion-details-enter">
          <span>Enter Details</span>
        </span>
      </div>

            <button type= "submit" className='booksub'>Submit</button>
            <span className="book-companion-details-text000 ">
              <h1>Flight Details</h1>
            </span>
            <span className="book-companion-details-text006 ">
              <h1>Details for being a Companion</h1>
            </span>
          
      <Footer/>
      </form>
  );
}

export default BookCompanion;
