import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import React from 'react';

//Components
import Navbar from './components/Navbar/Navbar';
import Ticket from './components/Ticket';
import Landing from './pages/Landing/Landing';
import Testimonials from './pages/Testimonials/Testimonials';

// Change this to the page when merging, this is for the pfp only right now
import TestimonialsPage from './components/Testimonials/TestimonialPicture';

//Backgrounds for the intersected areas
import Bars from './pages/Landing/assets/landing__bg-bars.svg'

// Startup Summit Fonts 
import './fonts/objectivity/Objectivity-Bold.otf';
import './fonts/objectivity/Objectivity-Medium.otf';
import './fonts/objectivity/Objectivity-Regular.otf';
import './fonts/objectivity/Objectivity-Light.otf';
import './fonts/nulshock/nulshock bd.ttf';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
      </Router>
      <body>
        <Landing />
          <img id="landing__bars" src={Bars} />
        <Testimonials />
      </body>
    </div>
  );
}

export default App;
