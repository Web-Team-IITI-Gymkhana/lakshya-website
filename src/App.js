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
      <Home/>
      <AboutUs/>
      <Grid/>
      <Banner/>
      <Faq/>
      <Footer/>
    </div>
  );
}

export default App;
