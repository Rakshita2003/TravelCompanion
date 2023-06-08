import React from 'react';
import '../App.css';
import HeroSection from '../components/HeroSection';
import About from '../pages/About';
import Reviews from '../pages/Reviews';
import Footer from '../components/Footer';
function Home() {
  return (
    <>
    <HeroSection/>
    <About/>
    <Reviews/>
    <Footer/>
    </>
  );
}

export default Home;