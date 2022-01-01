import './style/Home.css';
import './style/Resume.css';
import './style/Contact.css';
import ImportLogo from './img/new-logo.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { NavLink, Route, Routes } from 'react-router-dom';
import Home from './component/Home.js';
import Resume from './component/Resume';
import Contact from './component/Contact';
import { useEffect } from 'react';
import WebFont from 'webfontloader';

function App() {
  useEffect(() => {
    WebFont.load({
      google: {
        families: ['Fira Sans'],
      },
    });
  }, []);

  return (
      <div className="app">
        <Navbar collapseOnSelect expand="lg" fixed="top" variant="dark">
          <Container>
            <img src={ImportLogo} alt="import" className="logo-navbar"></img>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="me-auto"></Nav>

              <nav className="nav">
                <NavLink to="/" className="nav-item">
                  Home
                </NavLink>
              </nav>

              <nav className="nav">
                <NavLink to="resume" className="nav-item">
                  Resume
                </NavLink>
              </nav>

              <nav className="nav">
                <NavLink to="contact" className="nav-item">
                  Contact
                </NavLink>
              </nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>

        <Routes>
          <Route path="*" element={<Home />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>

        <div className="footer-container">
          <footer>@ 2021 Zulhaditya. All right reserved.</footer>
        </div>
      </div>
    
  );
}

export default App;
