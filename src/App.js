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
      <div id="about_us">
        <AboutUs/>
      </div>
      <div id="sports">
        <Grid/>
      </div>
      <div id="our_vision">
        <Banner/>
      </div>
      <div id="faqs">
        <Faq/>
      </div>
      <div id="contact_us">
      <Footer/>
      </div>
    </div>
  );
}

export default App;
