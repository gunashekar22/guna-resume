import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Profile from './profile';
import './App.css';
import Toggle from './toggle';

import Education from './education';
 import Home from "./home.js";
import 'bootstrap/dist/css/bootstrap.min.css';
import Certification from './certifications.js';

import Skills from './skills.js';
import Contact from './contact.js';
import Projects from './projects.js';

function App() {
  return (
    <Router>
    <Container>
      {/* row 1 - toggle */}
      <Row className="mb-4">
        <Col xs={12} lg={12} className="text-center">
          <Toggle />
        </Col>
      </Row>
      {/* row 2 - globe */}
      <Row className="mb-4">
        <Col xs={12} lg={12}>
   
  
        </Col>
      </Row>
      <Routes>
      <Route  exact path="/resume" element={<Home/>}/>
        <Route path="/profile" element={<Profile />} />
        <Route path="/education" element={<Education />} />
        {/* <Route path="/certifications" element={<Certification/>}/> */}
        <Route path="/skills" element={<Skills/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/projects" element={<Projects/>}/>
        {/* Add other routes here */}
      </Routes>
    </Container>
  </Router>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

export default App;
