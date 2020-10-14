import React from 'react';
import { BrowserRouter as Router, Link, Switch, Route } from 'react-router-dom';
import { Navbar, Nav, Button } from 'react-bootstrap';
import './App.css';

import HomePage from './pages/homepage/homepage'

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar bg="light" expand="lg">
          <Link to="/"><Navbar.Brand className="styled-text">Spiderfingers' Tabletop</Navbar.Brand></Link>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              <Link to="/play"><Button className="styled-button mr-2" variant="outline-dark">Play</Button></Link>
              <Link to="/signin"><Button className="styled-button" variant="outline-dark">Sign In</Button></Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
