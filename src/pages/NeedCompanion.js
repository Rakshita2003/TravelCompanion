import './NeedCompanion.css';
import axios from 'axios';
import Footer from '../components/Footer';
import React, { useState } from "react";
import Select from 'react-select';
function NeedCompanion() {
  const [inputList, setinputList]= useState([{firstName:'', lastName:'', ticketPnr: '', passportNumber: ''}]);
  const handleinputchange=(e, index)=>{
    const {name, value}= e.target;
    const list= [...inputList];
    list[index][name]= value;
    setinputList(list);
  }
 
  const handleremove= index=>{
    const list=[...inputList];
    list.splice(index,1);
    setinputList(list);
  }
  const handleaddclick=()=>{ 
    setinputList([...inputList, { firstName:'', lastName:'', ticketPnr: '', passportNumber: ''}]);
  }

  const [dependents, setValues] = useState({
    first_name: '',
    last_name: '',
    dob: '',
    pnr_num: '',
    passport_num: '',
    contact_num: '',
    gender: '',
    disability: '',
    language: '',
    comments: ''
  })
  const [flights, setdetails1] = useState({
    flight_num: '',
    start_dest: '',
    flight_date: '',
    flight_time: '',
    end_dest: '',
  })
  const handleChange = (event) => {
    setValues({...dependents, [event.target.name]:[event.target.value]})
    setdetails1({...flights, [event.target.name]:[event.target.value]})
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    axios.post('http://localhost:8081/needcompanion', dependents,flights)
    .then(res => console.log("Sign Up Successfull!!"))
    .catch(err => console.log(err));
  }

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

  return (
    <form onSubmit={handleSubmit}>
      <div className="need-companion-details">
        <div className="need-companion-details-content">
          <div className="need-companion-details-details">
            <div className="need-companion-details-frame422">
              <span className="need-companion-details-text">
                <span>Starting Destination</span>
              </span>
              <div className="need-companion-details-input">
                <span className="need-companion-details-text001">
                  <input type='text' className='ncname1' placeholder='Enter destination' name='start_dest' onChange={handleChange}/>
                </span>
              </div>
            </div>
            <div className="need-companion-details-end">
              <span className="need-companion-details-text002">
                <span>Ending Destination</span>
                <input type='text' className='ncend' placeholder='Enter end destination'name='end_dest' onChange={handleChange} />
              </span>
            </div>
            <div className="need-companion-details-date">
              <span className="need-companion-details-text003">
                <span>Flight Date</span>
                <input type='date' className='ncflight' placeholder='DD-MM-YYYY' name='flight_date' onChange={handleChange}/>
              </span>
            </div>
            <div className="need-companion-details-time">
              <span className="need-companion-details-text004">
                <span>Flight Time</span>
                <input type='time' className='nctime' placeholder='Enter time' name='flight_time' onChange={handleChange}/>
              </span>
            </div>
            <div className="need-companion-details-id">
              <span className="need-companion-details-text005">
                <span>Flight Number</span>
                <input type='text' className='ncid' placeholder='Enter value' name='flight_num' onChange={handleChange}/>
              </span>
            </div>
            <div className="need-companion-details-travel">
              <span className="need-companion-details-text017">
                <span>No. Of Travelers</span> </span>
                <select class="form-select" id="travel" className="nctravel" name='travel_no' onChange={handleChange}>
                <option>Select </option>
                   <option value="one">1</option>
                    <option value="two">2</option>
                </select>
            </div>
            <div className="need-companion-details-fname">
              <span className="need-companion-details-text007">
                <span>First Name</span>
                <input type='text' className='ncfname' placeholder='Enter first name' name='first_name' onChange={handleChange} />
              </span>
            </div>
            <div className="need-companion-details-lname">
              <span className="need-companion-details-text008">
                <span>Last Name</span>
                <input type='text' className='nclname' placeholder='Enter last name' name='last_name' onChange={handleChange}/>
              </span>
            </div>
            <div className="need-companion-details-pnr">
              <span className="need-companion-details-text009">
                <span>Ticket PNR</span>
                <input type='text' className='ncpnr' placeholder='Enter pnr number'name='pnr_num' onChange={handleChange} />
              </span>
            </div>
            <div className="need-companion-details-passport">
              <span className="need-companion-details-text010">
                <span>Passport Number</span>
                <input type='text' className='ncpass' placeholder='Enter passport number' name='passport_num' onChange={handleChange}/>
              </span>
            </div>
            <div className="need-companion-details-date1">
              <span className="need-companion-details-text011">
                <span>Date Of Birth</span>
                <input type='date' className='ncdob' placeholder='' name='dob' onChange={handleChange}/>
              </span>
            </div>
            <div className="need-companion-details-gender">
              <span className="need-companion-details-text012">
                <span>Gender</span></span>
                <select class="form-select" id="gender" className="ncgender" name='gender' onChange={handleChange}>
                <option>Select Gender</option>
                    <option value="M">Male</option>
                    <option value="F">Female</option>
                    <option value="O">Others</option>
                </select>
            </div>
            <div className="need-companion-details-contact">
              <span className="need-companion-details-text013">
                <span>Contact Number</span>
                <input type='text' className='nccont' placeholder='+91 9745341208' name='contact_num' onChange={handleChange} />
              </span>
            </div>
            <div className="need-companion-details-disability">
              <span className="need-companion-details-text014">
                <span>Disability</span>
                <input type='text' className='ncdisa' placeholder='Yes/No' name='disability' onChange={handleChange}/>
              </span>
            </div>
            <div className="need-companion-details-language">
              <span className="need-companion-details-text015">
                <span>Spoken languages</span> 
                <Select className="nclanguage" options={option2} isMulti />
                </span> 
            </div>
            <div className="need-companion-details-instruction">
              <span className="need-companion-details-text016">
                <span>Comments/Concerns</span>
                <input type='text' className='ncinst' placeholder='Mention if any' name='comments' onChange={handleChange} />
              </span>
            </div>
          </div>
        </div>
        
        <span className="need-companion-details-enter">
          <span>Enter Details</span>
        </span>
      </div>

            <button type= "submit" className='needsub'>Submit</button>
        
            <div className="need-content">
            { 
            inputList.map( (x,i)=>{
              return(
              <div className="row">
                <div className="form-group1">
                 <label >First Name</label>
                  <input type="text"  name="firstName" className="form-control"  placeholder="First Name" onChange={ e=>handleinputchange(e,i)} />
                </div>
                <div className="form-group2">
                 <label >Last Name</label>
                  <input type="text"  name="lastName" className="form-control"   placeholder="Last Name" onChange={ e=>handleinputchange(e,i) }/>
                </div>
                <div className="form-group3">
                 <label >Ticket PNR</label>
                  <input type="text"  name="ticketPnr" className="form-control" placeholder="PNR Number" onChange={ e=>handleinputchange(e,i) }/>
                </div>
                <div className="form-group4">
                 <label >Passport Number</label>
                  <input type="text"  name="passportNumber" className="form-control" placeholder="Passport Number" onChange={ e=>handleinputchange(e,i) }/>
                </div>
                <div className="form-group5">
               {
                  inputList.length!==1 &&
                  <button  className="btn-remove" onClick={()=> handleremove(i)}>Remove</button>
               }
               { inputList.length-1===i &&
               <button  className="btn-add" onClick={ handleaddclick}>Add More</button>
               }
                 </div>
            </div>
              );
             } )} 
            </div>
            <span className="need-companion-details-text000 ">
              <h1>Flight Details</h1>
            </span>
            <span className="need-companion-details-text006 ">
              <h1>Details for need a companion</h1>
            </span>
            <span className="need-companion-details-text018 ">
              <h1>Add Details Of Other Travelers</h1>
            </span>
      <Footer/>
      </form>
    
  );
}

export default NeedCompanion;
