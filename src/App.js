import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'react-datepicker/dist/react-datepicker.css';
import Form from './Form';
import './App.css';
import './Home.css';
import './About.css';
import './Services.css';
import homeImage from './images/home-image.png';

// Create components for the Home, About, and Services pages
const Home = () => (
  <div className="page">
    <div className="content-container">
      <img src={homeImage} alt="background image home" className='page-image'/>
      <h2 className="page-title">Welcome to our Website</h2>
      <p className="page-text">
        Explore our services and discover more about us. Ready to get started?
      </p>
      <Link to="/register" className="btn btn-primary">
        Register Now
      </Link>
    </div>
  </div>
);

const About = () => (
  <div className="page">
    <div className="content-container">
      <h2 className="page-title">About Us</h2>
      <p className="page-text">
        We are a dedicated team providing excellent services to our clients.
        Learn more about our mission and vision.
      </p>
    </div>
  </div>
);

const Services = () => (
  <div className="page">
    <div className="content-container">
      <h2 className="page-title">Our Services</h2>
      <p className="page-text">
        Explore our wide range of services tailored to meet your needs.
        {/* Add more content about your services here */}
      </p>
    </div>
  </div>
);

function App() {
  return (
    <Router>
      <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container-fluid">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link to="/" className="nav-link">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/about" className="nav-link">
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/services" className="nav-link">
                  Services
                </Link>
              </li>
            </ul>
          </div>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/register" element={<Form />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
