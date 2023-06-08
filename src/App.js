import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Reviews from './pages/Reviews';
import Contact from './pages/Contact';
import Events from './pages/Events';
import SignIn from './pages/SignIn';
import Safety from './pages/Safety';
import Privacy from './pages/Privacy';
import Terms from './pages/Terms';
import SignUp from './pages/SignUp';
import NeedCompanion from './pages/NeedCompanion';
import BookCompanion from './pages/BookCompanion';
import Profile from './pages/Profile';

import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

function App() {
  return (
    <>
    <Router>
      <Navbar/>
      <Routes>
        <Route path='/' exact element={<Home/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/services' element={<Services/>} />
        <Route path='/reviews' element={<Reviews/>} />
        <Route path='/contact' element={<Contact/>} />
        <Route path='/events' element={<Events/>} />
        <Route path='/sign-in' element={<SignIn/>} />
        <Route path='/safety' element={<Safety/>} />
        <Route path='/privacy' element={<Privacy/>} />
        <Route path='/terms' element={<Terms/>} />
        <Route path='/sign-up' element={<SignUp/>} />
        <Route path='/needcompanion' element={<NeedCompanion/>} />
        <Route path='/bookcompanion' element={<BookCompanion/>} />
        <Route path='/profile' element={<Profile/>} />
      </Routes>
      </Router>
    </>
    
  );
}

export default App;
