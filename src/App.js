import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Container } from 'react-bootstrap';

//Components
import Navbar from './components/Navbar/Navbar';
import Ticket from './components/Ticket';
//import Footer from './components/Footer';

//Pages
import Landing from './pages/Landing/Landing';
import About from './pages/About/About';
import Schedule from './pages/Schedule/Schedule';
import Testimonials from './pages/Testimonials/Testimonials';
// Startups page goes here
import AboutByte from './pages/AboutByte/AboutByte';
import FAQs from  './pages/FAQs/FAQs';

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
        {/* <Container>
          <Route path='/home' component={Landing} />
          <Route path='/about' component={About} />
          <Route path='/schedule' component={Schedule} />
          <Route path='/faqs' component={FAQs} />
        </Container> */}
      </Router>
      <body>
        <Landing />
          <img id="landing__bars" src={Bars} />
          <Router>
            <About />
          </Router>
          <Schedule />
        <Testimonials />
        {/* <Startups /> */}
        <AboutByte />
        {/* <FAQs /> */}
      </body>
    </div>
  );
}
// sticky nav, 
//fix designs for about byte, 
//align left all text
//aidan n team will adjust boarding pass copy,
//claim yours here button changes to another word
// 

export default App;
