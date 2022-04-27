import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';

//Components
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';

//Pages
import Landing from './pages/Landing/Landing';
import About from './pages/About/About';
import Schedule from './pages/Schedule/Schedule';
import Testimonials from './pages/Testimonials/Testimonials';
// Startups page goes here
import AboutByte from './pages/AboutByte/AboutByte';
import FAQs from  './pages/FAQs/FAQs';
import Internships from './pages/Internships/Internships';

//Backgrounds for the intersected areas
import Bars from './pages/Landing/assets/landing__bg-bars.png'

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
        <img id="landing__bars" src={Bars} alt="Bars" />
        <About />
        <Schedule />
        <Testimonials />
        {/* <Startups /> */}
        <AboutByte />
        <FAQs />
        <Footer />
      </body>
    </div>
  );
}

export default App;
