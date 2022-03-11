import './App.css';

//Components
import Navbar from './components/navbar/index';
import Landing from './components/landing/index';


// Startup Summit Fonts 
import './fonts/objectivity/Objectivity-Bold.otf';
import './fonts/objectivity/Objectivity-Medium.otf';
import './fonts/objectivity/Objectivity-Regular.otf';
import './fonts/objectivity/Objectivity-Light.otf';
import './fonts/nulshock/nulshock bd.ttf';

function App() {
  return (
    <div className="App">
      <header>
        <Navbar />
      </header>
      <body>
        <Landing />
      </body>
    </div>
  );
}

export default App;
