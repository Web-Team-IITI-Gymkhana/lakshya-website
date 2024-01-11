import React from 'react';
import Navbar from './components/navbar'; 
import Home from './components/home';
import AboutUs from './components/about_us';
import Grid from './components/grid';
import Faq from './components/faqs';
import Footer from './components/footer';
import Banner from './components/Banner';

function App() {
  return (
    <div>
      <Navbar/>
      <div id="home">
        <Home/>
      </div>
      <div id="about_us" className='pt-24'>
        <AboutUs/>
      </div>
      <div id="sports" className='py-5'>
        <Grid/>
      </div>
      <div id="our_vision" className='pt-24'>
        <Banner/>
      </div>
      <div id="faqs" className='py-16'>
        <Faq/>
      </div>
      <div id="contact_us">
      <Footer/>
      </div>
    </div>
  );
}

export default App;
