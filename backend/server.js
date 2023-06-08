const express = require('express')
const mysql = require('mysql')
const cors = require('cors')

const app = express();
app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
  host     : 'travelcompanion.cuplev62p4lt.us-east-2.rds.amazonaws.com',
  user     : 'admin',
  password : 'ciqvuj-gemruC-binze0',
  database : 'travel-companion'
});

app.post('/sign-up',(req,res) => {
    const sql = "INSERT INTO users(first_name,last_name,gender,contact_num,dob,email_id,country,state,city,user_name,password) VALUES(?)";
  
    const values =[
        req.body.first_name[0],
        req.body.last_name[0],        
        req.body.gender[0],
        req.body.contact_num[0],
        req.body.dob[0],
        req.body.email_id[0],
        req.body.country[0],
        req.body.state[0],
        req.body.city[0],
        req.body.user_name[0],
        req.body.password[0],
    ]

    db.query(sql,[values],(err,data) => {
        if(err) {
          console.log("err",err);
          return res.json(err);
        }
        return res.json(data);
    })
})
app.post('/contact',(req,res) => {
  const sql = "INSERT INTO concerns(contact_name,contact_email,contact_message) VALUES(?)";
  const values =[
      req.body.contact_name[0],
      req.body.contact_email[0],
      req.body.contact_message[0],
  ]
  db.query(sql,[values],(err,data) => {
    if(err) {
      console.log("err",err);
      return res.json(err);
    }
    return res.json(data);
  })
})
app.post('/bookcompanion',(req,res) => {
  const Providers = "INSERT INTO providers(pnr_num,passport_num,language,comments) VALUES(?)";
  const Flights = "INSERT INTO flights(flight_num,start_dest,flight_date,flight_time,end_dest) VALUES(?)";
  const providers =[
      req.body.pnr_num[0],
      req.body.passport_num[0],
      req.body.language[0],
      req.body.comments[0],
  ];
  const flights =[
    req.body.flight_num[0],
    req.body.start_dest[0],
    req.body.flight_date[0],
    req.body.flight_time[0],
    req.body.end_dest[0],
];
  db.query(Providers,[providers],(error,providerdata) => {
    if(error) throw error;
      console.log("Providers added",providerdata);
  db.query(Flights,[flights],(error,flightdata) => {
  if(error) throw error;
    console.log("Flights added",flightdata);
   });
  });
})
app.post('/needcompanion',(req,res) => {
  const Dependents = "INSERT INTO dependents(first_name,last_name,dob,pnr_num,passport_num,contact_num,gender,disability,language,comments) VALUES(?)";
  const Flights = "INSERT INTO flights(flight_num,start_dest,flight_date,flight_time,end_dest,travel_no) VALUES(?)";
  const dependents =[
      req.body.first_name[0],
      req.body.last_name[0],
      req.body.dob[0],
      req.body.pnr_num[0],
      req.body.passport_num[0],
      req.body.contact_num[0],
      req.body.gender[0],
      req.body.disability[0],
      req.body.language[0],
      req.body.comments[0],
  ];
  const flights =[
    req.body.flight_num[0],
    req.body.start_dest[0],
    req.body.flight_date[0],
    req.body.flight_time[0],
    req.body.end_dest[0],
    req.body.travel_no[0],
];
  db.query(Dependents,[dependents],(error,dependentdata) => {
    if(error) throw error;
      console.log("Dependents added",dependentdata);
  db.query(Flights,[flights],(error,flightdata) => {
  if(error) throw error;
    console.log("Flights added",flightdata);
   });
  });
})

app.listen(8081, () => {
 console.log("Successfull ..")
})