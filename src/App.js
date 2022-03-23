import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import React from 'react';

//Components
import Navbar from './components/Navbar/Navbar';
import Ticket from './components/Ticket';
import Landing from './pages/Landing/Landing';
import Testimonials from './pages/Testimonials/Testimonials';

// Change this to the page when merging, this is for the pfp only right now
import TestimonialPicture from './components/Testimonials/TestimonialPicture';


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
        <Testimonials />
      </body>
    </div>
  );
}

export default App;
