import './App.css';
import Home from './components/Home';
import Navbar from './components/navbar';
import ContactUs from './components/ContactUs';
import AboutUs from './components/AboutUs';
import Menu from './components/Menu';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar/>
        <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route path="/menu" element={<Menu/>} />
          <Route path="/about" element={<AboutUs/>} />
          <Route path="/contact" element={<ContactUs/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
