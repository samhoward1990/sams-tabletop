import React from 'react';
import { BrowserRouter as Router, Link, Switch, Route } from 'react-router-dom';
import { Navbar, Nav, Image, Button } from 'react-bootstrap';
import './App.css';

import rpLogo from './images/rp-logo.png';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar bg="light" expand="lg">
          <Link to="/"><Navbar.Brand><Image src={rpLogo} width="50px" height="50px" /></Navbar.Brand></Link>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              <Link to="/play"><Button className="styled-button mr-2" variant="outline-dark">Play</Button></Link>
              <Link to="/signin"><Button className="styled-button" variant="outline-dark">Sign in</Button></Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    </Router>
  );
}

export default App;
